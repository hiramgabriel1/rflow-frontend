import type { RegisterData } from "../../../pages/AuthPages/hooks/useAuth";

export const companyTypeOptions = [
	{ value: "technology", label: "Technology" },
	{ value: "retail", label: "Retail" },
	{ value: "finance", label: "Finance" },
	{ value: "healthcare", label: "Healthcare" },
	{ value: "education", label: "Education" },
	{ value: "other", label: "Other" },
];

export const referralSourceOptions = [
	{ value: "tiktok", label: "TikTok" },
	{ value: "facebook", label: "Facebook" },
	{ value: "instagram", label: "Instagram" },
	{ value: "reddit", label: "Reddit" },
	{ value: "x", label: "X (Twitter)" },
	{ value: "other", label: "Other" },
];

export const initialValues = {
	username: "",
	email: "",
	password: "",
	phoneNumber: "",
	companyName: "",
	typeCompany: "",
	pageWhereYouFound: "" as RegisterData["pageWhereYouFound"] | "",
	terms: false,
};

export const signInInitialValues = {
	email: "",
	password: "",
	rememberMe: false,
};
