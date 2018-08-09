/// <amd-module name="vamtiger-regex-period"/>
/// <reference path="../node_modules/vamtiger-regex-period/build/index.d.ts"/>
import { regex } from 'vamtiger-regex-period';

export default ({ object, path: objectPath }: Params) => {
    const attributes = objectPath.split(regex);
    const reference = attributes.reduce((objectReference, attribute) => objectReference[attribute], object);

    return reference;
}

export interface Params {
    object: IObject;
    path: string;
}

export interface IObject {
    [key: string]: any;
}