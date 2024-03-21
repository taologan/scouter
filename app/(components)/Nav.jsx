import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/dataEntry/new">
          <p>New Data Entry</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
