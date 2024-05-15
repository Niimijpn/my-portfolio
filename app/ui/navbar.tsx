import { Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar(){
    return (
        <div className="w-4/5 flex justify-between items-center p-4 bg-[#1D1E20]">
            <Typography variant='h4' className="">
                <Link href='./'>
                    <strong>
                    新美のサイト
                    </strong>
                </Link>
            </Typography>
            <Typography variant='button' className="">
                <Link href='/about'>
                    私について
                </Link>
            </Typography>
            <Typography variant='button' className="">
                <Link href='/'>
                    プロジェクト
                </Link>
            </Typography>
        </div>
    );
}