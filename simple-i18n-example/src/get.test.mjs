import assert from 'node:assert';
import get from './get.mjs';

const obj = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  }
};

const path = 'a.b.c.d';

const obj2 = {
  [path]: 2
}

try {
  assert.deepEqual(get(path, obj), 1);
  assert.deepEqual(get(path, obj2), obj2[path]);
  assert.deepEqual(get(), null);
  
  console.log('Success!');
} catch(e) {
  console.error(e);
}