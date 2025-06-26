import { useState } from 'react';
import { signIn } from '../Services/authApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 const [signInData, setSignInData] = useState({
     email: "",
     password:"",
   });

   const handleOnChange = (e)=>{
    setSignInData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("button is working");

    // TODO: Add your login/auth logic here (e.g. API call or Firebase)
    dispatch(signIn(signInData,navigate))
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-56px)] bg-gray-100">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name='email'
              type="email"
              value={signInData.email}
              onChange={handleOnChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name='password'
              type="password"
              value={signInData.password}
              onChange={handleOnChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
