import Checkbox from "./input/Checkbox";

interface FormCheckboxTermsProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
	error?: string;
	touched?: boolean;
}

export default function FormCheckboxTerms({
	checked,
	onChange,
	error,
	touched,
}: FormCheckboxTermsProps) {
	const showError = error && touched;

	return (
		<div>
			<div className="flex items-center gap-3">
				<Checkbox className="w-5 h-5" checked={checked} onChange={onChange} />
				<p className="inline-block font-normal text-gray-500 dark:text-gray-400">
					By creating an account means you agree to the{" "}
					<span className="text-gray-800 dark:text-white/90">
						Terms and Conditions,
					</span>{" "}
					and our{" "}
					<span className="text-gray-800 dark:text-white">Privacy Policy</span>
				</p>
			</div>
			{showError && <div className="mt-1 text-xs text-error-500">{error}</div>}
		</div>
	);
}
