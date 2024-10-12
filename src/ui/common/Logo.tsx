import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      src={"/logo.png"}
      alt={"Kyw Logo"}
      id={"logo"}
      width={40}
      height={38}
      loading={"lazy"}
    />
  );
}
