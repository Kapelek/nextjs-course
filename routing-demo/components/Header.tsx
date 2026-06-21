import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "lightblue",
        padding: "1rem",
      }}
    >
      <p>Header</p>
      <Link href="/">home</Link>
    </header>
  );
};

export default Header;
