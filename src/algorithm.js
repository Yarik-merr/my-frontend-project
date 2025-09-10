//Линейный поиск

function linearSearch(array, item) {
  for (let index = 0; index < array.length; index++) {
    if (item === array[index]) {
      return index;
    }
  }
}

console.log('Линейный поиск', linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9));

//Бинарный поиск(итеративный)
//Не совсем поняла для чего он использовал тут влаг еще, если вполе можно без него обойтись

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === item) {
      return mid;
    }
    if (array[mid] < item) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log('Бинарный поиск', binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

//Сортировка пузырьком

function bubleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log('Сортировка пузырьком: ', bubleSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 13, 1, 5]));

//Быстрая сортировка

let count = 0;
function quickSort(array) {
  let less = [];
  let over = [];
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    count += 1;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      over.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(over)];
}

// console.log('Быстрая сортировка: ', quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 13, 1, 5]));
console.log('Быстрая сортировка: ', quickSort([5, 4, 3, 2, 1]), 'count: ', count);

//Факториал

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log('Факториал: ', factorial(5));

//Фибоначи

function fibonacchi(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacchi(n - 1) + fibonacchi(n - 2);
}

console.log('Фибоначи: ', fibonacchi(7));

//groupBy
function groupBy(arr, func) {
  return arr.reduce((acc, item) => {
    let cur = func(item);

    if (!acc[cur]) {
      acc[cur] = [];
    }
    acc[cur].push(item);
    return acc;
  }, {});
}

console.log('groubBy: ', groupBy([6.1, 4.2, 6.3, 6.7], Math.round));
