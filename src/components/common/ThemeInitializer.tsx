import type { FC } from "react";
import {
	useThemeInitializer,
	useThemeSynchronizer,
} from "../../stores/useThemeStore";

export const ThemeInitializer: FC = () => {
	useThemeInitializer();
	useThemeSynchronizer();

	return null;
};
