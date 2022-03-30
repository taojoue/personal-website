import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import avatar from "../public/avatar.jpg"
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/" passHref>Acceuil</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/career" passHref>Mon parcours</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/skills" passHref>Mes compétences</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/creations" passHref>Mes créations</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/passions" passHref>Mes passions</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)} >
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul onClick={() => setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={styles.menuItem}>
          <Link href="/career" passHref>Mon parcours</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/skills" passHref>Mes compétences</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/creations" passHref>Mes créations</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/passions" passHref>Mes passions</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar