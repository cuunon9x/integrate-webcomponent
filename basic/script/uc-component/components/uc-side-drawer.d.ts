import type { Components, JSX } from "../types/components";

interface UcSideDrawer extends Components.UcSideDrawer, HTMLElement {}
export const UcSideDrawer: {
  prototype: UcSideDrawer;
  new (): UcSideDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
