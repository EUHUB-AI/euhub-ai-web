'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
    const [show, setShow] = useState(false);
    const pathname = usePathname();
    const isSk = pathname?.startsWith('/sk');

    const content = {
        title: isSk ? 'Ceníme si vaše súkromie' : 'We value your privacy',
        text: isSk
            ? 'Používame súbory cookie na zlepšenie vášho zážitku z prehliadania, zobrazovanie personalizovaných reklám alebo obsahu a na analýzu našej návštevnosti. Kliknutím na "Prijať všetko" súhlasíte s používaním súborov cookie.'
            : 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
        linkText: isSk ? 'Zásady používania súborov cookie' : 'Cookie Policy',
        linkHref: isSk ? '/sk/cookie' : '/cookie',
        btnNecessary: isSk ? 'Iba nevyhnutné' : 'Necessary Only',
        btnAll: isSk ? 'Prijať všetko' : 'Accept All'
    };

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setShow(true);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem('cookie-consent', 'all');
        setShow(false);
    };

    const acceptNecessary = () => {
        localStorage.setItem('cookie-consent', 'necessary');
        setShow(false);
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:flex items-center justify-between gap-8">
                        <div className="flex-1 space-y-2 mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold text-white">{content.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {content.text}
                                {' '}
                                <Link href={content.linkHref} className="text-blue-400 hover:text-blue-300 underline">{content.linkText}</Link>.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                            <button
                                onClick={acceptNecessary}
                                className="px-6 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm font-medium"
                            >
                                {content.btnNecessary}
                            </button>
                            <button
                                onClick={acceptAll}
                                className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors text-sm font-medium shadow-lg shadow-blue-500/20"
                            >
                                {content.btnAll}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
