'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7b783166.js');

const tooltipCss = ":host{position:relative}#tooltip-text{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;top:-5px;left:105%}#tooltip-icon{background:black;position:relative;color:white;padding:0.15rem 0.45rem;border-radius:50%;margin-left:0.5rem}#tooltip-icon:hover #tooltip-text{visibility:visible}";

const Tooltip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return [
      index.h("slot", null),
      index.h("span", { id: "tooltip-icon" }, "?", index.h("div", { id: "tooltip-text" }, this.text)),
    ];
  }
};
Tooltip.style = tooltipCss;

exports.uc_tooltip = Tooltip;

//# sourceMappingURL=uc-tooltip.cjs.entry.js.map