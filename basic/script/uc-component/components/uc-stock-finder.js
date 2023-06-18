import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { A as API_KEY } from './global.js';
import { d as defineCustomElement$2 } from './spinner-loading.js';

const stockFinderCss = ":host{font-family:sans-serif;border:2px solid #3b013b;margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:#3b013b;padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid #3b013b;background:#3b013b;color:white;cursor:pointer}form button:hover,form button:active{background:#750175;border-color:#750175}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}ul{margin:0;padding:0;list-style:none}li{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li:hover,li:active{background:#3b013b;color:white}";

const StockFinder = /*@__PURE__*/ proxyCustomElement(class StockFinder extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ucSymbolSelected = createEvent(this, "ucSymbolSelected", 7);
    this.searchResults = [];
    this.loading = false;
  }
  onFindStock(event) {
    event.preventDefault();
    const stockName = this.stockNameInput.value;
    this.onFetch(stockName);
  }
  onSelectSymbol(symbol) {
    this.ucSymbolSelected.emit(symbol);
  }
  // @Listen('ucSymbolSelected', { target: 'body' })
  onFetch(stockSymbol) {
    // event.preventDefault();
    this.loading = true;
    fetch(
    //   "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tencent&apikey=demo"
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockSymbol}&apikey=${API_KEY}`)
      .then((res) => {
      return res.json();
    })
      .then((parsedResponse) => {
      this.searchResults = parsedResponse["bestMatches"].map((matches) => {
        return { name: matches["2. name"], symbol: matches["1. symbol"] };
      });
      this.loading = false;
    })
      .catch((err) => {
      // this.error = err.message;
      console.log(err);
      this.loading = false;
    });
  }
  render() {
    let content = (h("ul", null, this.searchResults.map((result) => (h("li", { onClick: this.onSelectSymbol.bind(this, result.symbol) }, h("strong", null, result.symbol), " = ", result.name)))));
    if (this.loading) {
      content = h("uc-spinner-loading", null);
    }
    return [
      h("form", { onSubmit: this.onFindStock.bind(this) }, h("input", { id: "stock-symbol-find", ref: (el) => {
          this.stockNameInput = el;
        } }), h("button", { type: "submit" }, "Find")),
      content,
    ];
  }
  static get style() { return stockFinderCss; }
}, [1, "uc-stock-finder", {
    "searchResults": [32],
    "loading": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["uc-stock-finder", "uc-spinner-loading"];
  components.forEach(tagName => { switch (tagName) {
    case "uc-stock-finder":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StockFinder);
      }
      break;
    case "uc-spinner-loading":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UcStockFinder = StockFinder;
const defineCustomElement = defineCustomElement$1;

export { UcStockFinder, defineCustomElement };

//# sourceMappingURL=uc-stock-finder.js.map