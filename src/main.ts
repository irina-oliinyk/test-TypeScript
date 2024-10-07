function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("Role: ", Role.ADMIN);
}

enum Test {
  A = 1,
  B = 2,
  C = 3,
  D = 4,
}

for (let item in Test) {
  console.log(item);
}

// пример для 1 задания
type Person = {
  name: string;
  age?: number; // age є опціональною властивістю
};

//задание 2

// Виконуйте це завдання у файлі src/basic/2.ts.
// У вас є наступний JavaScript масив:
// let person = ['Max', 21];
// Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
// Кортежі зручні, коли нам потрібно зберегти в масив фіксовані значення, наприклад, день, місяць та рік.
// let date: [number, number, number];
// date = [7, 11, 2023]; // OK

// Завдання 3

// Виконуйте це завдання у файлі src/basic/3.ts.

// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну,
// яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).
