import Link from "next/link";

export default function Navbar(){
    return (
        <div className="flex justify-between items-center p-4 bg-[#1D1E20]">
            <div className="text-lg font-bold">
                <Link href='./'>
                    新美のPortfolio
                </Link>
            </div>
        </div>
    );
}