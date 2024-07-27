/**
Difference between TS and JS
1. both are programming languages. JS can run on browsers but TS can't. TS is strongly type language.
2. TS additional type checks which is missing in JS.
3. give type error in compile time.
*/

// 1. Can you write some code to demonstrate the difference between explicit and implicit types and which one to use?
// 2. What is the type of savings in `const savings = 15`?  //15

//explicit
let num: number = 17;
let name: string = "chetan";
console.log(num, name);


//implicit
let num1 = 17;
let name1 = "chetan";
console.log(num1, name1);

const savings = 15;
console.log(savings);


/**
 Write a function `getAddress` which adds city, state and country and returns a comma separated full address
Level: Easy, Duration: 5 minutes
*/


function getAddress({ city, state, country }: { city: string; state?: string; country: string }): string {
	return [country, state, city].filter(Boolean).join(",");
}


console.log(getAddress({ city: 'Sixth Avenue', country: 'Singapore' }));

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

let user: Profile1 = {
	name: "chetan",
	age: 26
}


function getUserAge(user: Profile1): number {
	return user.age;
}
console.log(user);
console.log(getUserAge(user));


// Explain type in TypeScript by writing some code
// Level: Easy, Duration: 5 minutes

// type is a reserved word that allows us to add typescript support
type ProfileType = {
	name: string;
	age: number;
}

let user1: ProfileType = {
	name: "chetan",
	age: 26
}


function getUserAge1(user: ProfileType): number {
	return user.age;
}
console.log(user1);
console.log(getUserAge1(user1));



// Explain difference between interface and type in TypeScript by writing some code
// Level: Easy, Duration: 5 minutes


/**
 interface and type are very similar and they can use interchangeably.
 */


//1. interface can only be used for object not for primitive data type
type ID = number;
let id: ID = 8;


//2. interface can be extended
interface User1 {
	name: string;
	age: number;
}

interface SuperUser extends User1 {
	authorization: string[]
}

type ProfileType1 = {
	name: string;
	age: number;
}

//type can be extended but similar implementation can be done using intersection.
type SuperProfileType = ProfileType1 & {
	authorization: string[]
}

//Both interface and type can be use with class using 'implements' keyword


// Explain Union in TS with some code
// Level: Easy, Duration: 5 minutes


type booleanOrString = string | boolean;
let res1: booleanOrString = true;
let res2: booleanOrString = "true";

const getNameAndSalary = (
	firstName: string | null,
	lastName: string | null,
	salary: number | string
): string => {

	const salaryFormatted = typeof salary === "string" ? salary : salary.toFixed();
	return (
		[firstName?.toUpperCase(), lastName?.toUpperCase()].join(" ") +
		" " + salaryFormatted
	)
}
console.log(getNameAndSalary('Kiran', 'Dash', '1 Billion'));
console.log(getNameAndSalary('Kiran', 'Dash', 234556.769988));


// Explain How to Narrow Union in TS with some code
// Level: Easy, Duration: 5 minutes

type NetworkError = {
	category: "network";
}

type ResourceError = {
	category: "resource";
	code: 404;
}

type ServerError = {
	category: "server";
	code: 500;
	message: "something went wrong";
}

type AppError = NetworkError | ResourceError | ServerError;

//Recommended: type narrowing using property value 
const getAppError = (error: AppError) => {
	if (error.category === "network") {
		return error.category;
	} else if (error.category === "resource") {
		return error.code;
	} else if (error.category === "server") {
		return error.message;
	}
}

// Not Recommended: Type Narrowing using property key
// Since this is implementation dependent and in future the key might get added to other types and hence cause failure
const getAppError2 = (error: AppError) => {
	if ('code' in error) {
		return error.code;
	} else if ('message' in error) {
		return error.message;
	}
	return error.category;
};

//Using instanceof to type narrowing
const getAge = (age: Date | string) => {
	if (age instanceof Date) {
		return age.getDate();
	}
	return age;
}



// Explain void in TS with some code
// Level: Easy, Duration: 5 minutes

//used to define a function return type when function is not return anything
const logMessage = (message: string): void => {
	console.log(message);
}
logMessage("hye its me");


// Explain never in TS with some code
// Level: Easy, Duration: 5 minutes


/**
 never is used as function return type for function which never 
 comes to end ex a function throwing error
  void is also ok
 */
const throwErrorFn = (message: string): never => {
	throw new Error(message)
}

const infiniteLoop = (): never => {
	while (true) {
		console.log("hye");
	}
}
const infiniteLoop1 = (): void => {
	while (true) {
		console.log("hye");
	}
}

const throwErrorFn1 = (message: string): void => {
	throw new Error(message)
}

