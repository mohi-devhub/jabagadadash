import Link from "next/link"

export default function Navbar(){
    return(
        <div className="w-auto h-18 bg-[rgba(255,255,255,0.04)] backdrop-blur-lg flex items-center 
        justify-center fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full px-10 border border-[rgba(255,255,255,0.16)] z-10">
            <div className="flex text-[#efdb92] gap-10">
                <Link href="\">Home</Link>
                <Link href="\">Events</Link>
                <Link href="\">Rules</Link>
                <Link href="\">Gallery</Link>
                <Link href="\">About</Link>
            </div>
        </div>
    )
}