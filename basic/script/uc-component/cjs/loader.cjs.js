'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7b783166.js');

/*
 Stencil Client Patch Esm v3.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["uc-side-drawer.cjs",[[1,"uc-side-drawer",{"first":[1],"open":[1540],"showContactInfo":[32],"oncloseDrawer":[64],"onContentChange":[64],"openMainMenu":[64]}]]],["uc-tooltip.cjs",[[1,"uc-tooltip",{"text":[1]}]]],["uc-spinner-loading_3.cjs",[[1,"uc-stock-finder",{"searchResults":[32],"loading":[32]}],[1,"uc-stock-price",{"stockSymbol":[1,"stock-symbol"],"fetchedPrice":[32],"stockSymbolValue":[32],"isStockInputValid":[32],"error":[32],"loading":[32]},[[16,"ucSymbolSelected","onStockSymbolSelected"]]],[1,"uc-spinner-loading"]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map