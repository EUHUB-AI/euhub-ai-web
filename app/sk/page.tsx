'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Zap, BarChart3, Database, Globe, FileText } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function HomeSK() {
    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        alert("Modál pre Lead Magnet bude implementovaný");
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 glass-panel border-b border-gray-200 dark:border-white/5 bg-white/80 dark:bg-black/50">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/sk" className="flex items-center gap-2">
                        <img src="/logo_dark.png" alt="EuHub AI" className="h-8 w-auto dark:block hidden" />
                        <img src="/logo_light.png" alt="EuHub AI" className="h-8 w-auto dark:hidden block" />
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-black dark:text-gray-300">
                        <Link href="#services" className="hover:text-blue-600 dark:hover:text-white transition-colors">Služby</Link>
                        <Link href="#contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">Kontakt</Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <LanguageSwitcher />
                        <Link href="#contact" className="hidden md:inline-flex px-4 py-2 bg-blue-600 dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-blue-700 dark:hover:bg-gray-200 transition-colors">
                            Začať
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center hero-gradient overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:brightness-100 dark:contrast-150 brightness-50 contrast-100 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832')] bg-cover bg-center opacity-10 dark:opacity-20"></div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-blue-600 dark:text-blue-400 mb-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                                </span>
                                Prijímame nových firemných partnerov
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                                <span className="text-black dark:text-white">Váš partner pre</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Implementáciu AI</span> <br />
                                <span className="text-black dark:text-white">v strednej Európe.</span>
                            </h1>

                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                Udržiavajte úplnú kontrolu nad svojimi rizikami. Náš audit identifikuje zraniteľnosti vo vašej infraštruktúre a potenciál AI ešte predtým, než sa stanú záväzkami.
                            </p>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center mt-8">
                                <Link href="#contact" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                    Získať Audit Zadarmo <ArrowRight className="w-4 h-4" />
                                </Link>
                                <button
                                    onClick={handleDownload}
                                    className="px-8 py-4 bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-900/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base opacity-80 hover:opacity-100"
                                >
                                    <FileText className="w-4 h-4" /> Stiahnuť Checklist Súladu
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-24 bg-gray-50/80 dark:bg-black/50">
                    <div className="container mx-auto px-6">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Enterprise-Grade AI Infraštruktúra</h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-xl">Komplexné riešenia pre moderné podnikanie. Od auditu až po plnú automatizáciu.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
                                    title: "Digitálny Audit",
                                    desc: "Zistite presne, kde vaša firma stráca peniaze. Identifikujeme procesy vhodné na automatizáciu a vypočítame návratnosť investície.",
                                    badge: "ISO/IEC 42001 Aligned"
                                },
                                {
                                    icon: <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
                                    title: "Pilotný Projekt",
                                    desc: "Funkčné riešenie do 4 týždňov. Žiadne dlhé čakanie. Rýchle nasadenie chatbota alebo procesného agenta.",
                                    badge: "4-týždňový Šprint"
                                },
                                {
                                    icon: <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
                                    title: "Komplexná Implementácia",
                                    desc: "Plná automatizácia firmy. Využite financovanie z Plánu obnovy a Výzvy 2025. My sa postaráme o technológiu aj grantovú pripravenosť.",
                                    badge: "Plná podpora"
                                }
                            ].map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:bg-white/10 transition-all group"
                                >
                                    <div className="mb-6 p-4 rounded-xl bg-gray-100 dark:bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
                                    <div className="inline-block px-3 py-1 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs text-gray-600 dark:text-gray-300">
                                        {service.badge}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section id="team" className="py-24 bg-white dark:bg-black">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Spoznajte našich expertov</h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Tím, ktorý stojí za vašou úspešnou implementáciou AI.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    name: "Michal Kováč",
                                    role: "Chief AI Solutions Architect",
                                    image: "/team-1.png",
                                    desc: "Špecialista na rozsiahle RAG systémy a správu multi-agentových riešení."
                                },
                                {
                                    name: "Zuzana Horváthová",
                                    role: "Vedúca AI Compliance",
                                    image: "/team-2.png",
                                    desc: "Právna expertka so zameraním na EU AI Act a etické nasadzovanie AI."
                                },
                                {
                                    name: "Jakub Molnár",
                                    role: "Infrastructure & Security Lead",
                                    image: "/team-3.png",
                                    desc: "Zameriava sa na privátne cloudové LLM riešenia a SOC2-kompatibilné systémy."
                                }
                            ].map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                                        <img src={member.image} alt={member.name} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{member.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact/CTA Section */}
                <section id="contact" className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-100/30 dark:bg-blue-900/10 radial-gradient-center"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Nechajte technológie pracovať za vás</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                    Nečakajte, kým vás predbehne konkurencia. Získajte audit vašej infraštruktúry a zistite, kde strácate peniaze.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        "Úvodná konzultácia zdarma",
                                        "Detailný plán infraštruktúry",
                                        "Kontrola súladu s EU AI Act",
                                        "Projekcia návratnosti (ROI)"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 p-6 glass-panel rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <Globe className="w-6 h-6 text-gray-500 dark:text-gray-400 mt-1" />
                                        <div>
                                            <h4 className="text-gray-900 dark:text-white font-semibold mb-1">Central European HQ</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">Inginers-Incubator S.R.O.</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">97401 Horna 67, Banska Bystrica, Slovakia</p>
                                            <a href="mailto:hello@euhub.sk" className="text-blue-600 dark:text-blue-400 text-sm hover:underline mt-2 block">hello@euhub.sk</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-10 dark:opacity-20"></div>
                                <div className="relative glass-panel p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/10">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Získajte Audit Zadarmo</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-8">Vyplňte formulár nižšie a náš tím vás bude kontaktovať do 24 hodín.</p>

                                    <div className="mb-8 text-center sm:text-left">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Pripravení rásť? Rezervujte si audit nižšie.<br />
                                            Stále hľadáte informácie? <a href="#" className="underline decoration-dashed hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Prečítajte si nášho sprievodcu vysoko rizikovými AI systémami podľa práva EÚ</a> namiesto toho.
                                        </p>
                                    </div>

                                    <ContactForm
                                        labelEmail="Emailová adresa"
                                        labelMessage="Správa"
                                        placeholderEmail="vás@email.com"
                                        placeholderMessage="Ako vám môžeme pomôcť?"
                                        btnSubmit="Odoslať"
                                        successMessage="Ďakujeme, že ste sa pripojili! Čoskoro sa vám ozveme."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-black">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <img src="/logo_dark.png" alt="EuHub AI" className="h-10 w-auto mb-4 mx-auto md:mx-0 opacity-80 overflow-hidden dark:block hidden" />
                            <img src="/logo_light.png" alt="EuHub AI" className="h-10 w-auto mb-4 mx-auto md:mx-0 opacity-80 overflow-hidden dark:hidden block" />
                            <p className="text-gray-500 text-sm">Váš partner pre digitálnu transformáciu <br />a automatizáciu v EU</p>
                        </div>

                        <div className="flex gap-8 text-sm text-gray-500">
                            <Link href="/sk/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Politika súkromia</Link>
                            <Link href="/sk/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">Obchodné podmienky</Link>
                            <Link href="/sk/cookie" className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookies</Link>
                        </div>

                        <div className="text-gray-500 text-sm">
                            © 2025 EuHub AI. Všetky práva vyhradené.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

