import connectDb from '@/app/lib/dbConnect';
import Contact from '@/models/Contact';

import mongoose from 'mongoose';

import { NextRequest, NextResponse } from 'next/server';

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
