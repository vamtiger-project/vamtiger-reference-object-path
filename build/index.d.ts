/// <reference path="../node_modules/vamtiger-regex-period/build/index.d.ts" />
/// <amd-module name="vamtiger-reference-object-path" />
declare module "vamtiger-reference-object-path" {
    const _default: ({ object, path: objectPath }: Params) => any;
    export default _default;
    export interface Params {
        object: IObject;
        path: string;
    }
    export interface IObject {
        [key: string]: any;
    }
}
declare module "test/01-reference-object-path.spec" { }
