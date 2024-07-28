var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/**
Difference between TS and JS
1. both are programming languages. JS can run on browsers but TS can't. TS is strongly type language.
2. TS additional type checks which is missing in JS.
3. give type error in compile time.
*/
// 1. Can you write some code to demonstrate the difference between explicit and implicit types and which one to use?
// 2. What is the type of savings in `const savings = 15`?  //15
//explicit
var num = 17;
var name6 = "chetan";
console.log(num, name6);
//implicit
var num1 = 17;
var name1 = "chetan";
console.log(num1, name1);
var savings = 15;
console.log(savings);
/**
 Write a function `getAddress` which adds city, state and country and returns a comma separated full address
Level: Easy, Duration: 5 minutes
*/
function getAddress(_a) {
    var city = _a.city, state = _a.state, country = _a.country;
    return [country, state, city].filter(Boolean).join(",");
}
console.log(getAddress({ city: 'Sixth Avenue', country: 'Singapore' }));
var user = {
    name: "chetan",
    age: 26
};
function getUserAge(user) {
    return user.age;
}
console.log(user);
console.log(getUserAge(user));
var user1 = {
    name: "chetan",
    age: 26
};
function getUserAge1(user) {
    return user.age;
}
console.log(user1);
console.log(getUserAge1(user1));
var id = 8;
var res1 = true;
var res2 = "true";
var getNameAndSalary = function (firstName, lastName, salary) {
    var salaryFormatted = typeof salary === "string" ? salary : salary.toFixed();
    return ([firstName === null || firstName === void 0 ? void 0 : firstName.toUpperCase(), lastName === null || lastName === void 0 ? void 0 : lastName.toUpperCase()].join(" ") +
        " " + salaryFormatted);
};
console.log(getNameAndSalary('Kiran', 'Dash', '1 Billion'));
console.log(getNameAndSalary('Kiran', 'Dash', 234556.769988));
//Recommended: type narrowing using property value 
var getAppError = function (error) {
    if (error.category === "network") {
        return error.category;
    }
    else if (error.category === "resource") {
        return error.code;
    }
    else if (error.category === "server") {
        return error.message;
    }
};
// Not Recommended: Type Narrowing using property key
// Since this is implementation dependent and in future the key might get added to other types and hence cause failure
var getAppError2 = function (error) {
    if ('code' in error) {
        return error.code;
    }
    else if ('message' in error) {
        return error.message;
    }
    return error.category;
};
//Using instanceof to type narrowing
var getAge = function (age) {
    if (age instanceof Date) {
        return age.getDate();
    }
    return age;
};
// Explain void in TS with some code
// Level: Easy, Duration: 5 minutes
//used to define a function return type when function is not return anything
var logMessage = function (message) {
    console.log(message);
};
logMessage("hye its me");
// Explain never in TS with some code
// Level: Easy, Duration: 5 minutes
/**
 never is used as function return type for function which never
 comes to end ex a function throwing error
  void is also ok
 */
var throwErrorFn = function (message) {
    throw new Error(message);
};
var infiniteLoop = function () {
    while (true) {
        console.log("hye");
    }
};
var infiniteLoop1 = function () {
    while (true) {
        console.log("hye");
    }
};
var throwErrorFn1 = function (message) {
    throw new Error(message);
};
// here implicitly the return type will be string
var errorHandler3 = function (message) {
    if (message === 'server-error') {
        return message;
    }
    else {
        throw new Error(message);
    }
};
// Explain any in TS with some code
// Level: Easy, Duration: 5 minutes
/**
 * try to avoid any as possible
 * make sure to use strict: true and have noImplicitAny:true so it doesn't
 */
