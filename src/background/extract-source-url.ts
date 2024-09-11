
const patterns = [/^https:\/\/click\.pstmrk\.it\/3s\/(.+)$/];

export function extractSourceUrl(url: string): string|undefined {
    let rawSourceUrl: string | undefined;

    for (const pattern of patterns) {
        const matches = url.match(pattern);

        if (matches instanceof Array) {
            rawSourceUrl = matches[1];
        }
    }

    if (rawSourceUrl) {
        const decodedSourceUrl = decodeURIComponent(rawSourceUrl);

        if (/^https?:\/\/:/.test(decodedSourceUrl)) {
            return decodedSourceUrl;
        }

        return 'https://' + decodedSourceUrl;
    }

    return undefined;
}
