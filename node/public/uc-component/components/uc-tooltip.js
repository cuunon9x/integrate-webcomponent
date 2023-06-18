import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const tooltipCss = ":host{position:relative}#tooltip-text{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;top:-5px;left:105%}#tooltip-icon{background:black;position:relative;color:white;padding:0.15rem 0.45rem;border-radius:50%;margin-left:0.5rem}#tooltip-icon:hover #tooltip-text{visibility:visible}";

const Tooltip = /*@__PURE__*/ proxyCustomElement(class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.text = undefined;
  }
  render() {
    return [
      h("slot", null),
      h("span", { id: "tooltip-icon" }, "?", h("div", { id: "tooltip-text" }, this.text)),
    ];
  }
  static get style() { return tooltipCss; }
}, [1, "uc-tooltip", {
    "text": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["uc-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "uc-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tooltip);
      }
      break;
  } });
}

const UcTooltip = Tooltip;
const defineCustomElement = defineCustomElement$1;

export { UcTooltip, defineCustomElement };

//# sourceMappingURL=uc-tooltip.js.map