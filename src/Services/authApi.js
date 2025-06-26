import { apiConnector } from "./apiConnector";
import { useDispatch } from "react-redux";
import { setLoading, setTasks, setToken, setUser } from "./redux/userSlice";

const SIGNUP_API = "http://localhost:3000/api/auth/signup"
const SIGNIN_API = "http://localhost:3000/api/auth/signin"
export async function signUp(singnUpData, navigate) {
    try {
        const { email, password, name, country } = singnUpData;
        const response = await apiConnector("POST", SIGNUP_API, {
            email,
            password,
            name,
            country
        })

        console.log("SENDOTP API RESPONSE............", response)

        console.log(response.data.success)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }

        navigate("/signin");
    }
    catch (error) {
        console.log("SIGNUP API ERROR............", error)
        navigate("/signup")
    }
}

//here i wrongly write async singIn function should asynchronus funcitons
export function signIn(signInData, navigate) {
    console.log("we are in signIn authapi");
    return async (dispatch) => {
        //error : You're calling a React Hook (useDispatch) inside a regular function, signIn, which is not a React component or a custom hook.
        try {
            // const dispatch = useDispatch();
            const { email, password } = signInData
            console.log("we are after post api");
            const response = await apiConnector("POST", SIGNIN_API, {
                email,
                password
            })
            console.log("we are after post api");
            console.log(response);
            console.log(response.data.user._id);

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            console.log("token",response.data.token);
            dispatch(setLoading(true));
            dispatch(setUser(response.data.user))
            dispatch(setToken(response.data.token));

            localStorage.setItem("user", JSON.stringify(response.data.user))
            localStorage.setItem("loading", JSON.stringify(true));
            localStorage.setItem("token", JSON.stringify(response.data.token))

            // dispatch(setUser(response.data.user));
            // dispatch(setLoading());

            navigate("/dashboard/status");
        } catch (error) {
            console.log("LOGIN API ERROR............", error)
        }
    }

}

export function logOut(navigate) {
    return async (dispatch) => {
        try {
            dispatch(setTasks(null));
            dispatch(setLoading(null));
            dispatch(setUser(null));
            localStorage.removeItem("user");
            localStorage.removeItem("loading");
            console.log(localStorage.getItem("loading"));
            localStorage.clear();
            console.log("Logout Successfully")
            navigate("/signin");

        } catch (error) {
            console.log("Logout Unsuccessfull")
        }
    }
}