import { useEffect, useState } from "react";

const getPurchaseLink = (
  plan: string,
  redirect: string,
  location: URL | string
) => {
  const href = new URL(`https://whop.com/checkout/${plan}/`);
  const onSuccess = new URL(redirect, location);
  href.searchParams.set("onSuccess", onSuccess.href);
  return href;
};

export const usePurchaseLink = (plan: string, redirect?: string) => {
  const [purchaseLink, setPurchaseLink] = useState(
    `https://whop.com/checkout/${plan}/`
  );

  useEffect(() => {
    const fullLink = getPurchaseLink(
      plan,
      redirect || window.location.pathname,
      window.location.origin
    );
    if (purchaseLink !== fullLink.href) setPurchaseLink(fullLink.href);
  }, [purchaseLink, plan, redirect]);

  return purchaseLink;
};

export default getPurchaseLink;