// here implicitly the return type will be string
const errorHandler3 = (message: string): string | never => {
	if (message === 'server-error') {
		return message;
	} else {
		throw new Error(message);
	}
};

// Explain any in TS with some code
// Level: Easy, Duration: 5 minutes

/**
 * try to avoid any as possible
 * make sure to use strict: true and have noImplicitAny:true so it doesn't   
 */
const getName = (firstName: number, lastName: any) => {
	return firstName + lastName;
};

console.log(getName(1, 2));


// Explain unknown in TS with some code
// Level: Easy, Duration: 5 minutes

// `unknown` is used when you unsure about the arguments

type ErrorObject = {
	message: string;
}

//use unknown instead of any when type of arguments is unsure
const handleError = (error: unknown) => {
	//type narrowing
	if (typeof error === "string") {
		return error;
	} else if (typeof error === "number") {
		return error;
	} else {
		//use type assertion with "as" keyword, when you know what type is exactly
		//use cautiously only when you are sure that the type exists
		return (error as ErrorObject).message;
	}
}

// How will you add type for a DOM input element
// Level: Easy, Duration: 5 minutes


/**
 querySelector will return element with type Element |null
 use type assertion to mention it is HTMLInputElement
 union with null cause there is no element present on DOM
 */


const useInputElement = document.querySelector(".user-input") as HTMLInputElement | null;
// since usernameInputElement might be null
if (useInputElement) {
	useInputElement.addEventListener("blur", (event: FocusEvent) => {
		const target = event.target as HTMLInputElement;
		console.log(target.value);
	})
}

// Give an example on how will you add type for class
// Level: Medium, Duration: 15 minutes


interface ProfileInterface {
	getProfileName(): string;
	getSecurityPin(): string;
	//this need not to implement in class but if implemented then it should follow
	//the below type.
	optionalFun?(): void;
}


class Profile implements ProfileInterface {
	firstName: string;
	lastName: string;
	private securityPin: string;
	readonly email: string;
	static readonly maxBuyingCredit = 10000;

	constructor(
		firstName: string,
		lastName: string,
		securityPin: string,
		email: string
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.securityPin = securityPin;
		this.email = email;
	}
	getProfileName() {
		return (
			[
				this.firstName.toUpperCase(),
				this.lastName.toUpperCase(),
			].join(" ")
		)
	}

	getSecurityPin() {
		return this.securityPin;
	}

	updateSecurityPin(pin: string): void {
		this.securityPin = pin;
	}

	getEmail(): string {
		return this.email;
	}

	changeEmail(): void {
		// not allowed since email is readonly
		//this.email = 'kiran@kirandash.com';
	}
}


const buyerProfile = new Profile(
	'Kiran',
	'Dash',
	'2234',
	'kiran@kirandash.com'
);

console.log(buyerProfile.getProfileName());
console.log(buyerProfile.firstName, buyerProfile.lastName);
buyerProfile.updateSecurityPin('1234');
// This is not allowed since this is a private property
// console.log(buyerProfile.securityPin);

// static property does not exist on the instance but on the main class itself
console.log(Profile.maxBuyingCredit);


// Extends

class PremiumProfile extends Profile {
	private customUsername: string | undefined;

	setUsername(username: string): void {
		this.customUsername = username;
	}

	getUsername(): string | undefined {
		return this.customUsername;
	}
}

const vipCustomer = new PremiumProfile(
	'Frodo',
	'Dash',
	'2234',
	'frodo@kirandash.com'
);

vipCustomer.setUsername('frododash');
console.log(vipCustomer.getUsername());
console.log(vipCustomer.getProfileName());



// explain enum in ts with some code
// Level: Medium, Duration: 5 minutes

//JS
const ProfileConst = {
	buyer: 0,
	seller: 0,
	admin: 2
}

enum ProfileEnum {
	buyer,
	seller,
	admin
}

let myProfile: ProfileEnum = ProfileEnum.buyer;


enum ShopProfileEnum {
	BUYER = "buyer",
	SELLER = "seller",
	ADMIN = "admin"
}

const sellerProfile: ShopProfileEnum = ShopProfileEnum.SELLER;

interface ShopBuyerProfileInterface {
	id: number;
	profile: ShopProfileEnum
}

const shopBuyerProfile: ShopBuyerProfileInterface = {
	id: 5,
	//this will throw error because type of profile is an enum and not string
	//Hence enum is a better way of using constant strings in your project to 
	//avoid any error
	//profile: "hye",
	profile: ShopProfileEnum.BUYER
}


// explain generics in ts with some code
// Level: Hard, Duration: 15 minutes

const addCreatedAtObj = <T extends object>(obj: T): T & {
	createdAt: Date
} => {
	const createdAt = new Date();
	return {
		...obj,
		createdAt,
	};
}

