export { default } from "next-auth/middleware";

export const config = { matcher: ["/", "/Dashboard/:path*", "/Grades/:path*"] };
// export const config = { matcher: ["/"], };
