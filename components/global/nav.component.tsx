import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className="nav py-[20px] px-[80px] flex justify-between items-center">
      <div className="nav-column flex">
        <Image className='mr-12' src="/assets/main-logo.png" width={100} height={80} alt='logo' />
        <div className="nav-links flex gap-5">
          <Link href="#" className="flex w-[80px] justify-between items-center">
             Bags
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
          <Link href="#" className="flex w-[80px] justify-between items-center">
             Shoes
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
          <Link href="#">
             Lookbook
          </Link>
        </div>
      </div>
      <div className="nav-column flex gap-5">
        <Image src="/assets/magnifer-icon.png" alt='icon' width={20} height={20} />
        <Image src="/assets/profile-icon.png" alt='icon' width={20} height={20} />
        <Image src="/assets/cart-icon.png" alt='icon' width={20} height={20} />
      </div>
    </div>
  )
}

export default Nav
