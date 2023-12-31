import { p as promiseResolve, b as bootstrapLazy } from './index-8c3bf960.js';
export { s as setNonce } from './index-8c3bf960.js';

/*
 Stencil Client Patch Browser v3.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["uc-side-drawer",[[1,"uc-side-drawer",{"first":[1],"open":[1540],"showContactInfo":[32],"oncloseDrawer":[64],"onContentChange":[64],"openMainMenu":[64]}]]],["uc-tooltip",[[1,"uc-tooltip",{"text":[1]}]]],["uc-spinner-loading_3",[[1,"uc-stock-finder",{"searchResults":[32],"loading":[32]}],[1,"uc-stock-price",{"stockSymbol":[1,"stock-symbol"],"fetchedPrice":[32],"stockSymbolValue":[32],"isStockInputValid":[32],"error":[32],"loading":[32]},[[16,"ucSymbolSelected","onStockSymbolSelected"]]],[1,"uc-spinner-loading"]]]], options);
});

//# sourceMappingURL=stencilwebcomponents.js.map