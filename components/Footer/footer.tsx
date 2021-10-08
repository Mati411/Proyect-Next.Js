import Link from 'next/link'
import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.logo}></div>
        <ul className={style.lista}>
          <li>
            <Link href="/about">
              <a style={{ color: '#fff' }}>About</a>
            </Link>
          </li>
          <li>Contacto</li>
          <li>
            <Link href="/api/avo">
              <a style={{ color: '#fff' }}>API</a>
            </Link>
          </li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
