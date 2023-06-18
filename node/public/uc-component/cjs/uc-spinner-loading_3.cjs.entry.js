'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7b783166.js');

const spinnerLoadingCss = ":host{display:block}.lds-roller{display:inline-block;position:relative;width:80px;height:80px}.lds-roller div{animation:lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;transform-origin:40px 40px}.lds-roller div:after{content:\" \";display:block;position:absolute;width:7px;height:7px;border-radius:50%;background:#750175;margin:-4px 0 0 -4px}.lds-roller div:nth-child(1){animation-delay:-0.036s}.lds-roller div:nth-child(1):after{top:63px;left:63px}.lds-roller div:nth-child(2){animation-delay:-0.072s}.lds-roller div:nth-child(2):after{top:68px;left:56px}.lds-roller div:nth-child(3){animation-delay:-0.108s}.lds-roller div:nth-child(3):after{top:71px;left:48px}.lds-roller div:nth-child(4){animation-delay:-0.144s}.lds-roller div:nth-child(4):after{top:72px;left:40px}.lds-roller div:nth-child(5){animation-delay:-0.18s}.lds-roller div:nth-child(5):after{top:71px;left:32px}.lds-roller div:nth-child(6){animation-delay:-0.216s}.lds-roller div:nth-child(6):after{top:68px;left:24px}.lds-roller div:nth-child(7){animation-delay:-0.252s}.lds-roller div:nth-child(7):after{top:63px;left:17px}.lds-roller div:nth-child(8){animation-delay:-0.288s}.lds-roller div:nth-child(8):after{top:56px;left:12px}@keyframes lds-roller{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

const SpinnerLoading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null, index.h("div", { class: "lds-roller" }, index.h("div", null), index.h("div", null), index.h("div", null), index.h("div", null), index.h("div", null), index.h("div", null), index.h("div", null), index.h("div", null)))));
  }
};
SpinnerLoading.style = spinnerLoadingCss;

const API_KEY = "YOUR_KEY_HERE'";

const stockFinderCss = ":host{font-family:sans-serif;border:2px solid #3b013b;margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:#3b013b;padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid #3b013b;background:#3b013b;color:white;cursor:pointer}form button:hover,form button:active{background:#750175;border-color:#750175}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}ul{margin:0;padding:0;list-style:none}li{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li:hover,li:active{background:#3b013b;color:white}";

const StockFinder = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ucSymbolSelected = index.createEvent(this, "ucSymbolSelected", 7);
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
    let content = (index.h("ul", null, this.searchResults.map((result) => (index.h("li", { onClick: this.onSelectSymbol.bind(this, result.symbol) }, index.h("strong", null, result.symbol), " = ", result.name)))));
    if (this.loading) {
      content = index.h("uc-spinner-loading", null);
    }
    return [
      index.h("form", { onSubmit: this.onFindStock.bind(this) }, index.h("input", { id: "stock-symbol-find", ref: (el) => {
          this.stockNameInput = el;
        } }), index.h("button", { type: "submit" }, "Find")),
      content,
    ];
  }
};
StockFinder.style = stockFinderCss;

const stockPriceCss = ":host{font-family:sans-serif;border:2px solid #3b013b;margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:orange}form input{font:inherit;color:#3b013b;padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid #3b013b;background:#3b013b;color:white;cursor:pointer}form button:hover,form button:active{background:#750175;border-color:#750175}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}";

const StockPrice = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    let dataContent = index.h("p", null, "Please enter a symbol!");
    if (this.error) {
      dataContent = index.h("p", null, this.error);
    }
    if (this.fetchedPrice) {
      dataContent = index.h("p", null, "Price: $", this.fetchedPrice);
    }
    if (this.loading) {
      dataContent = index.h("uc-spinner-loading", null);
    }
    return [
      index.h("form", { onSubmit: (e) => this.onFetchStockPrice(e) }, index.h("input", { id: "stock-symbol", ref: (el) => (this.stockInput = el), value: this.stockSymbolValue, onInput: this.onStockValueChange.bind(this) }), index.h("button", { type: "submit", disabled: !this.isStockInputValid || this.loading }, "Fetch")),
      index.h("div", null, dataContent),
    ];
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "stockSymbol": ["stockSymbolChanged"]
  }; }
  render() { return index.h(index.Host, this.hostData(), this.__stencil_render()); }
};
StockPrice.style = stockPriceCss;

exports.uc_spinner_loading = SpinnerLoading;
exports.uc_stock_finder = StockFinder;
exports.uc_stock_price = StockPrice;

//# sourceMappingURL=uc-spinner-loading_3.cjs.entry.js.map