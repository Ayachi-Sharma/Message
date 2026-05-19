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