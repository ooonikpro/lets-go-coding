
const example = {
  a: {
    b: {
      c: {
        d: {
          e: 1
        }
      }
    }
  }
}


/**
 *  Написать функцию, которая возвращает результат для пути состоящий из ключей разделенных точкой
 *  Иначе вернуть undefined если значения по указанному пути нет
 * 
 *  Ограничения: нельзя использовать рекурсию
 *  Пример: get(example, 'a.b.c.d.e') === 1
 */

const isObj = (val) => val && typeof val === 'object';

const get = (obj, path) => {
  if (!isObj(obj) || !path) return undefined;

  let value = obj;

  for(let key of path.split('.')) { // ['a', 'b', 'c', 'd', 'e'];
    if (isObj(value) && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  return value;
}

console.log(get(example, 'a.b.c.d.e') === example.a.b.c.d.e);