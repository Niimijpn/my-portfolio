import { ImageError } from "next/dist/server/image-optimizer";
import Image from "next/image";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

export default function About() {
    return (
        <>
            <div className="p-4">
                <Typography variant="h1" className="py-2">
                    私について
                </Typography>

                <div className="mx-auto max-w-7xl px-6 lg:px-12 relative gap-x-14 overflow-hidden md:flex md:items-center">
                    <div className="mx-0 w-full max-w-2xl shrink-0 rounded-xl">
                        <div className="flex">
                            <div className="">
                                <Image src='/1000.png' width={50} height={50} alt='me' />
                            </div>
                            <div className="px-4"><Typography variant="h4"><strong>新美舜也</strong></Typography><Typography variant='caption' >フロントエンド</Typography></div>
                        </div>
                        <Typography variant="body1" className='my-8 mx-0 w-full max-w-2xl shrink-0 rounded-xl md:max-x-md lg:max-w-lg'>
                            愛知県在住の情報科所属の大学生です。<br />
                            Webフロントエンドに興味があります。TypeScript、React、 Next.jsを中心に開発を行っています。<br/>
                            Unityや画像処理技術を使ったゲームコンテンツの開発も行っています。<br />
                            普段は学友たちとゲーム開発をしています。好きな食べ物は豆腐です。<br />
                        </Typography>
                    </div>
                    <Image className="p-6 md:p-0" src='/sample.png' width={500} height={500} alt="sample" />
                </div>
            </div >

        </>
    );
}