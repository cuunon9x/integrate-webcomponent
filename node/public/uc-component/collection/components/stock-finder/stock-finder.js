import { h } from "@stencil/core";
import { API_KEY } from "../../global/global";
export class StockFinder {
  constructor() {
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
  static get is() { return "uc-stock-finder"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./stock-finder.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["stock-finder.css"]
    };
  }
  static get states() {
    return {
      "searchResults": {},
      "loading": {}
    };
  }
  static get events() {
    return [{
        "method": "ucSymbolSelected",
        "name": "ucSymbolSelected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=stock-finder.js.map
