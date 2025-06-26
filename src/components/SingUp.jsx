import React, { useState } from 'react';
import { signUp } from '../Services/authApi';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password:"",
    country: ""
  });
  

  const navigate = useNavigate();

  const handleOnChange = (e)=>{
    setSignUpData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSignUp = (e) => {
    e.preventDefault();

    // Here you can add logic to send the data to your backend API
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    signUp(signUpData,navigate)
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-56px)] bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Create Your Account</h2>
        <form onSubmit={handleSignUp} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name='name'
              id="name"
              value={signUpData.name}
              onChange={handleOnChange}
              required
              placeholder="Enter your full name"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              id="email"
              value={signUpData.email}
              onChange={handleOnChange}
              required
              placeholder="you@example.com"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={signUpData.password}
              onChange={handleOnChange}
              required
              placeholder="••••••••"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              value={signUpData.country}
              onChange={handleOnChange}
              required
              placeholder="enter your country"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;