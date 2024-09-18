import { NextResponse } from "next/server";

// export const dynamic = 'force-dynamic'; // it will disbale cache , but we can do it in frontend

export const GET = async () => {
  return NextResponse.json({
    cuurentTime: new Date().toLocaleTimeString(),
  });
};
