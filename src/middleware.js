import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const user = true;

export const middleware = (request) => {
  //   if (request.nextUrl.pathname.startsWith == "/about")
  //     return NextResponse.redirect(new URL("/about/history", request.url)); // redirects to a route
  //   if (request.nextUrl.pathname.startsWith == "/services") {
  //     return NextResponse.redirect(new URL("/contact", request.url)); // redirects to a route
  //   }
  // return NextResponse.rewrite(new URL("/about/history", request.url)) // shows the content of this route but will show the hit route

  const token = cookies(request).get('next-auth.session-token');
  console.log("token: ", token);
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/services", "/dashboard"],
};
