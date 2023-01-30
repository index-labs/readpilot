import { WhopSDK } from "@whop-sdk/core";

const sdk = new WhopSDK({
  TOKEN: process.env.WHOP_BOT_TOKEN,
});

export default sdk;
