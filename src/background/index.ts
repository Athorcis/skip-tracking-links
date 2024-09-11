import browser from 'webextension-polyfill';
import {extractSourceUrl} from './extract-source-url';

browser.webRequest.onBeforeRequest.addListener(
    function (details) {
        const redirectUrl = extractSourceUrl(details.url);

        if (redirectUrl) {
            return {redirectUrl};
        }

        return { cancel: false };
    },
    {
        urls: ['<all_urls>'],
        types: ['main_frame']
    },
    ['blocking']
);
