export type TypeAuth = "Login" | "Register";

export type PageWhereYouFound =
	| "tiktok"
	| "facebook"
	| "instagram"
	| "reddit"
	| "x"
	| "other";

export interface User {
	email: string;
	username: string;
	password: string;
	phoneNumber: string;
	pageWhereYouFound: PageWhereYouFound;
	typeCompany: string;
	companyName: string;
	companyPhone?: string;
}
