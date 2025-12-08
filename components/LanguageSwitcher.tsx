'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Globe } from 'lucide-react';

const languages = [
    { code: 'en', label: 'EN', href: '/' },
    { code: 'sk', label: 'SK', href: '/sk' },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Determine current language based on pathname
    const currentLang = pathname?.startsWith('/sk') ? 'sk' : 'en';
    const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage.label}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-lg shadow-lg overflow-hidden z-50">
                    {languages.map((lang) => (
                        <Link
                            key={lang.code}
                            href={lang.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${lang.code === currentLang
                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                                }`}
                        >
                            {lang.label}
                            {lang.code === currentLang && (
                                <span className="ml-auto text-blue-600 dark:text-blue-400">✓</span>
                            )}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
