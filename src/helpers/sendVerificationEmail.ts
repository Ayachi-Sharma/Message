import { resend } from '@/lib/resend'
import { verificationEmail } from '../../emails/verificationEmail'
import { ApiResponse } from '@/types/apiResponse'

async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponse> {
    // This promise need a return statement 
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'email',
            subject: 'Messages | Verification code',
            react: verificationEmail({username, otp : verifyCode}),
        });
        return { success: true, message: "Successful!!" };
    } catch (emailError) {
        console.log("Error ssending verification email", emailError);
        return { success: false, message: "Failed!!" };
    }
}