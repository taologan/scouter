import values from "../../(models)/Value";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const value = await values.find();
    // console.log(value);
    // console.log("FJIOWEFJOIWEFJIWOEFJIOWEFJWEIOJIOWFJWEIOFJWEIOF");
    return NextResponse.json({ value }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const theData = body.formData;

    await values.create(theData);
    // console.log(theData);
    return NextResponse.json({ message: "Data Created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
