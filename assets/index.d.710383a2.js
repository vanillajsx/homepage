var e="interface jsxProps {\n    [key: string]: any;\n}\ndeclare type AdditionalElementProps = {\n    on: typeof EventTarget.prototype.addEventListener;\n    watch: (name: string, listener: (value: any) => void) => void;\n    _vf: {\n        [key: string]: Function[] & {\n            value?: any;\n        };\n    };\n} & {\n    [key in PropertyKey]: any;\n};\ndeclare type JSXElement = Element & AdditionalElementProps;\ndeclare type childFunc = (element?: JSXElement) => void;\ndeclare type HTMLTagName = keyof HTMLElementTagNameMap;\ndeclare type SVGTagName = keyof SVGElementTagNameMap;\ndeclare type JSXChildren = (JSXElement | string | childFunc | JSXChildren)[];\ndeclare type BlueHTMLAttrs<Element> = Partial<Element> | {\n    class?: string;\n    children?: JSXChildren;\n    ref?: [object, string];\n    style?: string;\n    [key: string]: any;\n};\ndeclare type BlueSVGAttrs<Element> = {\n    [key in keyof Element]?: string;\n} | {\n    class?: string;\n    children?: JSXChildren;\n    ref?: [object, string];\n    style?: string;\n    [key: string]: any;\n};\ndeclare type JSXElementTags = {\n    [key in keyof HTMLElementTagNameMap]: HTMLElementTagNameMap[key] & AdditionalElementProps;\n} & {\n    [key in keyof SVGElementTagNameMap]: SVGElementTagNameMap[key] & AdditionalElementProps;\n};\ndeclare type JSXElementTagNames = keyof JSXElementTags;\ndeclare global {\n    namespace Blue {\n        namespace JSX {\n            type Element = (HTMLElement | SVGElement) & AdditionalElementProps;\n            type IntrinsicElements = {\n                [key in keyof HTMLElementTagNameMap]: BlueHTMLAttrs<HTMLElementTagNameMap[key]>;\n            } & {\n                [key in keyof SVGElementTagNameMap]: BlueSVGAttrs<SVGElementTagNameMap[key]>;\n            };\n        }\n    }\n}\n\n/**\n * An object class which can be used with useAttr\n */\ndeclare class AttrHolder {\n    _vf: {\n        [key: string]: Function[] & {\n            value?: any;\n        };\n    };\n    constructor();\n    watch(name: string, listener: (value: any) => void): void;\n}\n/**\n *\n * @param target Your BlueJSX element or AttrHolder object.\n * @param propName Name of the property which you are defining.\n * @param defaultValue Set your default value.\n */\ndeclare function useAttr<Obj extends AttrHolder, PropName extends string, AttrType>(target: Obj, propName: PropName, defaultValue: AttrType): asserts target is Obj & Record<PropName, AttrType>;\n\ndeclare function render<T extends HTMLTagName>(component: T, props: jsxProps, ...children: JSXChildren): HTMLElementTagNameMap[T] & AdditionalElementProps;\ndeclare function render<T extends SVGTagName>(component: T, props: jsxProps, ...children: JSXChildren): SVGElementTagNameMap[T] & AdditionalElementProps;\ndeclare function render<T extends (...args: any) => any>(component: T, props: jsxProps, ...children: JSXChildren): ReturnType<typeof component>;\ndeclare function render<T extends Function>(component: T, props: jsxProps, ...children: JSXChildren): T[\"prototype\"];\ndeclare const Blue: {\n    r: typeof render;\n    Fragment: ({ children }: {\n        children: Element[];\n    }) => Element[];\n};\n\n/** Type for specific BlueJSX elements.\n * Usage:\n * ```ts\n * const d = <div /> as ElemType<'div'>\n * ```\n * */\ndeclare type ElemType<tagName extends JSXElementTagNames> = JSXElementTags[tagName];\n/**\n * A type for reference object.\n *\n * usage:\n * ```ts\n * const refs: RefType<{\n *  elem1: 'button'  //element tag name\n *  elem2: typeof FuncComponent  //function component\n *  elem3: ClassComponent //Custom Element (extends HTMLElement)\n * }> = {}\n * ```\n */\ndeclare type RefType<M extends {\n    [name: string]: (JSXElementTagNames | HTMLElement | Function | string);\n}> = {\n    [key in keyof M]?: M[key] extends JSXElementTagNames ? ElemType<M[key]> : M[key] extends HTMLElement ? M[key] : M[key] extends ((...args: any) => any) ? ReturnType<M[key]> : Blue.JSX.Element;\n};\n/**\n * usage:\n * ```ts\n * const Component = (\n *  {attrA}: FuncCompParam<{attrA?: string}>\n * ) => <div />\n * ```\n */\ndeclare type FuncCompParam<Param> = {\n    children?: [Blue.JSX.Element];\n} & Param;\n\nexport { AttrHolder, ElemType, FuncCompParam, RefType, Blue as default, useAttr };\n";export{e as default};
