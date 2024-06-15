type MessageType = {
  id: number;
  message: string;
}

type ConnectFnType = (onMessage: (msg: MessageType) => void) => void;
type RenderFnType = (msg: string) => void;

type SubscribeFnType = (connect: ConnectFnType, render: RenderFnType) => void;


/**
 *  Написать функцию, которая рендерит сообщения в порядке возрастания message.id. 
 *  Айди сообщения начинаются с 1.
 *  Сообщения могут приходит в неправильном порядке.
 * 
 *  Задача: вывести сообщения как можно скорее в верном порядке.
 */

const subscribe: SubscribeFnType = (connect, render) => {
  const store = new Map();
  let nextId = 1;

  connect((msg) => {
    if (msg.id === nextId) {
      render(msg.message);
      nextId++;

      while(store.has(nextId)) {
        render(store.get(nextId));
        store.delete(nextId);
        nextId++;
      }
    } else {
      store.set(msg.id, msg.message);
    }
  });
}

subscribe((onMessage) => {
  setTimeout(() => onMessage({ id: 1, message: 'One' }), 20);
  setTimeout(() => onMessage({ id: 2, message: 'Two' }), 30);
  setTimeout(() => onMessage({ id: 3, message: 'Three' }), 10);
  setTimeout(() => onMessage({ id: 4, message: 'Four' }), 20);
}, console.log);