export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/achievements/create", "/library/add"],
};
