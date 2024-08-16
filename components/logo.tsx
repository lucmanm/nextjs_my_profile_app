import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  showname?: boolean;
};

const Logo = (props: Props) => {
  return (
    <Link
      href="/"
      className="flex items-center gap-x-4 p-4 *:text-xl *:font-bold"
    >
      <Image
        src="https://res.cloudinary.com/dzdcszrob/image/upload/v1719872152/playground-images/logo/lb4vpkxpqsbbwi4prjtq.png"
        alt="Logo"
        width={48}
        height={48}
        priority
      />
      {props.showname && <span>Mahid Lucman</span>}
    </Link>
  );
};

export default Logo;
