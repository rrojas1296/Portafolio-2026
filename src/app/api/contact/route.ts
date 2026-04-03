import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export const POST = async (req: NextRequest) => {
  try {
    const { firstName, lastName, subject, message, email, phone } =
      await req.json();
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["rrojas1296@gmail.com"],
      subject,
      react: EmailTemplate({
        firstName,
        lastName,
        subject,
        message,
        email,
        phone,
      }),
    });

    if (data.error) {
      return Response.json({ error: data.error }, { status: 500 });
    }
    return Response.json({
      message: "Email sent successfully",
      data: data.data,
    });
  } catch (error) {
    console.log({ error });
    return Response.json({ error }, { status: 500 });
  }
};
