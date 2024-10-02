import Image from "next/image";
import backgroundImage from "../../public/home/book-bg.png";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center items-center h-screen">
      <Image
        src={backgroundImage}
        alt="Background Image"
        fill
        className="object-cover blur-sm"
      />
      <div className="z-10  flex flex-col justify-center items-center text-center bg-purple-100 rounded-md p-3 lg:w-2/5 h-1/4  ">
        <div className="flex pb-5 mb-5 text-5xl text-purple-800">
          <SparklesIcon className="w-12 h-12 " />
          <p>Litloop</p>
        </div>
        <div className="bg-purple-700 text-white rounded-sm p-2 ">
          <Link href={"/store"}>Take me to the Store </Link>
        </div>
      </div>
    </div>
  );
}
