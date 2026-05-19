import { Html, Head, Font, Preview, Heading, Row, Section, Text } from '@react-email/components';

interface verificationEmailProp {
    username: string;
    otp: string;
}

export function verificationEmail({ username, otp }: verificationEmailProp) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification Code</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
                <Text>
                    Here&apos;s your verification code : {otp}
                </Text>
                <Section>
                    <Row>
                        <Heading as="h2">Hello {username},</Heading>
                    </Row>
                    <Row>
                        <Text>
                            Thank you for regestering. Please use the following verification code to complete your registration:
                        </Text>
                    </Row>
                    <Row>
                        <Text>{otp}</Text>
                    </Row>
                    <Row>
                        <Text>
                            If you did not request this code , please ignore this email.
                        </Text>
                    </Row>
                    {/* <Row> */}
                        {/* Button */}
                    {/* </Row> */}
                </Section>
        </Html>
    )
}