// Generic with interface

interface ProfileG<T, U> {
	firstName: string;
	address: U;
	profileData: T;
}

const newProfile: ProfileG<{ facebookId: number; }, string> = {
	firstName: "chetan",
	profileData: {
		facebookId: 111,
	},
	address: "haldwani"
}

const newProfileBuyer: ProfileG<{ credits: number; }, { address1: string; address2: string }> = {
	firstName: "chetan",
	profileData: {
		credits: 111,
	},
	address: {
		address1: "city",
		address2: "hye"
	}
}


const newData = addCreatedAtObj<ProfileG<{ facebookId: number; }, string>>(newProfile);

// adding createdAt property to a generic object
console.log(
	addCreatedAtObj<{
		price: number;
	}>({ price: 200 })
);

// this will throw error because the generics is 
//extending an object and we are passing string below
//addCreatedAtObj('kiran');



// explain tuple in ts with some code and how is it different from array
// Level: Medium, Duration: 10 minutes


let arr: (string | number)[] = ["hye", 12121];
let newArr: Array<string | number> = ["hye", 12121];


// tuple to define each element
// with tuple we have to define all possible types

let arr1: [string, number, string] = ["hye", 121, "grr"];


// explain how will you define type for an optional property of an object in TS
// Level: Easy, Duration: 3 minutes

interface Customer {
	firstName: string;
	lastName: string;
	middleName?: string;
}


let cus: Customer = {
	firstName: "Chetan",
	lastName: "upreti",
}

const getFirstName = (cus?: Customer) => {
	return cus?.firstName;
}

// explain how will you define type for dynamic keys for an object in TS
// Level: Medium, Duration: 10 minutes


interface NewCustomer {
	firstName: string;
	lastName: string;
	id: number;
}

const cus1: NewCustomer[] = [{
	firstName: "chetan", lastName: "upreti", id: 1
}, {
	firstName: "chetan1", lastName: "upreti1", id: 2
}]


let colums: Array<keyof NewCustomer> = ["firstName", "lastName", "id"];

let result = cus1.map((cus) => colums.map((column) => cus[column]));

// explain what is an index signature in TS
// Level: Medium, Duration: 5 minutes

interface NewUser {
	firstName: string;
	lastName: string;
	//index signature to defined object key types
	[key: string]: number | string;

	//not allowed
	//isVip:boolean;
}


// explain what is Record helper in TS
// Level: Medium, Duration: 5 minutes
type NewUser1 = Record<string, number>;

const us: NewUser1 = {
	age: 1,
	//not allowed
	//isValid:boolean
}


// explain what is Omit utility in TS
// explain what is Pick utility in TS
// Level: Easy, Duration: 5 minutes


interface Customer {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
}

//discard few properties
type Custom1 = Omit<Customer, "id" | "age">;

//pick few properties
type Custom2 = Pick<Customer, "firstName" | "age">

// explain what is Readonly helper in TS
// Level: Easy, Duration: 5 minutes


//properties should not to be modify 
let cus3: Readonly<Customer> = {
	id: 1,
	firstName: "Cheta",
	lastName: "c",
	age: 1
}

//not allowed
//cus3.lastName = "dsdds"


// explain what is Partial helper in TS
// Level: Easy, Duration: 5 minutes


//it helps to create new type from an existing interface with all
//properties marked as optional
const updateCustomer = (cus: Customer, fields: Partial<Customer>) => {
	return {
		...cus,
		...fields
	}
}

const updatedCustomer = updateCustomer(cus3, { age: 43 });

console.log(updatedCustomer);




// explain what is Required helper in TS
// Level: Easy, Duration: 5 minutes


interface ProfileMe {
	name: string;
	age?: number;
	skills?: string;
}
//it helps to create new type from an existing interface with all
//properties marked as required eg put apis
const myProfile1: Required<ProfileMe> = {
	name: "chetan",
	age: 5,
	skills: "hye"
}



// explain type inference in TS
// Level: Easy, Duration: 2 minutes

//typescript infers datatype of variable when we haven't explicitly defined
//data type of variable. Here fullName datatype  is infered by Ts as string
let fullName = "chetan";


// explain literal type in TS
// Level: Medium, Duration: 5 minutes

/**
 * 1.
 * if for const we don't declare data type explicitly then it will use 
 * value of RHS as literal type
 */
const you = 4;
const apiMessage = "success"

/**
 * 2. Useful example
 */

type Status = "success" | "failure" | "in-progress";

const getStatus = (status: Status): Status => {
	if (status === "success") {
		return "success";
	} else if (status === "failure") {
		return "failure";
	} else {
		return "in-progress";
	}
}


