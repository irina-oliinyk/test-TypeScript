// Завдання 1

// Виконуйте це завдання у файлі src/generics/1.ts.

// Типізуйте асинхронну функцію fetchData, яка приймає URL
// ресурсу та повертає об'єкт з даними. Використовуйте Generics
// для типізації повернутих даних.

// import axios from 'axios';

// async function fetchData<T>(url: string): Promise<T> {
//   try {
//     const response = await axios.get<T>(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

// Завдання 2

// Виконуйте це завдання у файлі src/generics/2.ts.

// У вас є тип AllType.Існує функція compare, яка приймає два об'єкти.
// Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick
// та generics для вказівки, що поля цих параметрів належать AllType.Функція compare повинна повертати AllType.

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare<
//   T extends Pick<AllType, 'name' | 'color'>,
//   U extends Pick<AllType, 'position' | 'weight'>,
// >(top: T, bottom: U): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// const top = { name: 'Object A', color: 'red' };
// const bottom = { position: 10, weight: 50 };

// const result = compare(top, bottom);
// console.log(result);

// type Assignment = {
//   employee: Pick<BaseEmployee, 'id' | 'firstName' | 'lastName'>;
//   projects: Pick<BaseProject, 'id' | 'name' | 'deadline'>[];
//   shouldNotifyEmployee?: boolean;
// };

// Завдання 3

// Виконуйте це завдання у файлі src/generics/3.ts.

// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics,
// щоб вказати, що ці об'єкти можуть бути будь-якого типу.

// function merge<T, U>(objA: T, objB: U): T & U {
//   return Object.assign({}, objA, objB);
// }

// const objA = { name: 'Alice' };
// const objB = { age: 30 };

// const mergedObject = merge(objA, objB);
// console.log(mergedObject); // Виведе: { name: 'Alice', age: 30 }

// Завдання 4

// Виконуйте це завдання у файлі src/generics/4.ts.

// Ви маєте форму реєстрації користувачів.Іноді потрібно попередньо заповнити форму
// даними користувача для оновлення його профілю.Однак вам не завжди потрібно заповнити всі поля.
//Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.

// Використовуючи утиліту Partial та generics, виправте тип параметра функції так, щоб уникнути помилок типізації.

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: Partial<User>) {
//   // Оновлення користувача
//   console.log('User updated with:', initialValues);
// }

// createOrUpdateUser({
//   email: 'user@mail.com',
//   password: 'password123',
// });

// Завдання 5

// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому
// додатку.Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача
// з її описом.

// export enum UserRole {
//   admin = 'admin',
//   editor = 'editor',
//   guest = 'guest',
// }

// // Замініть наступний код на версію за допомогою Record
// const RoleDescription: Record<UserRole, string> = {
//   [UserRole.admin]: 'Admin User',
//   [UserRole.editor]: 'Editor User',
//   [UserRole.guest]: 'Guest User',
// };

// Завдання 6

// Виконуйте це завдання у файлі src/generics/6.ts.

// У вас є тип Form, який містить інформацію про форму, включаючи поле errors.
// Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.

// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };

// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };

// // Реалізуйте Params так,
// // щоб унеможливити поле 'errors' з типу Form
// type Params = Omit<Form, 'errors'>;

// Завдання 1

import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// Завдання 2

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, 'name' | 'color'>,
  U extends Pick<AllType, 'position' | 'weight'>,
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Завдання 3

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = { name: 'Alice' };
const objB = { age: 30 };

const mergedObject = merge(objA, objB);
console.log(mergedObject); // Виведе: { name: 'Alice', age: 30 }

// Завдання 4

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
  console.log('User updated with:', initialValues);
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});

// Завдання 5

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

// Завдання 6

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;
