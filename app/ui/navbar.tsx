import Link from "next/link";

export default function Navbar(){
    return (
        <div className="w-2/5 flex justify-between items-center p-4 bg-[#1D1E20]">
            <div className="text-lg font-bold">
                <Link href='./'>
                    新美のPortfolio
                </Link>
            </div>
            <div className="text-md font-medium">
                <Link href='/about'>
                    About
                </Link>
            </div>
            <div className="text-md font-medium">
                <Link href='/projects'>
                    Projects
                </Link>
            </div>
        </div>
    );
}