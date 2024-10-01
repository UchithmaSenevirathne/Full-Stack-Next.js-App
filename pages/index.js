import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import GameList from "@/components/Home/GameList";

export default function Home() {
  return (
    <div>
        <Hero/>
        <Search/>
        <GameList/>
    </div>
  )
}
