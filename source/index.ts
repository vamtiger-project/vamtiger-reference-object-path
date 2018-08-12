import { regex } from 'vamtiger-regex-period';

export default function referenceObjectPath({ object, path: objectPath }: Params) {
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

export type ReferenceObjectPath = typeof referenceObjectPath;