import { h, } from "@stencil/core";
import { API_KEY } from "../../global/global";
export class StockPrice {
  constructor() {
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
  render() {
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
  static get is() { return "uc-stock-price"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./stock-price.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["stock-price.css"]
    };
  }
  static get properties() {
    return {
      "stockSymbol": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "stock-symbol",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "fetchedPrice": {},
      "stockSymbolValue": {},
      "isStockInputValid": {},
      "error": {},
      "loading": {}
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "stockSymbol",
        "methodName": "stockSymbolChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "ucSymbolSelected",
        "method": "onStockSymbolSelected",
        "target": "body",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=stock-price.js.map
