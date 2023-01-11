// VARIABLES
// declaring constant value
const pi = 3.14;

// typescript can understand type
let hello = 'world';

// we can specify type as well
let hi: string = 'world';


// FUNCTION
/**
 * Get full name of the user
 * @param name first name
 * @param surname last name
 * @returns full name
 */
const getFullName = (name: string, surname: string): string => {
    return name + ' ' + surname;
};
console.log(getFullName('Monster', 'Lessons'));


// INTERFACE & OBJECTS
/* We need to name interface in a way to easily distinguish it from classes
 * for that, we can name interfaces like IName or NameInterface e.g., IUser or UserInterface
*/
interface IUser {
    name: string;
    age?: number;   // ? make `age` optional
    getMessage(): string
};
const user: IUser = {
    name: 'Monster',
    age: 32,
    getMessage() {
        return 'Hello' + name;
    },
};

const user2: IUser = {
    name: 'Jack',
    getMessage() {
        return 'Hello' + name;
    },
};

console.log(user.name);


// MULTI-DATATYPE USING UNION & TYPE ALIASING
let pageNumber: string | number = '1';
let errorMessage: string | null = null;

// creating custom types (type aliasing)
type ID = string;

interface IPerson {
    id: ID
    name: string
    surname: string
}

let person: IPerson | null = null;

// Be careful with union, and don't use it like this
let someProp: string | number | null | undefined | string[] | object;

type PopularTag = string;
type MaybePopularTag = PopularTag | null;

let PopularTags: PopularTag[] = ['dragon', 'coffee'];
let dragonsTag: MaybePopularTag = null;


// DATATYPES
// void: undefined and null
const doSomething = (): void => {
    console.log('doSomething');
};

doSomething();  // calling method

//any type: let you use any type (avoid using any at any cost)
let foo: any = 'foo';
// console.log(foo.bar());  // this will throw error in execution

// never: it will never end
const doSome = (): never => {
    throw 'never';
};

// unknown: type is unknown (good alternative ti any)
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
// let s2: string = vUnknown;   // throw error

// console.log(vAny.foo());     // will throw error in execution
// console.log(vUnknown.foo()); // throw error


// TYPE ASSERTION / TYPE CASTING
let s3: string = vUnknown as string;

let pageNo: string = '1';
// let numericPageNo: number = pageNo as number;   // throw error
let numericPageNo: number = (pageNo as unknown) as number;


// GENERIC INTERFACE AND FUNCTION
const addId = <T extends object>(obj: T) => {   // T is generic
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
};

interface UserInterface<T, V> {     // T and V are generic datatypes
    name: string;
    data: T;
    meta: V;
}

const u1: UserInterface<{ meta: string }, string> = {
    name: 'Jack',
    data: {
        meta: 'foo',
    },
    meta: 'bar',
};

const u2: UserInterface<string[], string> = {
    name: 'John',
    data: ['foo', 'bar', 'baz'],
    meta: 'I am demo meta data',
};

const result = addId(u1);

// // ramda
// const searchStr = 'foo';
// const hasSearchedString = any<string>((el: string) => el.contains(searchStr), [
//     'foo',
//     'bar',
//     'baz',
// ]);

// ENUMERABLE
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
};
console.log(statuses.inProgress);

enum StatusEnum {
    // assigning value to enums so that it return strings instead of index numbers
    NotStarted = 'notStarted',
    InProgress = 'inProgress',
    Done = 'done',
}

interface Task {
    id: string;
    status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
