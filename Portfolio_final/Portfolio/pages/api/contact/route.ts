import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  // send email using Resend, Nodemailer, etc.
  console.log("Received contact data:", data);

  return NextResponse.json({ success: true });
}
