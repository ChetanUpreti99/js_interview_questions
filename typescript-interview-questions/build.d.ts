/**
Difference between TS and JS
1. both are programming languages. JS can run on browsers but TS can't. TS is strongly type language.
2. TS additional type checks which is missing in JS.
3. give type error in compile time.
*/
declare let num: number;
declare let name6: string;
declare let num1: number;
declare let name1: string;
declare const savings = 15;
/**
 Write a function `getAddress` which adds city, state and country and returns a comma separated full address
Level: Easy, Duration: 5 minutes
*/
declare function getAddress({ city, state, country }: {
    city: string;
    state?: string;
    country: string;
}): string;
/**
Explain interface in TypeScript by writing some code
Level: Easy, Duration: 5 minutes
*/
/**
to define entity in TS
Interface allows us to add typescript support for object ex: we have added type for a Profile entity
*/
interface Profile1 {
    name: string;
    age: number;
}
declare let user: Profile1;
declare function getUserAge(user: Profile1): number;
type ProfileType = {
    name: string;
    age: number;
};
declare let user1: ProfileType;
declare function getUserAge1(user: ProfileType): number;
/**
 interface and type are very similar and they can use interchangeably.
 */
type ID = number;
declare let id: ID;
interface User1 {
    name: string;
    age: number;
}
interface SuperUser extends User1 {
    authorization: string[];
}
type ProfileType1 = {
    name: string;
    age: number;
};
type SuperProfileType = ProfileType1 & {
    authorization: string[];
};
type booleanOrString = string | boolean;
declare let res1: booleanOrString;
declare let res2: booleanOrString;
declare const getNameAndSalary: (firstName: string | null, lastName: string | null, salary: number | string) => string;
type NetworkError = {
    category: "network";
};
type ResourceError = {
    category: "resource";
    code: 404;
};
type ServerError = {
    category: "server";
    code: 500;
    message: "something went wrong";
};
type AppError = NetworkError | ResourceError | ServerError;
declare const getAppError: (error: AppError) => "network" | 404 | "something went wrong";
declare const getAppError2: (error: AppError) => unknown;
declare const getAge: (age: Date | string) => string | number;
declare const logMessage: (message: string) => void;
/**
 never is used as function return type for function which never
 comes to end ex a function throwing error
  void is also ok
 */
declare const throwErrorFn: (message: string) => never;
declare const infiniteLoop: () => never;
declare const infiniteLoop1: () => void;
declare const throwErrorFn1: (message: string) => void;
declare const errorHandler3: (message: string) => string | never;
/**
 * try to avoid any as possible
 * make sure to use strict: true and have noImplicitAny:true so it doesn't
 */
declare const getName: (firstName: number, lastName: any) => any;
type ErrorObject = {
    message: string;
};
declare const handleError: (error: unknown) => string | number;
/**
 querySelector will return element with type Element |null
 use type assertion to mention it is HTMLInputElement
 union with null cause there is no element present on DOM
 */
interface ProfileInterface {
    getProfileName(): string;
    getSecurityPin(): string;
    optionalFun?(): void;
}
declare class Profile implements ProfileInterface {
    firstName: string;
    lastName: string;
    private securityPin;
    readonly email: string;
    static readonly maxBuyingCredit = 10000;
    constructor(firstName: string, lastName: string, securityPin: string, email: string);
    getProfileName(): string;
    getSecurityPin(): string;
    updateSecurityPin(pin: string): void;
    getEmail(): string;
    changeEmail(): void;
}
declare const buyerProfile: Profile;
declare class PremiumProfile extends Profile {
    private customUsername;
    setUsername(username: string): void;
    getUsername(): string | undefined;
}
declare const vipCustomer: PremiumProfile;
declare const ProfileConst: {
    buyer: number;
    seller: number;
    admin: number;
};
declare enum ProfileEnum {
    buyer = 0,
    seller = 1,
    admin = 2
}
declare let myProfile: ProfileEnum;
declare enum ShopProfileEnum {
    BUYER = "buyer",
    SELLER = "seller",
    ADMIN = "admin"
}
declare const sellerProfile: ShopProfileEnum;
interface ShopBuyerProfileInterface {
    id: number;
    profile: ShopProfileEnum;
}
declare const shopBuyerProfile: ShopBuyerProfileInterface;
declare const addCreatedAtObj: <T extends object>(obj: T) => T & {
    createdAt: Date;
};
interface ProfileG<T, U> {
    firstName: string;
    address: U;
    profileData: T;
}
declare const newProfile: ProfileG<{
    facebookId: number;
}, string>;
declare const newProfileBuyer: ProfileG<{
    credits: number;
}, {
    address1: string;
    address2: string;
}>;
declare const newData: ProfileG<{
    facebookId: number;
}, string> & {
    createdAt: Date;
};
declare let arr: (string | number)[];
declare let newArr: Array<string | number>;
declare let arr1: [string, number, string];
interface Customer9 {
    firstName: string;
    lastName: string;
    middleName?: string;
}
declare let cus6: Customer9;
declare const getFirstName: (cus?: Customer9) => string;
interface NewCustomer {
    firstName: string;
    lastName: string;
    id: number;
}
declare const cus1: NewCustomer[];
declare let colums: Array<keyof NewCustomer>;
declare let result: (string | number)[][];
interface NewUser {
    firstName: string;
    lastName: string;
    [key: string]: number | string;
}
type NewUser1 = Record<string, number>;
declare const us: NewUser1;
interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}
type Custom1 = Omit<Customer, "id" | "age">;
type Custom2 = Pick<Customer, "firstName" | "age">;
declare let cus3: Readonly<Customer>;
declare const updateCustomer: (cus: Customer, fields: Partial<Customer>) => {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
};
declare const updatedCustomer: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
};
interface ProfileMe {
    name: string;
    age?: number;
    skills?: string;
}
declare const myProfile1: Required<ProfileMe>;
declare let fullName: string;
/**
 * 1.
 * if for const we don't declare data type explicitly then it will use
 * value of RHS as literal type
 */
declare const you = 4;
declare const apiMessage = "success";
/**
 * 2. Useful example
 */
type Status = "success" | "failure" | "in-progress";
declare const getStatus: (status: Status) => Status;
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
declare const a: boolean;
