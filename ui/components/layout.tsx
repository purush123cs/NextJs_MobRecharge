import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from "./header";

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}