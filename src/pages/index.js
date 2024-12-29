import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {VideoCard} from "../components/VideoCard";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
       < VideoCard title={"How donk really plays CS2"}
       image = {"./donk.png"}
        thumbImage={"./thumb.png"}
        author={"KSHITIJ_CS2"}
        views={"100M"}
        timestamp={"10 days ago"}
       >
        </VideoCard>
    </div>
   
  )
}
