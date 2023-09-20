import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

import { cookies } from 'next/headers';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import connectDb from '@/app/lib/dbConnect';
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
      const errorList = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json({ msg: errorList, success: false });
    }
  }
}

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken') as RequestCookie;
  console.log('/contact, refreshToken: ', refreshToken);

  try {
    await connectDb();
    const data = await Contact.find();
    return NextResponse.json({
      data,
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json({ msg: errorList, success: false });
    }
  }
}
