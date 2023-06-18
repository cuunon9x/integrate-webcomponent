import { h } from "@stencil/core";
export class Tooltip {
  constructor() {
    this.text = undefined;
  }
  render() {
    return [
      h("slot", null),
      h("span", { id: "tooltip-icon" }, "?", h("div", { id: "tooltip-text" }, this.text)),
    ];
  }
  static get is() { return "uc-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./tooltip.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tooltip.css"]
    };
  }
  static get properties() {
    return {
      "text": {
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
        "attribute": "text",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=tooltip.js.map
