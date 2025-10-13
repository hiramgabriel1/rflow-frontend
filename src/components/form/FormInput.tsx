import type { InputHTMLAttributes } from "react";
import Label from "./Label";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
	error?: string;
	touched?: boolean;
	required?: boolean;
	icon?: React.ReactNode;
}

export default function FormInput({
	label,
	name,
	error,
	touched,
	required = false,
	icon,
	...inputProps
}: FormInputProps) {
	const showError = error && touched;

	return (
		<div>
			<Label>
				{label}
				{required && <span className="text-error-500">*</span>}
			</Label>
			<div className="relative">
				<input
					id={name}
					name={name}
					{...inputProps}
					className={`w-full rounded-lg border ${
						showError
							? "border-error-500"
							: "border-gray-200 dark:border-gray-800"
					} bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 focus:border-brand-500 dark:focus:border-brand-400 ${
						icon ? "pr-12" : ""
					} ${inputProps.className || ""}`}
				/>
				{icon && (
					<span className="absolute z-30 -translate-y-1/2 right-4 top-1/2">
						{icon}
					</span>
				)}
			</div>
			{showError && <div className="mt-1 text-xs text-error-500">{error}</div>}
		</div>
	);
}
