/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface ImgComparisonSlider {}
}
declare global {
  interface HTMLImgComparisonSliderElement
    extends Components.ImgComparisonSlider,
      HTMLStencilElement {}
  var HTMLImgComparisonSliderElement: {
    prototype: HTMLImgComparisonSliderElement;
    new (): HTMLImgComparisonSliderElement;
  };
  interface HTMLElementTagNameMap {
    'img-comparison-slider': HTMLImgComparisonSliderElement;
  }
}
declare namespace LocalJSX {
  interface ImgComparisonSlider {}
  interface IntrinsicElements {
    'img-comparison-slider': ImgComparisonSlider;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'img-comparison-slider': LocalJSX.ImgComparisonSlider &
        JSXBase.HTMLAttributes<HTMLImgComparisonSliderElement>;
    }
  }
}
