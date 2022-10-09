import React from "react";
import styles from "../styles/header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.body}>
      <li>
        <Link href="/">
          <a>home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>about</a>
        </Link>
      </li>
      <li>
        <Link href="/dynamic">
          <a>home</a>
        </Link>
      </li>
    </div>
  );
};

export default Header;