var getName = function (firstName, lastName) {
    return firstName + lastName;
};
console.log(getName(1, 2));
//use unknown instead of any when type of arguments is unsure
var handleError = function (error) {
    //type narrowing
    if (typeof error === "string") {
        return error;
    }
    else if (typeof error === "number") {
        return error;
    }
    else {
        //use type assertion with "as" keyword, when you know what type is exactly
        //use cautiously only when you are sure that the type exists
        return error.message;
    }
};
var Profile = /** @class */ (function () {
    function Profile(firstName, lastName, securityPin, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.securityPin = securityPin;
        this.email = email;
    }
    Profile.prototype.getProfileName = function () {
        return ([
            this.firstName.toUpperCase(),
            this.lastName.toUpperCase(),
        ].join(" "));
    };
    Profile.prototype.getSecurityPin = function () {
        return this.securityPin;
    };
    Profile.prototype.updateSecurityPin = function (pin) {
        this.securityPin = pin;
    };
    Profile.prototype.getEmail = function () {
        return this.email;
    };
    Profile.prototype.changeEmail = function () {
        // not allowed since email is readonly
        //this.email = 'kiran@kirandash.com';
    };
    Profile.maxBuyingCredit = 10000;
    return Profile;
}());
var buyerProfile = new Profile('Kiran', 'Dash', '2234', 'kiran@kirandash.com');
console.log(buyerProfile.getProfileName());
console.log(buyerProfile.firstName, buyerProfile.lastName);
buyerProfile.updateSecurityPin('1234');
// This is not allowed since this is a private property
// console.log(buyerProfile.securityPin);
// static property does not exist on the instance but on the main class itself
console.log(Profile.maxBuyingCredit);
// Extends
var PremiumProfile = /** @class */ (function (_super) {
    __extends(PremiumProfile, _super);
    function PremiumProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PremiumProfile.prototype.setUsername = function (username) {
        this.customUsername = username;
    };
    PremiumProfile.prototype.getUsername = function () {
        return this.customUsername;
    };
    return PremiumProfile;
}(Profile));
var vipCustomer = new PremiumProfile('Frodo', 'Dash', '2234', 'frodo@kirandash.com');
vipCustomer.setUsername('frododash');
console.log(vipCustomer.getUsername());
console.log(vipCustomer.getProfileName());
// explain enum in ts with some code
// Level: Medium, Duration: 5 minutes
//JS
var ProfileConst = {
    buyer: 0,
    seller: 0,
    admin: 2
};
var ProfileEnum;
(function (ProfileEnum) {
    ProfileEnum[ProfileEnum["buyer"] = 0] = "buyer";
    ProfileEnum[ProfileEnum["seller"] = 1] = "seller";
    ProfileEnum[ProfileEnum["admin"] = 2] = "admin";
})(ProfileEnum || (ProfileEnum = {}));
var myProfile = ProfileEnum.buyer;
var ShopProfileEnum;
(function (ShopProfileEnum) {
    ShopProfileEnum["BUYER"] = "buyer";
    ShopProfileEnum["SELLER"] = "seller";
    ShopProfileEnum["ADMIN"] = "admin";
})(ShopProfileEnum || (ShopProfileEnum = {}));
var sellerProfile = ShopProfileEnum.SELLER;
var shopBuyerProfile = {
    id: 5,
    //this will throw error because type of profile is an enum and not string
    //Hence enum is a better way of using constant strings in your project to 
    //avoid any error
    //profile: "hye",
    profile: ShopProfileEnum.BUYER
};
// explain generics in ts with some code
// Level: Hard, Duration: 15 minutes
var addCreatedAtObj = function (obj) {
    var createdAt = new Date();
    return __assign(__assign({}, obj), { createdAt: createdAt });
};
var newProfile = {
    firstName: "chetan",
    profileData: {
        facebookId: 111,
    },
    address: "haldwani"
};
var newProfileBuyer = {
    firstName: "chetan",
    profileData: {
        credits: 111,
    },
    address: {
        address1: "city",
        address2: "hye"
    }
};
var newData = addCreatedAtObj(newProfile);
// adding createdAt property to a generic object
console.log(addCreatedAtObj({ price: 200 }));
// this will throw error because the generics is 
//extending an object and we are passing string below
//addCreatedAtObj('kiran');
// explain tuple in ts with some code and how is it different from array
// Level: Medium, Duration: 10 minutes
var arr = ["hye", 12121];
var newArr = ["hye", 12121];
// tuple to define each element
// with tuple we have to define all possible types
var arr1 = ["hye", 121, "grr"];
var cus6 = {
    firstName: "Chetan",
    lastName: "upreti",
};
var getFirstName = function (cus) {
    return cus === null || cus === void 0 ? void 0 : cus.firstName;
};
var cus1 = [{
        firstName: "chetan", lastName: "upreti", id: 1
    }, {
        firstName: "chetan1", lastName: "upreti1", id: 2
    }];
