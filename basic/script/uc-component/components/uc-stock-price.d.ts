import type { Components, JSX } from "../types/components";

interface UcStockPrice extends Components.UcStockPrice, HTMLElement {}
export const UcStockPrice: {
  prototype: UcStockPrice;
  new (): UcStockPrice;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
