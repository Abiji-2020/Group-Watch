import { registerSchema } from "@/validation/registerSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import vine, { errors } from "@vinejs/vine";
import { CustomErrorReporter } from "@/validation/CustomErrorReporter";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(registerSchema);
    const payload = await validator.validate(data);

    // * To hash the password

    const salt = bcrypt.genSaltSync(10);
    payload.password = bcrypt.hashSync(payload.password, salt);

    return NextResponse.json({ status: 200, payload });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json({ status: 400, errors: error.messages });
    }
  }
}
