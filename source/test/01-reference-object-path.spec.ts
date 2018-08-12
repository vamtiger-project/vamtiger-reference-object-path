import { expect } from 'chai';
import { ReferenceObjectPath } from '..';

const referenceObjectPath = (require('..').default || require('..')) as ReferenceObjectPath;
const object = {
    some: {
        object: {
            path: 'reference to object path'
        }
    }
};
const objectPath = 'some.object.path';

describe('vamtiger-reference-object-path: should reference', function () {
    it('object path', function () {
        const reference = referenceObjectPath({
            object,
            path: objectPath
        });
        const expected = object.some.object.path;

        expect(reference).to.be.ok;
        expect(reference).to.equal(expected);
    });
});