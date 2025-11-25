import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import Footer from "../components/fragment/Footer";
import NavbarGuess from "../components/fragment/NavbarGuess";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState("false");
  const [showConfirmPassword, setShowConfirmPassword] = useState("false");
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password", "")

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="w-full bg-white">
      <div className="relative min-h-screen bg-white flex items-center justify-center p-4 text-red-900">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-2 text-center">
            <h1 className="text-xl font-bold">Create New Account</h1>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nama Lengkap */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="w-full px-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-600 transition-all duration-200"
                    placeholder="Enter your full name"
                    {...register('fullName', { required: "username is required" })}
                  />
                  <div className="absolute inset-y-0 left-2 flex items-center mr-3">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                {errors.fullName && <p>{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none transition-all duration-200"
                    placeholder="example@email.com"
                    {...register('email', { required: 'email is requiered' })}
                  />
                  <div className="absolute inset-y-0 left-2 flex items-center mr-3">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "password" : "text"}
                    className="w-full px-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none transition-all duration-200"
                    placeholder="enter password"
                    {...register('password', {
                      required: "password required",
                      minLength: { value: 8, message: "min 8 character" },
                      pattern: {
                        value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+/,
                        message: "Harus mengandung huruf besar, huruf kecil, angka, dan symbol"
                      }
                    })}
                  />
                  <div className="absolute inset-y-0 left-2 flex items-center mr-3">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 z-1 right-0 flex items-center mr-3 cursor-pointer">
                    {showPassword === false ? (
                      <HiEyeOff />
                    ) : (
                      <HiEye />
                    )}
                  </div>
                </div>
                {errors.password && <p>{errors.password.message}</p>}
              </div>

              {/* Konfirmasi Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "password" : "text"}
                    className="w-full px-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none transition-all duration-200"
                    placeholder="enter confirm password"
                    {...register("confirmPassword", { required: "confrim password required", validate: value => value === password || "confirm password doesn't match" })}
                  />
                  <div className="absolute inset-y-0 left-2 flex items-center mr-3">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 flex items-center mr-3 cursor-pointer">
                    {showConfirmPassword === false ? (
                      <HiEyeOff />
                    ) : (
                      <HiEye />
                    )}
                  </div>
                </div>
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 font-medium cursor-pointer"
              >
                Sign Up
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-red-700 hover:text-red-800">
                  login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default SignUp;