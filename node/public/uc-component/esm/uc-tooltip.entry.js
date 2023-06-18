import { r as registerInstance, h } from './index-8c3bf960.js';

const tooltipCss = ":host{position:relative}#tooltip-text{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;top:-5px;left:105%}#tooltip-icon{background:black;position:relative;color:white;padding:0.15rem 0.45rem;border-radius:50%;margin-left:0.5rem}#tooltip-icon:hover #tooltip-text{visibility:visible}";

const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return [
      h("slot", null),
      h("span", { id: "tooltip-icon" }, "?", h("div", { id: "tooltip-text" }, this.text)),
    ];
  }
};
Tooltip.style = tooltipCss;

export { Tooltip as uc_tooltip };

//# sourceMappingURL=uc-tooltip.entry.js.map