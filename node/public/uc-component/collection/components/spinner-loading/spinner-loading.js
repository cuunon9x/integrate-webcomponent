import { Host, h } from "@stencil/core";
export class SpinnerLoading {
  render() {
    return (h(Host, null, h("slot", null, h("div", { class: "lds-roller" }, h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null)))));
  }
  static get is() { return "uc-spinner-loading"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["spinner-loading.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["spinner-loading.css"]
    };
  }
}
//# sourceMappingURL=spinner-loading.js.map
