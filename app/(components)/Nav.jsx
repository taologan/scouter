import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <p>go back</p>
        </Link>
        <Link href="/dataEntry/new">
          <p>New Data entry</p>
        </Link>
      </div>
      {/* <div>
        <p className="text-default-text">placeholder</p>
      </div> */}
    </nav>
  );
};

export default Nav;
