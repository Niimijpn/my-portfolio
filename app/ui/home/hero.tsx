import Image from 'next/image';
import SocialIcons from '@/app/ui/socialicons';
import ScrollAnimation from '@/app/ui/scrollAnimation';

export default function Hero() {
    return (
        <div className='flex flex-col justify-center items-center py-8 h-[90vh]'>
            <Image src='/1000.png' className='w-48 h-48 rounded-full object-cover mb-4' width={200} height={200} alt="Niimi's icon" />
            <div className='mb-4 text-center my-4 w-[80%]'>
                <ScrollAnimation>
                    <h1 className='text-2xl font-semibold mb-4'>こんにちわ、 新美です 👋</h1>
                <p className=''>
                    愛知県在住の情報科所属の大学生です。Webフロントエンドに興味があります。普段は学友たちとゲーム開発をしています。好きな食べ物は豆腐です。
                </p>
                </ScrollAnimation>
            </div>
            <SocialIcons />
        </div>

    );
}