import useSWR from "swr";

/**
 * this method is used to login user
 * @returns
 */
export const useAuth = () => {
	const { data, error } = useSWR("/api/auth", (url: string) =>
		fetch(url).then((res) => res.json())
	);

	return {
		isAuthenticated: !!data,
		isLoading: !error && !data,
		error,
	};
};
