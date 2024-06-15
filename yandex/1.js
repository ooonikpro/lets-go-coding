
/**
 *  Написать функцию, которая возвращает результат при успешном запросе.
 *  В случае неуспеха повторять запрос максимум 5 раз.
 *  После 5-го раза выбрасывает ошибку с текстом "Не удалось получить данные"
 * 
 *  Ограничения: Нельзя использовать async|await
 */


const fetchData = (url) => {
  const MAX = 5;
  let attemps = 1;

  return new Promise((res, rej) => {
    const request = () => {
      fetch(url).then(res).catch(() => {
        if (attemps < MAX) {
          attemps++;

          request();
        } else {
          rej("Не удалось получить данные");
        }
      })
    }

    request();
  });
}

fetchData('someurl.com'); // 