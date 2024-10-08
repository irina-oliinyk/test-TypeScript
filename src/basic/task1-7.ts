// Завдання 1

const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const callback: (a: number) => number = (a: number) => {
  return 100 + a;
};

// Завдання 2

let person: [string, number] = ['Max', 21];

// Завдання 3

let mixedType: string | number;

let EnableOrDisable: 'enable' | 'disable';

// Завдання 4

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// Завдання 5

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

// Завдання 6

const mango: User = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA',
  },
};

const poly: User = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
};

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}
interface Address {
  city: string;
  country: string;
}

// Завдання 7

interface UserType {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
}

const page1: UserType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: UserType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
