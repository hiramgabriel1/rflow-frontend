import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import { EyeCloseIcon, EyeIcon } from "../../shared/icons";
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import FormCheckboxTerms from "../form/FormCheckboxTerms";
import OptionsSignup from "./components/OptionsSignup";
import { useAuthUser } from "../../pages/AuthPages/hooks/useAuth";
import { signUpSchema } from "./schemas/AuthSchema";
import {
	initialValues,
	referralSourceOptions,
} from "./constants/authConstants";

/**
 * Signup form component
 * @returns
 */
export default function SignUpForm() {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const { trigger, isLoading, error } = useAuthUser("Register");

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: signUpSchema,
		onSubmit: async (values) => {
			try {
				const { ...registerData } = values;
				await trigger(registerData);
				navigate("/");
			} catch (err) {
				console.error("Error al registrar:", err);
			}
		},
	});

	return (
		<div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
			<div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
				<div>
					<div className="mb-5 sm:mb-8">
						<h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
							Sign Up
						</h1>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Enter your information to sign up!
						</p>
					</div>
					<div>
						<OptionsSignup />
						<div className="relative py-3 sm:py-5">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
									Or
								</span>
							</div>
						</div>

						<form onSubmit={formik.handleSubmit}>
							<div className="space-y-5">
								<FormInput
									label="Username"
									name="username"
									type="text"
									placeholder="Enter your username"
									required
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.username}
									error={formik.errors.username}
									touched={formik.touched.username}
								/>

								<FormInput
									label="Email"
									name="email"
									type="email"
									placeholder="Enter your email"
									required
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									error={formik.errors.email}
									touched={formik.touched.email}
								/>

								<FormInput
									label="Password"
									name="password"
									type={showPassword ? "text" : "password"}
									placeholder="Enter your password"
									required
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
									error={formik.errors.password}
									touched={formik.touched.password}
									icon={
										<span
											onClick={() => setShowPassword(!showPassword)}
											className="cursor-pointer"
										>
											{showPassword ? (
												<EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
											) : (
												<EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
											)}
										</span>
									}
								/>

								<FormInput
									label="Phone Number"
									name="phoneNumber"
									type="tel"
									placeholder="Enter your phone number"
									required
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.phoneNumber}
									error={formik.errors.phoneNumber}
									touched={formik.touched.phoneNumber}
								/>

								<FormSelect
									label="Where did you find us?"
									name="pageWhereYouFound"
									placeholder="Select an option"
									required
									options={referralSourceOptions}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.pageWhereYouFound}
									error={formik.errors.pageWhereYouFound}
									touched={formik.touched.pageWhereYouFound}
								/>

								<FormCheckboxTerms
									checked={formik.values.terms}
									onChange={(checked) => formik.setFieldValue("terms", checked)}
									error={formik.errors.terms}
									touched={formik.touched.terms}
								/>

								{/* Button */}
								<div>
									<button
										type="submit"
										disabled={isLoading}
										className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{isLoading ? "Registrando..." : "Sign Up"}
									</button>
								</div>

								{error && (
									<div className="p-3 text-sm text-error-500 bg-error-50 dark:bg-error-900/20 rounded-lg">
										{error.message || "An error occurred"}
									</div>
								)}
							</div>
						</form>

						<div className="mt-5">
							<p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
								Already have an account? {""}
								<Link
									to="/signin"
									className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
								>
									Sign In
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
