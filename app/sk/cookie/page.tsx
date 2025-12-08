import React from 'react';

export default function CookiePageSK() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="p-8 md:p-12 glass-panel rounded-2xl prose prose-invert max-w-none">
                    <h1>Zásady používania súborov cookie pre euhub.sk</h1>

                    <h2>1. Čo sú súbory cookie?</h2>
                    <p>
                        Súbory cookie sú malé textové súbory, ktoré sa ukladajú do vášho zariadenia (počítač, tablet, smartfón), keď navštívite webovú stránku.
                        Sú široko používané na zefektívnenie fungovania webových stránok, ako aj na poskytovanie informácií vlastníkom stránky.
                    </p>

                    <h2>2. Ako používame súbory cookie</h2>
                    <p>
                        Naša webová stránka, euhub.sk, používa súbory cookie na to, aby sme vás odlíšili od ostatných používateľov, poskytli vám dobrý zážitok
                        pri prehliadaní a pomohli nám vylepšiť našu stránku. Používaním našej stránky súhlasíte s používaním nevyhnutne potrebných súborov cookie.
                        Pre všetky ostatné súbory cookie vyžadujeme váš výslovný súhlas.
                    </p>

                    <h2>3. Typy súborov cookie, ktoré používame</h2>

                    <h3>Nevyhnutne potrebné súbory cookie</h3>
                    <p>
                        Tieto súbory cookie sú nevyhnutné na to, aby ste sa mohli pohybovať po webovej stránke a používať jej funkcie. Nevyžadujú váš súhlas.<br />
                        <strong>Príklad:</strong> <code>sessionid</code> – Používa sa na udržanie vašej relácie počas prehliadania.
                    </p>

                    <h3>Výkonnostné a analytické súbory cookie</h3>
                    <p>
                        Tieto súbory cookie zhromažďujú anonymné informácie o tom, ako návštevníci používajú našu webovú stránku, napríklad ktoré stránky navštevujú najčastejšie.
                        To nám pomáha zlepšovať fungovanie našej webovej stránky. Tieto súbory cookie použijeme iba vtedy, ak nám dáte svoj súhlas.<br />
                        <strong>Príklad:</strong> <code>Google Analytics (_ga, _gid)</code> – Používajú sa na zhromažďovanie štatistických údajov o tom, ako návštevníci používajú stránku. Všetky údaje sú anonymizované.
                    </p>

                    <h3>Marketingové súbory cookie</h3>
                    <p>
                        Tieto súbory cookie sa používajú na sledovanie návštevníkov naprieč webovými stránkami. Zámerom je zobrazovať reklamy, ktoré sú relevantné a
                        pútavé pre jednotlivého používateľa. Tieto súbory cookie použijeme iba vtedy, ak nám dáte svoj súhlas.<br />
                        <strong>Príklad:</strong> <code>Meta (Facebook) Pixel (_fbp)</code> – Používa sa na doručovanie cielených reklám na platformách Meta po tom, čo ste navštívili našu stránku.
                    </p>

                    <h2>4. Vaše voľby a správa súborov cookie</h2>
                    <p>
                        Svoje preferencie týkajúce sa súborov cookie môžete kedykoľvek spravovať prostredníctvom nášho bannera na správu súhlasu s cookies.
                        Môžete tiež nastaviť svoj prehliadač tak, aby odmietal všetky alebo niektoré súbory cookie, alebo aby vás upozornil, keď webové stránky
                        nastavia alebo pristupujú k súborom cookie. Upozorňujeme, že ak zakážete alebo odmietnete nevyhnutne potrebné súbory cookie, niektoré
                        časti tejto webovej stránky sa môžu stať nedostupnými alebo nemusia správne fungovať.
                    </p>

                    <h2>5. Kontaktujte nás</h2>
                    <p>
                        Ak máte akékoľvek otázky týkajúce sa nášho používania súborov cookie, kontaktujte nás na adrese <a href="mailto:hello@ehub.sk" className="text-blue-400 hover:text-blue-300">hello@ehub.sk</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
