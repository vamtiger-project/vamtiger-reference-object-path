export default function referenceObjectPath({ object, path: objectPath }: Params): any;
export interface Params {
    object: IObject;
    path: string;
}
export interface IObject {
    [key: string]: any;
}
export declare type ReferenceObjectPath = typeof referenceObjectPath;
