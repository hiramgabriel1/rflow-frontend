import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
	username: Yup.string()
		.min(3, "El nombre de usuario debe tener al menos 3 caracteres")
		.max(50, "El nombre de usuario es demasiado largo")
		.required("El nombre de usuario es requerido"),
	email: Yup.string().email("Email inválido").required("El email es requerido"),
	password: Yup.string()
		.min(8, "La contraseña debe tener al menos 8 caracteres")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			"La contraseña debe contener al menos una mayúscula, una minúscula y un número"
		)
		.required("La contraseña es requerida"),
	phoneNumber: Yup.string()
		.matches(/^[0-9+\-\s()]*$/, "Número de teléfono inválido")
		.min(10, "El número de teléfono debe tener al menos 10 dígitos")
		.required("El número de teléfono es requerido"),
	companyName: Yup.string()
		.min(2, "El nombre de la empresa debe tener al menos 2 caracteres")
		.required("El nombre de la empresa es requerido"),
	typeCompany: Yup.string().required("El tipo de empresa es requerido"),
	pageWhereYouFound: Yup.string()
		.oneOf(
			["tiktok", "facebook", "instagram", "reddit", "x", "other"],
			"Selecciona una opción válida"
		)
		.required("Este campo es requerido"),
	terms: Yup.boolean()
		.oneOf([true], "Debes aceptar los términos y condiciones")
		.required("Debes aceptar los términos y condiciones"),
});

export const signInSchema = Yup.object().shape({
	email: Yup.string().email("Email inválido").required("El email es requerido"),
	password: Yup.string().required("La contraseña es requerida"),
	rememberMe: Yup.boolean(),
});
