import { useState } from "react";
import { Link } from "react-router";
import { useFormik } from "formik";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import FormInput from "../form/FormInput";
import Checkbox from "../form/input/Checkbox";
import OptionsSignin from "./components/OptionsSignin";
import { useAuthUser } from "../../pages/AuthPages/hooks/useAuth";
import { signInSchema } from "./schemas/AuthSchema";
import { signInInitialValues } from "./constants/authConstants";

/**
 * SignIn form component
 * @returns
 */
export default function SignInForm() {
	const [showPassword, setShowPassword] = useState(false);

	const { trigger, isLoading, error } = useAuthUser("Login");

	const formik = useFormik({
		initialValues: signInInitialValues,
		validationSchema: signInSchema,
		onSubmit: async (values) => {
			try {
				const { email, password } = values;
				await trigger({ email, password });
			} catch (err) {
				console.error("Error al iniciar sesión:", err);
			}
		},
	});

	return (
		<div className="flex flex-col flex-1">
			<div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
				<div>
					<div className="mb-5 sm:mb-8">
						<h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
							Sign In
						</h1>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Enter your email and password to sign in!
						</p>
					</div>
					<div>
						<OptionsSignin />
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
							<div className="space-y-6">
								<FormInput
									label="Email"
									name="email"
									type="email"
									placeholder="info@gmail.com"
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

								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<Checkbox
											checked={formik.values.rememberMe}
											onChange={(checked) =>
												formik.setFieldValue("rememberMe", checked)
											}
										/>
										<span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
											Keep me logged in
										</span>
									</div>
									<Link
										to="/reset-password"
										className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
									>
										Forgot password?
									</Link>
								</div>

								<div>
									<button
										type="submit"
										disabled={isLoading}
										className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{isLoading ? "Iniciando sesión..." : "Sign In"}
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
								Don&apos;t have an account? {""}
								<Link
									to="/signup"
									className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
								>
									Sign Up
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
