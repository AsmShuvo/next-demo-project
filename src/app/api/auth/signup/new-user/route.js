import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    console.log("this route called")
    const db = await connectDB();
    const userCollection = db.collection("users");
    const newUser = await request.json();
    const res = await userCollection.insertOne(newUser);
    console.log("response: ", res);
    return NextResponse.json({ message: "New user created" });
  } catch (error) {
    console.log("Error occured");
    return NextResponse.json({ message: "Something went wrong" });
  }
};
