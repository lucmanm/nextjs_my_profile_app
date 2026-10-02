import Image from "next/image";
import Link from "next/link";

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
        src="https://res.cloudinary.com/dzdcszrob/image/upload/v1790883256/my-logo/Asset_1_cpri2j.png"
        alt="Logo"
        width={48}
        height={48}
        priority
        className="w-full h-auto"
      />

      {props.showname && <span>Mahid Lucman</span>}
    </Link>
  );
};

export default Logo;
