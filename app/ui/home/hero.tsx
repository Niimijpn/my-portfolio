import Image from 'next/image';
import SocialIcons from '@/app/ui/socialicons';

export default function Hero() {
    return (
        <div className='flex flex-col justify-center items-center py-8'>
            <Image src='/1000.png' className='w-48 h-48 rounded-full object-cover mb-4' width={200} height={200} alt="Niimi's icon" />
            <div className='mb-4 text-center my-4 w-[80%]'>
                <h1>こんにちわ， 新美です 👋</h1>
                <p className=''>
                    愛知県在住の情報科所属の大学生です．Webフロントエンド志望です．普段は学友たちとゲーム開発をしています．好きな食べ物は豆腐です．
                </p>
                <SocialIcons />
            </div>
        </div>
    );
}