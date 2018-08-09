# VAMTIGER Reference Object Path
Get a reference for defined object path.

## Installation
[VAMTIGER Reference Object Path](https://github.com/vamtiger-project/vamtiger-reference-object-path) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-reference-object-path
```
or
```bash
yarn add vamtiger-reference-object-path
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Reference Object Path](https://github.com/vamtiger-project/vamtiger-reference-object-path):
```javascript
/// <reference path="../node_modules/vamtiger-reference-object-path/build/index.d.ts"/>
import referenceObjectPath from 'vamtiger-reference-object-path';
```
or
```javascript
const referenceObjectPath = require('vamtiger-reference-object-path');
```

[VAMTIGER Reference Object Path](https://github.com/vamtiger-project/vamtiger-reference-object-path) can then be used to reference a defined object path:
```javascript
const object = {
    some: {
        object: {
            path: 'reference to object path'
        }
    }
};
const objectPath = 'some.object.path';
const reference = referenceObjectPath({
    object,
    objectPath
}); // 'reference to object path'
```