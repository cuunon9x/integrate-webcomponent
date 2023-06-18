import type { Components, JSX } from "../types/components";

interface UcSpinnerLoading extends Components.UcSpinnerLoading, HTMLElement {}
export const UcSpinnerLoading: {
  prototype: UcSpinnerLoading;
  new (): UcSpinnerLoading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
