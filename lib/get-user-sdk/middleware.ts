import { WhopSDK } from "@whop-sdk/core/browser";
import { NextRequestWithAuth } from "next-auth/middleware";

/**
 * gets the UserService from the WhopSDK from the session
 * @in middleware
 */
const getSdk = (req: NextRequestWithAuth) => {
  const token = req.nextauth.token?.accessToken as string;
  if (!token) return {};
  return {
    sdk: new WhopSDK({ TOKEN: token }).user,
  };
};

export default getSdk;
