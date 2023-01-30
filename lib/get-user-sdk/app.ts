import { WhopSDK } from "@whop-sdk/core";
import { unstable_getServerSession } from "next-auth";
import { cache } from "react";
import { authOptions } from "../auth";

/**
 * gets the UserService from the WhopSDK from the session
 * @in Server Components in the app directory
 * @dev wrapped in React.cache so other helpers that rely
 * on it can be properly cached too
 */
const getSdk = cache(async () => {
  const session = await unstable_getServerSession(authOptions);
  if (!session) return {};
  return {
    sdk: new WhopSDK({ TOKEN: session.accessToken }).user,
    user: session.user,
  };
});

export default getSdk;
