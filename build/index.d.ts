declare const _default: ({ object, path: objectPath }: Params) => any;
export default _default;
export interface Params {
    object: IObject;
    path: string;
}
export interface IObject {
    [key: string]: any;
}
