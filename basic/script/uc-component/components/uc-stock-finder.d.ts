import type { Components, JSX } from "../types/components";

interface UcStockFinder extends Components.UcStockFinder, HTMLElement {}
export const UcStockFinder: {
  prototype: UcStockFinder;
  new (): UcStockFinder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
