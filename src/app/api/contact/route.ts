import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/lib/dbConnect';
import Contact from '@/models/Contact';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  try {
    await connectDb();
    await Contact.create({ name, email, message });
    return NextResponse.json({
      msg: ['hi'],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json({ msg: errorList, success: false });
    }
  }
}

export async function GET() {
  // TODO: refresh token으로 accessToken 재발급
  // const cookieStore = cookies();
  // const refreshToken = cookieStore.get('refreshToken') as RequestCookie;

  try {
    await connectDb();
    const data = await Contact.find();
    return NextResponse.json(
      {
        data,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    // if (error instanceof mongoose.Error.ValidationError) {
    //   const errorList = Object.values(error.errors).map((err) => err.message);
    //   return NextResponse.error().json();
    // }
    return NextResponse.error().json();
  }
}