var colums = ["firstName", "lastName", "id"];
var result = cus1.map(function (cus) { return colums.map(function (column) { return cus[column]; }); });
var us = {
    age: 1,
    //not allowed
    //isValid:boolean
};
// explain what is Readonly helper in TS
// Level: Easy, Duration: 5 minutes
//properties should not to be modify 
var cus3 = {
    id: 1,
    firstName: "Cheta",
    lastName: "c",
    age: 1
};
//not allowed
//cus3.lastName = "dsdds"
// explain what is Partial helper in TS
// Level: Easy, Duration: 5 minutes
//it helps to create new type from an existing interface with all
//properties marked as optional
var updateCustomer = function (cus, fields) {
    return __assign(__assign({}, cus), fields);
};
var updatedCustomer = updateCustomer(cus3, { age: 43 });
console.log(updatedCustomer);
//it helps to create new type from an existing interface with all
//properties marked as required eg put apis
var myProfile1 = {
    name: "chetan",
    age: 5,
    skills: "hye"
};
// explain type inference in TS
// Level: Easy, Duration: 2 minutes
//typescript infers datatype of variable when we haven't explicitly defined
//data type of variable. Here fullName datatype  is infered by Ts as string
var fullName = "chetan";
// explain literal type in TS
// Level: Medium, Duration: 5 minutes
/**
 * 1.
 * if for const we don't declare data type explicitly then it will use
 * value of RHS as literal type
 */
//literal type 4
var you = 4;
//literal type success
var apiMessage = "success";
var getStatus = function (status) {
    if (status === "success") {
        return "success";
    }
    else if (status === "failure") {
        return "failure";
    }
    else {
        return "in-progress";
    }
};
// discuss tsconfig.json file
// Level: Medium, Duration: 5 minutes
// this is the typescript config file
// readmore at: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
// what is TSC and TSLS
// Level: Medium, Duration: 5 minutes
/**
Three building blocks
1. TS programming language
2. TS compiler (TSC)
3. TS language service

1. language: syntax, keywords, type annotations
2. TSC convert TS to JS
3. TSLS: additional layer ex. autocompletion, auto import,
code formatting, signature help, colorization etc
which are mainly added in code editor such as VS code

https://github.com/microsoft/TypeScript/wiki/Using-the-Language-Service-API
 */
// how will you transpile ts file into js
// Level: Medium, Duration: 3 minutes
// use the tsc binary
// `./node_modules/typescript/bin/tsc --help`
// `./node_modules/typescript/bin/tsc src/main.ts --outfile build.js`
var a = false;
// d.ts file in ts
// Level: Medium, Duration: 3 minutes
// `./node_modules/typescript/bin/tsc src/main.ts --outfile build.js --declaration` 
//compile Ts file to js and also create declaration files
//type declaration files are created if you want to expose
//your apis as a library so that a project which is using our code can also use our type
// .map file in ts
// Level: Medium, Duration: 3 minutes
// `./node_modules/typescript/bin/tsc src/main.ts --outfile build.js --declaration --sourceMap` 
//generates source maps for our js files in the project ex: build.js.map
//# sourceMappingURL=build.js.map