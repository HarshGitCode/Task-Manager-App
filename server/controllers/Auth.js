const User = require("../models/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config();


exports.singup = async (req, res)=>{
    try {
        console.log("i am into signup");
        const {
            email, password, name, country 
        } = req.body

        console.log({email,password,name,country});
        
        //validation
        if(!email || !password || !name || !country){
            return res.status(403).send({
                success: false,
                message: "All field are required"
            })
        }

        // console.log("i am pass validation");
        //check is user already exists
        const existingUser = await User.findOne({email});
        // console.log("i ma on user arlreay exists");
        if(existingUser){
            return res.status(403).json({
                success: false,
                message: "User already exists. Please sign in to continue."
            })
        }

        //hash the password
        const hashPassword = await bcrypt.hash(password, 10);
        // console.log("i am pass hashing password");

        //create the user
        const user = await User.create({
            email,
            password: hashPassword,
            name,
            country,
        })
        // console.log("i created user");

        return res.status(200).json({
            success: true,
            user,
            message: "User Registered Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again."
        })  
    }
}

exports.signin = async(req, res)=>{
    try {
         // Get email and password from request body
        const { email, password } = req.body
        console.log("we are in signin controller");
        console.log(email,password);

        // Check if email or password is missing
        if (!email || !password) {
        // Return 400 Bad Request status code with error message
        return res.status(400).json({
            success: false,
            message: `Please Fill up All the Required Fields`,
        })
        }

        console.log("i pass validation");



        // Find user with provided email
        //if i use .populate here it will not work because we not create any project yet
        const user = await User.findOne({ email })
        console.log("find user",user);

        console.log("after find user");
    
        // If user not found with provided email
        if (!user) {
            // Return 401 Unauthorized status code with error message
            return res.status(401).json({
            success: false,
            message: `User is not Registered with Us Please SignUp to Continue`,
            })
        }

        console.log("generate token");

        // Generate JWT token and Compare Password
        if (await bcrypt.compare(password, user.password)) {
            console.log("comparing successful");
            const token = jwt.sign(
            { email: user.email, id: user._id, country: user.country },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h",
            }
            )

            console.log("generate token",token);
    
            // Save token to user document in database
            // user.token = token
            user.password = undefined
            // Set cookie for token and return success response
            const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            }
            console.log("cookie")
            res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: `User Login Success`,
            })
        } else {
            return res.status(401).json({
            success: false,
            message: `Password is incorrect`,
            })
        }

    } catch (error) {
        
    }
}

