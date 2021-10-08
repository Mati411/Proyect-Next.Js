import React from 'react'
import Link from 'next/link'
import style from './navbar.module.css'
import { Icon } from 'semantic-ui-react'

export default function Navbar() {
  return (
    <nav>
      <nav className={style.navbar}>
        <div className={style.menu}>
          <Link href="/">
            <a>
              <div className={style.logo}></div>
            </a>
          </Link>
          <div className={style.derecha}>
            <Link href="/carrito">
              <a style={{ color: '#fff' }}>
                <Icon name="cart" />
                Carrito
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </nav>
  )
}
