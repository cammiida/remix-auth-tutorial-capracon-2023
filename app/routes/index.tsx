import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export const loader = ({ request }: LoaderArgs) => {
  const user = authenticator.isAuthenticated(request);
  if (!user) {
    throw redirect("/login");
  }
  return redirect("/dashboard");
};
