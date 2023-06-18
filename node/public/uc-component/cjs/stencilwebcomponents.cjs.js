'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7b783166.js');

/*
 Stencil Client Patch Browser v3.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencilwebcomponents.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["uc-side-drawer.cjs",[[1,"uc-side-drawer",{"first":[1],"open":[1540],"showContactInfo":[32],"oncloseDrawer":[64],"onContentChange":[64],"openMainMenu":[64]}]]],["uc-tooltip.cjs",[[1,"uc-tooltip",{"text":[1]}]]],["uc-spinner-loading_3.cjs",[[1,"uc-stock-finder",{"searchResults":[32],"loading":[32]}],[1,"uc-stock-price",{"stockSymbol":[1,"stock-symbol"],"fetchedPrice":[32],"stockSymbolValue":[32],"isStockInputValid":[32],"error":[32],"loading":[32]},[[16,"ucSymbolSelected","onStockSymbolSelected"]]],[1,"uc-spinner-loading"]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=stencilwebcomponents.cjs.js.map