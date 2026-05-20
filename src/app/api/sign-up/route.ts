// API in next js
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User"
import bcrypt from "bcryptjs"

import {sendVerificationEmail} from "@/helpers/sendVerificationEmail"
import { success } from "zod";

export async function POST(request:Request) {
    await dbConnect()

    try {
        const {username, email, password} = await request.json();

        const existingUserVerifiedByUsername = await UserModel.findOne({
            username,
            isVerified: true,
        }) 

        if (existingUserVerifiedByUsername) {
            return Response.json({
                success: false,
                message: "Username already taken!"
            },{
                status:409
            })
        }

        const existingUserByEmail = await UserModel.findOne({email});

        if (condition) {
            
        }
    } catch (error) {
        console.log("Error in regestration of user");
        return Response.json(
            {
                success:false,
                status: 500,
                message: "Error in regestring user"
            }
            // Trial 
            // ,
            // {
            //     status: 500
            // }
        )
        
    }
}