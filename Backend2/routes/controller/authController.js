const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../../model/userSchema")
const nodemailer = require("nodemailer");
const {EmailVerfication} = require("../../templates/EmailVerfication")


const SignUpController = async (req,res)=> {
    try {
        const {fullName,email,phoneNo,password,userType} = req.body
        console.log(fullName,email,phoneNo,password,userType)
        if(!fullName || !email || !phoneNo || !password  || !userType){
            res.json({
                message:"missing fields",
                status:false,
                data:null
            })
            return
        }
        console.log(password)
        const hashpass = await bcrypt.hash(password, 5);
        const objToSend = {
          full_name: fullName,
          email,
          phone_no: phoneNo,
          password: hashpass,
          user_type: userType

        };
    
        const emailExist = await UserModel.findOne({ email });
        console.log(emailExist, "emailExist");
        if (emailExist) {
          res.json({
            status: false,
            message: "this email address has been already exists Please try again",
            data: null,
          });
          return;
        }

        // const OTPCODE = Math.floor(100000 + Math.random() * 900000);

        // const transporter = nodemailer.createTransport({
        //   service: "gmail",
        //   port: 587,
        //   secure: true,
        //   auth: {
        //     user: process.env.USER,
        //     pass: process.env.PASS,
        //   },
        // });
    
        // const emailData = await transporter.sendMail({
        //   from: "eb20103087.minhajwahid@gmail.com",
        //   to: email,
        //   subject: "Email Verfication",
        //   text: "my name is minhaj",
        // });
        // console.log(emailData)

        

        const saveData = await UserModel.create(objToSend)


        res.json({
            message:"successfully signup",
            status:true,
            data: saveData      
        })

    } catch (error) {
        res.json({
            message:error.message,
            status:false,
            data: null
        })
    }
}

module.exports = {
    SignUpController
}