import getSdk from "@/lib/get-user-sdk/pages";
import { User } from "@whop-sdk/core";
import { GetServerSideProps } from "next";

export type UserProps = {
  user: User | null;
};

const getServerSideProps: GetServerSideProps<UserProps> = async ({
  req,
  res,
}) => {
  const { sdk } = await getSdk(req, res);
  const user = await sdk?.retrieveProfile({});
  return {
    props: {
      user: user || null,
    },
  };
};

export default getServerSideProps;
