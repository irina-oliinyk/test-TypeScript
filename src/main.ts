function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

enum Role {
  ADMIN,
  USER,
}

const person1 = {
  role: Role.ADMIN,
};

if (person1.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN);
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

// const age = 50;
// const username = 'Max';
// const toggle = true;
// const empty = null;
// const callback = (a) => { return 100 + a };

// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

// const age: number = 50;
// const username: string = "Max";
// const toggle: boolean = true;
// const empty: null = null;
// const callback: (a: number) => number = (a: number) => {
//   return 100 + a;
// };

// const callback: (a: number) => number = (a: number) => {
//   return 100 + a;
// };

// type Person = {
//   age: number;
//   username: string;
//   toggle: boolean;
//   empty: null;
// };

// пример для 1 задания
// type Person = {
//   name: string;
//   age?: number; // age є опціональною властивістю
// };

//задание 2
// let person: [string, number] = ["Max", 21];

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

// let mixedType: string | number;

// let EnableOrDisable: "enable" | "disable";
// type EnableOrDisable = "enable" | "disable";
// let value: EnableOrDisable;

// Завдання 4

// Виконуйте це завдання у файлі src/basic/4.ts.

// У вас є такі функції JavaScript:

// function showMessage(message) {
//   console.log(message);
// }

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1, num2) {
//   return num1 + num2;
// }

// function calc(num1:number , num2:number):number {
//   return num1 + num2;
// }

// function customError() {
//   throw new Error('Error');
// }

// function customError(): never {
//   throw new Error("Error");
// }

// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

// Завдання 5

// Виконуйте це завдання у файлі src/basic/5.ts.
// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// const isWeekend = (day: DayOfWeek): boolean => {
//   return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
// };

// function isWeekend(day: DayOfWeek): boolean {
//   return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
// }

// console.log(isWeekend(DayOfWeek.Monday));
// console.log(isWeekend(DayOfWeek.Tuesday));
// console.log(isWeekend(DayOfWeek.Wednesday));
// console.log(isWeekend(DayOfWeek.Thursday));
// console.log(isWeekend(DayOfWeek.Friday));
// console.log(isWeekend(DayOfWeek.Saturday));
// console.log(isWeekend(DayOfWeek.Sunday));

// const isWeekend = (day) => {
// }

// Завдання 6

// Виконуйте це завдання у файлі src/basic/6.ts.

// Створіть інтерфейс User для типізації об'єктів, які містять такі властивості. Зверніть увагу, що адреса є необов'язковою властивістю.

// const mango = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com',
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   address?: Address;
// }
// interface Address {
//   city: string;
//   country: string;
// }

// const poly = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com'
// };

// Завдання 7

// Виконуйте це завдання у файлі src/basic/7.ts.

// У вас є два об'єкти:

// interface UserType {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: 'open' | 'close';
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// }

// const page1 = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   }
// }

// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

// Створіть новий тип даних, який підходить для цих двох об'єктів.

// /////////////////////////////////////////////////////////////////////// //////////////////////////////////
