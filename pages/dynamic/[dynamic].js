import React from "react";
import { useRouter } from "next/router";

const Dynamic = () => {
  const { query } = useRouter();
  const { dynamic } = query;
  return <div>This page number is {dynamic}</div>;
};

export default Dynamic;
