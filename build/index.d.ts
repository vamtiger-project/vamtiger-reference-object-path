/// <reference path="../node_modules/vamtiger-regex-period/build/index.d.ts" />
declare module "index" {
    const _default: ({ object, objectPath }: Params) => any;
    export default _default;
    export interface Params {
        object: IObject;
        objectPath: string;
    }
    export interface IObject {
        [key: string]: any;
    }
}
declare module "test/01-reference-object-path.spec" { }
