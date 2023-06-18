import type { Components, JSX } from "../types/components";

interface UcTooltip extends Components.UcTooltip, HTMLElement {}
export const UcTooltip: {
  prototype: UcTooltip;
  new (): UcTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
