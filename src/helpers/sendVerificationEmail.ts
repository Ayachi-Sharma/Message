import { resend } from '@/lib/resend'
import { verificationEmail } from '../../emails/verificationEmail'
import { ApiResponse } from '@/types/apiResponse'

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponse> {
    // This promise need a return statement 
    try {
        console.log("start the file");
        
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Messages | Verification code",
            react: verificationEmail({username, otp : verifyCode}),
        });
        console.log("mail sent");
        return { success: true, message: "Successful!!" };
    } catch (emailError) {
        console.log("Error ssending verification email", emailError);
        return { success: false, message: "Failed!!" };
    }

    // console.log("KEY:", JSON.stringify(process.env.RESEND_API_KEY));

//     const { data, error } = await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "Messages | Verification code",
//     react: verificationEmail({ username, otp: verifyCode }),
// });

// if (error) {
//     console.log("Error sending verification email", error);
//     return { success: false, message: "Failed!!" };
// }

// console.log("mail sent", data);
// return { success: true, message: "Successful!!" };
}