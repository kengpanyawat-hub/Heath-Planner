
import { NextResponse } from "next/server";

export async function POST(req: Request){
  const form = await req.formData();
  const payload = Object.fromEntries(form.entries());
  // TODO: integrate email/send to CRM — สำหรับเดโมจะ log ออกเท่านั้น
  console.log("CONTACT_FORM", payload);
  return NextResponse.json({ ok: true, received: payload });
}
