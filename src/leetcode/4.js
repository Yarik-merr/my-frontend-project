// В параметрах reduce передаем стрелочную функцию, где будем прописывать логику распределения, а в качестве аккамулятора - объект, куда будем заносить наши данные
// 	В стрелочной функции:
// Для начала сортируем строку,чтобы определить ключ, к которому мы будем добавлять элемент
// Далее, проверяем, существует ли этот ключ в объекте, если нет, то добавляем новый ключ, если да - добавляем элемент к массиву по ключу, и возращаем аккамулятор. Сложность память O(1), время O(n*m*logm), n - длина массива, m - длина строки

const groupAnagrams = (strs) => {
  let sortStr;
  let group = strs.reduce((acc, str) => {
    sortStr = str.split('').sort().join('');
    console.log(sortStr);

    if (!acc[sortStr]) {
      acc[sortStr] = [];
    }
    console.log(acc[sortStr]);

    acc[sortStr].push(str);
    return acc;
  }, {});
  let res = Object.values(group);
  return res;
};

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

// let strs = [''];
console.log(groupAnagrams(strs));
console.log(strs.sort());
