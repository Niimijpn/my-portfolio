import React from 'react';
import SocialIcons from '@/app/ui/socialicons';


export default function Footer() {
    return (
        <>
            <hr className="border-none bg-gray-400 h-px w-4/5 mx-auto" />
            <div className="flex justify-around items-center py-8 bg-[#1D1E20]">
                <p className="text-xs text-gray-500">
                    ©︎{new Date().getFullYear()} 新美のPortfolio
                </p>
                <SocialIcons/>
            </div>

        </>
    );
}