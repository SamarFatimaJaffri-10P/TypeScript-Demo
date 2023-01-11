var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// VARIABLES
// declaring constant value
var pi = 3.14;
// typescript can understand type
var hello = 'world';
// we can specify type as well
var hi = 'world';
// FUNCTION
/**
 * Get full name of the user
 * @param name first name
 * @param surname last name
 * @returns full name
 */
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
console.log(getFullName('Monster', 'Lessons'));
;
var user = {
    name: 'Monster',
    age: 32,
    getMessage: function () {
        return 'Hello' + name;
    }
};
var user2 = {
    name: 'Jack',
    getMessage: function () {
        return 'Hello' + name;
    }
};
console.log(user.name);
// MULTI-DATATYPE USING UNION & TYPE ALIASING
var pageNumber = '1';
var errorMessage = null;
var person = null;
// Be careful with union, and don't use it like this
var someProp;
var PopularTags = ['dragon', 'coffee'];
var dragonsTag = null;
// DATATYPES
// void: undefined and null
var doSomething = function () {
    console.log('doSomething');
};
doSomething(); // calling method
//any type: let you use any type (avoid using any at any cost)
var foo = 'foo';
// console.log(foo.bar());  // this will throw error in execution
// never: it will never end
var doSome = function () {
    throw 'never';
};
// unknown: type is unknown (good alternative ti any)
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// let s2: string = vUnknown;   // throw error
// console.log(vAny.foo());     // will throw error in execution
// console.log(vUnknown.foo()); // throw error
// TYPE ASSERTION / TYPE CASTING
var s3 = vUnknown;
var pageNo = '1';
// let numericPageNo: number = pageNo as number;   // throw error
var numericPageNo = pageNo;
// GENERIC INTERFACE AND FUNCTION
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var u1 = {
    name: 'Jack',
    data: {
        meta: 'foo'
    },
    meta: 'bar'
};
var u2 = {
    name: 'John',
    data: ['foo', 'bar', 'baz'],
    meta: 'I am demo meta data'
};
// const result = addId<UserInterface>(u1);
// // ramda
// const searchStr = 'foo';
// const hasSearchedString = any<string>((el: string) => el.contains(searchStr), [
//     'foo',
//     'bar',
//     'baz',
// ]);
// ENUMERABLE
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress);
var StatusEnum;
(function (StatusEnum) {
    // assigning value to enums so that it return strings instead of index numbers
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
//# sourceMappingURL=main.js.map