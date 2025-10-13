import { create } from "zustand";
import { useEffect } from "react";

interface SidebarStore {
	isExpanded: boolean;
	isMobileOpen: boolean;
	isMobile: boolean;
	isHovered: boolean;
	activeItem: string | null;
	openSubmenu: string | null;
	toggleSidebar: () => void;
	toggleMobileSidebar: () => void;
	setIsHovered: (isHovered: boolean) => void;
	setActiveItem: (item: string | null) => void;
	toggleSubmenu: (item: string) => void;
	setIsMobile: (isMobile: boolean) => void;
	setIsMobileOpen: (isMobileOpen: boolean) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
	isExpanded: true,
	isMobileOpen: false,
	isMobile: false,
	isHovered: false,
	activeItem: null,
	openSubmenu: null,
	toggleSidebar: () => set((state) => ({ isExpanded: !state.isExpanded })),
	toggleMobileSidebar: () =>
		set((state) => ({ isMobileOpen: state.isMobileOpen })),
	setIsHovered: (isHovered) => set({ isHovered }),
	setActiveItem: (activeItem) => set({ activeItem }),
	toggleSubmenu: (item) =>
		set((state) => ({ openSubmenu: state.openSubmenu === item ? null : item })),
	setIsMobile: (isMobile) => set({ isMobile }),
	setIsMobileOpen: (isMobileOpen) => set({ isMobileOpen }),
}));

export const useSidebarResize = () => {
	const { setIsMobile, setIsMobileOpen } = useSidebarStore();

	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
			if (!mobile) {
				setIsMobileOpen(false);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [setIsMobile, setIsMobileOpen]);
};
