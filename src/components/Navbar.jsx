// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Lalan's Portfolio
        </Link>
      </div>
      <a href="" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;