import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import { HiArrowLeftOnRectangle, HiOutlinePencilSquare } from "react-icons/hi2";
const USER_IMAGE =
  "https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg";

function Header() {
  const router=useRouter();
  const { data: session } = useSession();
  console.log("Session", session);
  return (
    <div className="flex justify-between p-3 border-b-[2px] border-[#ff3366]">
      <img src="./Images/logo.png" width={150} />
      <div className="flex gap-4">
        <button onClick={()=>router.push('/create-post')} className="bg-black p-2 px-3 text-white rounded-full">
          <span className="hidden sm:block ">CREATE POST</span>
          <HiOutlinePencilSquare className="sm:hidden text-[20px]" />
        </button>
        {!session ? (
          <button
            className="bg-white text-gray-500 p-2 px-3 border-[1px] rounded-full"
            onClick={() => signIn()}
          >
            <span className="hidden sm:block ">SIGN IN</span>
            <HiArrowLeftOnRectangle className="sm:hidden text-[20px]" />
          </button>
        ) : (
          <button
            className="bg-white text-gray-500 p-2 px-3 border-[1px] rounded-full"
            onClick={() => signOut()}
          >
            <span className="hidden sm:block ">SIGN OUT</span>
            <HiArrowLeftOnRectangle className="sm:hidden text-[20px]" />
          </button>
        )}
        <Image
          src={session?session?.user?.image:USER_IMAGE}
          width={45}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
