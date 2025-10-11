import { useState, useCallback } from "react";

/**
 * this hook is used to open or close modal in all application
 * @param initialState
 * @shared
 * @returns
 */
export const useModal = (initialState: boolean = false) => {
	const [isOpen, setIsOpen] = useState(initialState);

	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);
	const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

	return { isOpen, openModal, closeModal, toggleModal };
};
