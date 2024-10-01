import React from 'react'
import Image from 'next/image'
const USER_IMAGE='https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg'

function Header() {
  return (
    <div>
        <img src='./Images/logo.png'/>
        <div>
            <button>CREATE POST</button>
            <button>SIGN IN</button>
        </div>
        <Image src={USER_IMAGE} width={40} height={40}/>
    </div>
  )
}

export default Header