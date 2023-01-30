import type { UserService } from "@whop-sdk/core/node/services/UserService";
import { cache } from "react";

/**
 * helper to check if a user owns a certain pass,
 * @returns the membership of the matched pass.
 */
const findPass = async (sdk: UserService, allowedPasses: string | string[]) => {
  if (typeof allowedPasses === "string") allowedPasses = [allowedPasses];
  const memberships = (await sdk.listUsersMemberships({ valid: true })).data;
  return (
    memberships?.find(
      (membership) =>
        membership.access_pass && allowedPasses.includes(membership.access_pass)
    ) || null
  );
};

export default findPass;
