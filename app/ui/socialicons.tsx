import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from '@/app/data';

export default function SocialIcons() {
    return (
        <>
            <div className="flex space-x-4 justify-center items-center">
                {socialLinks.map((link, index) => (
                    <a key={index}
                        className="text-gray-500 text-xl hover:text-gray-300 transition-all duration-500"
                        href={link.url}
                        aria-label={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={link.icon} />
                    </a>
                ))}
            </div>
        </>
    );
}
