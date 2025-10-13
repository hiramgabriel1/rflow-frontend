import type { SelectHTMLAttributes } from "react";
import Label from "./Label";

interface FormSelectOption {
	value: string;
	label: string;
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	name: string;
	error?: string;
	touched?: boolean;
	required?: boolean;
	options: FormSelectOption[];
	placeholder?: string;
}

export default function FormSelect({
	label,
	name,
	error,
	touched,
	required = false,
	options,
	placeholder = "Select an option",
	...selectProps
}: FormSelectProps) {
	const showError = error && touched;

	return (
		<div>
			<Label>
				{label}
				{required && <span className="text-error-500">*</span>}
			</Label>
			<select
				id={name}
				name={name}
				{...selectProps}
				className={`w-full rounded-lg border ${
					showError
						? "border-error-500"
						: "border-gray-200 dark:border-gray-800"
				} bg-white px-4 py-3 text-sm text-gray-800 outline-none transition dark:bg-gray-900 dark:text-white focus:border-brand-500 dark:focus:border-brand-400 ${
					selectProps.className || ""
				}`}
			>
				<option value="">{placeholder}</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{showError && <div className="mt-1 text-xs text-error-500">{error}</div>}
		</div>
	);
}
