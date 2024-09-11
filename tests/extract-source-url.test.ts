import { expect, test } from "vitest";
import {extractSourceUrl} from '../src/background/extract-source-url';

test("No tracking", () => {
    const url = 'https://www.google.fr/';

    expect(extractSourceUrl(url)).toBeUndefined();
});

test("Postmark", () => {
    const url = 'https://click.pstmrk.it/3s/developer.mozilla.org%2Fen-US%2Fdocs%2FMozilla%2FAdd-ons%2FWebExtensions%2FAPI%2FwebRequest%2FonBeforeRequest';
    const sourceUrl = 'https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest';

    expect(extractSourceUrl(url)).toBe(sourceUrl);
});
