declare module 'wow.js' {
    export interface WOWOptions {
      boxClass?: string; // default
      animateClass?: string; // default
      offset?: number; // default
      mobile?: boolean; // default
      live?: boolean; // default
      callback?: (box: HTMLElement) => void; // default
      scrollContainer?: HTMLElement | null; // default
      resetAnimation?: boolean; // default
    }
  
    export class WOW {
      constructor(options?: WOWOptions);
      init(): void;
    }
  }
  