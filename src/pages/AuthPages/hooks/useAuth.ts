import useSWRMutation from "swr/mutation";
import type { TypeAuth, User } from "./interfaces/AuthInterfaces";
import { API_URL } from "../../../shared/constants";

export type LoginData = Pick<User, "email" | "password">;
export type RegisterData = User;

async function authFetcher<T>(
	url: string,
	{ arg }: { arg: LoginData | RegisterData }
): Promise<T> {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(arg),
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || "Error en la autenticación");
	}

	return response.json();
}

/**
 * this method is used to login user
 * @returns
 */
export const useAuthUser = <T = unknown>(typeAuth: TypeAuth) => {
	const endpoint = typeAuth === "Login" ? "login" : "register";
	const url = `${API_URL}/auth/${endpoint}`;

	const { trigger, data, error, isMutating, reset } = useSWRMutation<
		T,
		Error,
		string,
		LoginData | RegisterData
	>(url, authFetcher<T>);

	return {
		trigger,
		data,
		error,
		isLoading: isMutating,
		reset,
	};
};
