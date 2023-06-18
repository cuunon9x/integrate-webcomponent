import { h } from "@stencil/core";
export class SideDrawer {
  constructor() {
    this.showContactInfo = false;
    this.first = undefined;
    this.open = undefined;
  }
  async oncloseDrawer() {
    this.open = false;
  }
  async onContentChange(content) {
    this.showContactInfo = content === "contact";
  }
  async openMainMenu() {
    this.open = true;
  }
  render() {
    let mainContent = h("slot", null);
    if (this.showContactInfo) {
      mainContent = (h("div", { id: "contact-info" }, h("h2", null, "Contact Information"), h("p", null, "You can reach us via email or phone."), h("ul", null, h("li", null, "Phone: 0333333"), h("li", null, "E-Mail:", h("a", { href: "mailto:contact@contact.com" }, "contact@contact.com")))));
    }
    return [
      h("div", { class: "backdrop", onClick: this.oncloseDrawer.bind(this) }),
      h("aside", null, h("header", null, h("h1", null, this.first), h("button", { onClick: this.oncloseDrawer.bind(this) }, "X")), h("section", { id: "tabs" }, h("button", { class: !this.showContactInfo ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation"), h("button", { class: this.showContactInfo ? "active" : "", onClick: this.onContentChange.bind(this, "contact") }, "Contact")), h("main", null, mainContent)),
    ];
  }
  static get is() { return "uc-side-drawer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./side-drawer.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["side-drawer.css"]
    };
  }
  static get properties() {
    return {
      "first": {
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
        "attribute": "first",
        "reflect": false
      },
      "open": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "open",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "showContactInfo": {}
    };
  }
  static get methods() {
    return {
      "oncloseDrawer": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "onContentChange": {
        "complexType": {
          "signature": "(content: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "openMainMenu": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
}
//# sourceMappingURL=side-drawer.js.map
