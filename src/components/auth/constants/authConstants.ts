import type { RegisterData } from "../../../pages/AuthPages/hooks/useAuth";

// export const companyTypeOptions = [
// 	{ value: "technology", label: "Technology" },
// 	{ value: "retail", label: "Retail" },
// 	{ value: "finance", label: "Finance" },
// 	{ value: "healthcare", label: "Healthcare" },
// 	{ value: "education", label: "Education" },
// 	{ value: "other", label: "Other" },
// ];

export const referralSourceOptions = [
	{ value: "TikTok", label: "TikTok" },
	{ value: "Facebook", label: "Facebook" },
	{ value: "Instagram", label: "Instagram" },
	{ value: "Reddit", label: "Reddit" },
	{ value: "X", label: "X (Twitter)" },
	{ value: "Other", label: "Other" },
];

export const initialValues = {
	username: "",
	email: "",
	password: "",
	phoneNumber: "",
	pageWhereYouFound: "" as RegisterData["pageWhereYouFound"] | "",
	terms: false,
};

export const signInInitialValues = {
	email: "",
	password: "",
	rememberMe: false,
};
