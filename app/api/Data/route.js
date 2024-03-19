import Data from "../../(models)/info";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const theData = body.formData;

    await Data.create(theData);

    return NextResponse.json({ message: "Data Created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
