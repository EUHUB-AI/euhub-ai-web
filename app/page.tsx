'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Zap, BarChart3, Database, Globe } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 bg-black/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="https://euhub-ai.com/logo_dark.png" alt="EuHub AI" className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#about" className="hover:text-white transition-colors">Expertise</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Partner With Us</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/sk" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">SK</Link>
            <Link href="/en" className="text-sm font-medium text-white">EN</Link>
            <Link href="#contact" className="hidden md:inline-flex px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center hero-gradient overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-blue-400 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Accepting New Enterprise Partners
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                Your Strategic AI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Implementation Partner</span> <br />
                in Central Europe.
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                We don't just write code. We engineer agentic AI systems that scale with your governance requirements. Secure. Compliant. Future-proof.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Start Strategic Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#services" className="px-8 py-4 glass-panel text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-black/50">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise-Grade AI Infrastructure</h2>
              <p className="text-gray-400 max-w-xl">Comprehensive solutions for modern business. From audit to full automation.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
                  title: "AI Readiness Audit",
                  desc: "Comprehensive analysis of your data infrastructure, governance, and AI potential. We identify risks before they become liabilities.",
                  badge: "ISO/IEC 42001 Aligned"
                },
                {
                  icon: <Zap className="w-8 h-8 text-purple-400" />,
                  title: "Pilot Implementation",
                  desc: "Rapid deployment of functional MVP agents. Test viability in 4 weeks with strict success metrics.",
                  badge: "4-Week Sprint"
                },
                {
                  icon: <Database className="w-8 h-8 text-indigo-400" />,
                  title: "Enterprise Transformation",
                  desc: "Full-scale integration of custom LLMs and RAG pipelines. Built for security, compliance (EU AI Act), and massive scale.",
                  badge: "Full Governance"
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl glass-panel hover:bg-white/5 transition-colors group"
                >
                  <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
                  <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                    {service.badge}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10 radial-gradient-center"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Intelligently?</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Don't let the competition outpace you. Get an audit of your infrastructure and find out where you are losing money to inefficiency.
                </p>

                <div className="space-y-6">
                  {[
                    "Free initial consultation",
                    "Detailed infrastructure roadmap",
                    "EU AI Act compliance check",
                    "ROI projection"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 glass-panel rounded-xl">
                  <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-gray-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Central European HQ</h4>
                      <p className="text-gray-400 text-sm">Inginers-Incubator S.R.O.</p>
                      <p className="text-gray-400 text-sm">97401 Horna 67, Banska Bystrica, Slovakia</p>
                      <a href="mailto:hello@euhub.sk" className="text-blue-400 text-sm hover:underline mt-2 block">hello@euhub.sk</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative glass-panel p-8 md:p-10 rounded-3xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-2">Get a Free Audit</h3>
                  <p className="text-gray-400 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <img src="https://euhub-ai.com/logo_dark.png" alt="EuHub AI" className="h-10 w-auto mb-4 mx-auto md:mx-0 opacity-80 overflow-hidden" />
              <p className="text-gray-500 text-sm">Bridging the gap between Western capital and <br />Central European engineering talent.</p>
            </div>

            <div className="flex gap-8 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>

            <div className="text-gray-600 text-sm">
              © 2025 EuHub AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
