import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import GameList from "@/components/Home/GameList";
import app from "@/shared/FirebaseConfig";
import { getFirestore, doc, setDoc, getDoc, 
  collection, getDocs, query, where } from "firebase/firestore";

export default function Home() {
  const db=getFirestore(app);

  const [posts,setPosts]=useState([])
  useEffect(()=>{
    getPost();
  },[])

  const getPost=async()=>{
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
    
   setPosts(posts=>[...posts,doc.data()]);
});
  }

  return (
    <div className="px-5 sm:px-7 md:px-10 mt-9">
        <Hero/>
        <Search/>
        <GameList/>
    </div>
  )
}
