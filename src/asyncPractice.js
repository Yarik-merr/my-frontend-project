//  Напиши функцию sum, которая принимает массив чисел и возвращает их сумму с помощью стрелочной функции и метода reduce.

const sum = (arr) => {
  return arr.reduce((accamulator, curentValue) => accamulator + curentValue, 0);
};

console.log(sum([10]));

// Используй деструктуризацию для объекта:
// Выведи в консоль "Alice is 22 years old"

const user = { name: 'Alice', age: 22 };
let { name, age } = user;

console.log(`${name} is ${age} years old`);

//Создай функцию delay(ms), которая возвращает промис, резолвящийся через ms миллисекунд.

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

console.log(delay(1000));

//  * С помощью then и цепочки промисов выведи в консоль:
//      Start
//      Waited 1s
//      Waited 2s
//      Done

const something = () => {
  return new Promise((resolve, reject) => {
    resolve('Start');
  });
};

something()
  .then((data) => {
    console.log(data);
  })
  .then(() => {
    console.log('Wait 1s');
  })
  .then(() => {
    console.log('Wait 2s');
  })
  .then(() => {
    console.log('Done');
  });

// Сделай функцию getData(callback), которая через setTimeout возвращает объект { id: 1, name: "Test" }.

// const getData = (callback) => {
//   setTimeout(() => {
//     callback({ id: 1, name: 'Test' });
//   }, 1000);
// };

// getData((data) => {
//   return data;
// });

//Промисы

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     resolve({ id: 1, name: 'Test' });
//   });
// };

// getData().then((data) => {
//   console.log(data);
// });

//Async/await

const getData = async () => {
  return { id: 1, name: 'Test' };
};

getData().then((data) => {
  console.log(data);
});

// 4. Работа с API

//then

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(`id: ${user.id}, name: ${user.name}`);
    });
  })
  .catch((error) => {
    console.log('Ошибка');
  });

// Async/await
// const getUsers = async () => {
//   const request = await fetch('https://jsonplaceholder.typicode.com/users');
//   return request.json();
// };

// getUsers().then((data) => {
//   data.forEach((user) => {
//     console.log(`id: ${user.id}, name: ${user.name}`);
//   });
// });

//Свой пример

const getInfo = async () => {
  console.log('Загрузка профиля...');

  await delay(3000);
  console.log({ id: 1, name: 'darina' });
};

getInfo();
