import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { A as API_KEY } from './global.js';
import { d as defineCustomElement$2 } from './spinner-loading.js';

const stockPriceCss = ":host{font-family:sans-serif;border:2px solid #3b013b;margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:orange}form input{font:inherit;color:#3b013b;padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid #3b013b;background:#3b013b;color:white;cursor:pointer}form button:hover,form button:active{background:#750175;border-color:#750175}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}";

const StockPrice = /*@__PURE__*/ proxyCustomElement(class StockPrice extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fetchedPrice = undefined;
    this.stockSymbolValue = undefined;
    this.isStockInputValid = false;
    this.error = undefined;
    this.loading = false;
    this.stockSymbol = undefined;
  }
  stockSymbolChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.stockSymbolValue = newValue;
      this.isStockInputValid = true;
      // this.fetchStockPrice(newValue);
    }
  }
  onStockValueChange(event) {
    this.stockSymbolValue = event.target.value;
    if (this.stockSymbolValue.trim() !== "") {
      this.isStockInputValid = true;
    }
    else {
      this.isStockInputValid = false;
    }
  }
  onFetchStockPrice(e) {
    e.preventDefault();
    // const stockSymbol = (
    //   this.el.shadowRoot.querySelector("#stock-symbol") as HTMLInputElement
    // ).value;
    const stockSymbol = this.stockInput.value;
    this.fetchStockPrice(stockSymbol);
  }
  componentWillLoad() {
    console.log("will load");
  }
  componentDidLoad() {
    console.log("did load");
    if (this.stockSymbol) {
      // this.initialStockSymbol = this.stockSymbol;
      this.stockSymbolValue = this.stockSymbol;
      this.isStockInputValid = true;
      this.fetchStockPrice(this.stockSymbol);
    }
  }
  componentWillUpdate() {
    console.log("will update");
  }
  componentDidUpdate() {
    console.log("did update");
    // this.fetchStockPrice(this.stockInput.value);
  }
  disconnectedCallback() {
    console.log("disconnectedCallback");
  }
  onStockSymbolSelected(event) {
    console.log("Stock symbol selected" + event.detail);
    if ((event === null || event === void 0 ? void 0 : event.detail) !== this.stockSymbol) {
      this.stockSymbol = event.detail;
      this.fetchStockPrice(event.detail);
    }
  }
  fetchStockPrice(stockSymbol) {
    this.loading = true;
    fetch(
    // `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo`
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${API_KEY}`)
      .then((result) => {
      if (!result.ok) {
        throw new Error("Invalid!");
      }
      return result.json();
    })
      .then((parsedRes) => {
      if (!parsedRes["Global Quote"]) {
        this.error = "Invalid Stock Symbol!";
        throw new Error("Invalid Stock Symbol!");
      }
      this.error = "";
      this.fetchedPrice = +parsedRes["Global Quote"]["05. price"];
      this.loading = false;
    })
      .catch((err) => {
      this.error = err.message;
      this.loading = false;
    });
  }
  hostData() {
    return { class: this.error ? "error" : "" };
  }
  __stencil_render() {
    let dataContent = h("p", null, "Please enter a symbol!");
    if (this.error) {
      dataContent = h("p", null, this.error);
    }
    if (this.fetchedPrice) {
      dataContent = h("p", null, "Price: $", this.fetchedPrice);
    }
    if (this.loading) {
      dataContent = h("uc-spinner-loading", null);
    }
    return [
      h("form", { onSubmit: (e) => this.onFetchStockPrice(e) }, h("input", { id: "stock-symbol", ref: (el) => (this.stockInput = el), value: this.stockSymbolValue, onInput: this.onStockValueChange.bind(this) }), h("button", { type: "submit", disabled: !this.isStockInputValid || this.loading }, "Fetch")),
      h("div", null, dataContent),
    ];
  }
  get el() { return this; }
  static get watchers() { return {
    "stockSymbol": ["stockSymbolChanged"]
  }; }
  static get style() { return stockPriceCss; }
  render() { return h(Host, this.hostData(), this.__stencil_render()); }
}, [1, "uc-stock-price", {
    "stockSymbol": [1, "stock-symbol"],
    "fetchedPrice": [32],
    "stockSymbolValue": [32],
    "isStockInputValid": [32],
    "error": [32],
    "loading": [32]
  }, [[16, "ucSymbolSelected", "onStockSymbolSelected"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["uc-stock-price", "uc-spinner-loading"];
  components.forEach(tagName => { switch (tagName) {
    case "uc-stock-price":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StockPrice);
      }
      break;
    case "uc-spinner-loading":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UcStockPrice = StockPrice;
const defineCustomElement = defineCustomElement$1;

export { UcStockPrice, defineCustomElement };

//# sourceMappingURL=uc-stock-price.js.map