export type TypeAuth = "Login" | "Register";

export type PageWhereYouFound =
	| "TikTok"
	| "Facebook"
	| "Instagram"
	| "Reddit"
	| "X"
	| "Other";

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
