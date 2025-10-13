import { create } from "zustand";
import { useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeStore {
	theme: Theme;
	isInitialized: boolean;
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
	setIsInitialized: (isInitialized: boolean) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
	theme: "light",
	isInitialized: false,
	toggleTheme: () =>
		set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
	setTheme: (theme) => set({ theme }),
	setIsInitialized: (isInitialized) => set({ isInitialized }),
}));

export const useThemeInitializer = () => {
	const { setTheme, setIsInitialized } = useThemeStore();

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as Theme;
		const initialTheme = savedTheme || "light";

		setTheme(initialTheme);
		setIsInitialized(true);
	}, [setTheme, setIsInitialized]);
};

export const useThemeSynchronizer = () => {
	const { theme, isInitialized } = useThemeStore();

	useEffect(() => {
		if (isInitialized) {
			localStorage.setItem("theme", theme);
			if (theme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	}, [theme, isInitialized]);
};
