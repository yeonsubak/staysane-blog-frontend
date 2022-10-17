import StaysaneLogo from "../../resources/img/StaysaneLogo";
import Link from "next/link";

const TopNavBarDesktop = () => {
  return (
    <div className="flex flex-row">
      <Link href="/post">
        <a>
          <StaysaneLogo />
        </a>
      </Link>
      <ul className="ml-auto hidden flex-row items-center gap-8 font-medium md:flex">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/post">Blog</Link>
        </li>
        <li>
          <Link href="https://github.com/yeonsubak">Github</Link>
        </li>
      </ul>
      <div className="z-20 ml-auto block md:hidden"></div>
    </div>
  );
};

export default TopNavBarDesktop;
