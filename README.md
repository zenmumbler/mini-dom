mini-dom
========
This is mostly here to preserve some minimal DOM manipulation code that I've extracted from Stardazed.
Not terribly useful.

The package only has an ESM build and is mainly/only for use in a browser context.

Install
-------
`yarn add @zenmumbler/mini-dom`

or

`npm install @zenmumbler/mini-dom`

Interface
---------
```ts
type ElemSelector = string | Node | Node[];
function $n(sel: string, base?: HTMLElement): HTMLElement[];
function $(sel: ElemSelector, base?: HTMLElement): Node[];
function $1(sel: ElemSelector, base?: HTMLElement): HTMLElement;
function show(sel: ElemSelector, disp?: string): void;
function hide(sel: ElemSelector): void;
function setDisabled(sel: ElemSelector, dis: boolean): void;
function enable(sel: ElemSelector): void;
function disable(sel: ElemSelector): void;
function closest(sourceSel: ElemSelector, sel: string): HTMLElement | undefined;
function nextElementSibling(elem: HTMLElement): HTMLElement | undefined;
function on<E extends Event>(target: ElemSelector | Window, evt: string, handler: (ev: E) => any): void;
function off<E extends Event>(target: ElemSelector | Window, evt: string, handler: (ev: E) => any): void;
```

License
-------
The Unlicense - do what you want with this.
