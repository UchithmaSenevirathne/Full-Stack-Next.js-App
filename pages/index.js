import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import GameList from "@/components/Home/GameList";
import { getFirestore, doc, setDoc, getDoc, 
  collection, getDocs, query, where } from "firebase/firestore";
  
export default function Home() {
  const db=getFirestore(app);

  return (
    <div className="px-5 sm:px-7 md:px-10 mt-9">
        <Hero/>
        <Search/>
        <GameList/>
    </div>
  )
}
