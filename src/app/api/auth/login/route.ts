import { loginSchema } from "@/validation/registerSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import vine, { errors } from "@vinejs/vine";
import { CustomErrorReporter } from "@/validation/CustomErrorReporter";
import prisma from "@/DB/db.config";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(loginSchema);
    const payload = await validator.validate(data);


    // * To check if the email is already registered

    const findUser = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });
    if (!findUser) {
      return NextResponse.json({ status: 400, errors:{
        email: "No User exits with this Email."
      } })
    }

    // To check password matches 
        const checkPassword = bcrypt.compareSync(payload.password, findUser.password!);
        if(checkPassword){

            return NextResponse.json({ status: 200, message: "User Logged in Successfully" });
        }
 return NextResponse.json({ status: 400, message: "Invalid Credintials" });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json({ status: 400, errors: error.messages });
    }
  }
}
