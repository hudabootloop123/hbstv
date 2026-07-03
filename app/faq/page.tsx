"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HelpCircle,
  ChevronDown,
  Tv,
  ListPlus,
  ShieldAlert,
  MessageCircle,
  Globe,
  BookOpen,
  Scale,
  Mail,
  Users,
} from "lucide-react";

import BackgroundScene from "../components/BackgroundScene";
import Header from "../components/Header";

const faqs = [
  {
    id: "faq-dmca",
    question: "Penafian DMCA dan Hak Cipta",
    answer:
      "Situs web ini murni merupakan pemutar IPTV. Kami tidak menghosting, menyediakan, mendistribusikan, atau menjual tautan IPTV, daftar putar, atau konten media apa pun. Pemutar ini hanya membaca dan memutar data dari file daftar putar M3U atau JSON yang disediakan oleh pengguna.",
    icon: Scale,
  },
  {
    id: "faq-community",
    question: "Apakah daftar putar dari Discord/Telegram berafiliasi dengan proyek ini?",
    answer:
      "Tidak. Pemutar IPTV ini adalah proyek sumber terbuka independen. Semua daftar putar yang dibagikan di saluran komunitas kami (Discord/Telegram) disediakan oleh pengguna dan sama sekali tidak ada hubungannya dengan proyek ini. Jika Anda memiliki masalah terkait fungsionalitas pemutar, silakan buat masalah di repositori GitHub kami dan kami akan menyelesaikannya.",
    icon: Users,
  },
  {
    id: "faq-1",
    question: "Apa itu IPTV dan bagaimana cara kerja pemutar ini?",
    answer:
      "IPTV (Internet Protocol Television) menyajikan konten televisi melalui internet, bukan melalui format terestrial, satelit, atau kabel tradisional. Pemutar ini adalah klien berbasis web yang memutar siaran langsung (seperti file HLS .m3u8) langsung di browser Anda. Anda dapat mengimpor daftar putar khusus Anda sendiri untuk mulai menonton.",
    icon: Tv,
  },
  {
    id: "faq-2",
    question: "Bagaimana cara memuat atau mengimpor daftar putar khusus?",
    answer:
      "Untuk mengimpor daftar putar khusus, klik tab 'Pengelola Daftar Putar' di bagian daftar saluran. Anda dapat menempelkan URL M3U publik (misalnya, dari GitHub) atau mengunggah file daftar putar lokal (.m3u, .m3u8, atau .json). Setelah diimpor, daftar putar akan disimpan dengan aman di cache browser Anda dan muncul di bilah sisi 'Daftar Putar Anda'.",
    icon: ListPlus,
  },
  {
    id: "faq-3",
    question: "Mengapa beberapa saluran gagal dimuat atau menampilkan 'Streaming Tidak Tersedia'?",
    answer:
      "Siaran langsung dapat terputus karena berbagai alasan: sumber siaran sementara kelebihan beban, penyiar mengubah URL, atau siaran memiliki pembatasan geografis (pemblokiran geografis). Jika siaran gagal dimuat, coba klik tombol 'Coba Sambungkan Kembali', atau beralih ke saluran lain.",
    icon: ShieldAlert,
  },
  {
    id: "faq-4",
    question: "Apakah saya perlu menginstal aplikasi atau ekstensi apa pun?",
    answer:
      "Tidak! Pemutar IPTV ini berjalan sepenuhnya di peramban web modern (Chrome, Safari, Edge, Firefox) pada perangkat seluler, tablet, dan komputer. Pemutar ini memiliki pemutar streaming HLS (.m3u8) dan DASH (.mpd) khusus bawaan, sehingga tidak diperlukan ekstensi atau instalasi aplikasi tambahan.",
    icon: Globe,
  },
  {
    id: "faq-5",
    question: "Apakah layanan ini legal?",
    answer:
      "Ya, pemutar web ini 100% legal untuk digunakan. Kami tidak menyimpan file streaming atau basis data media apa pun. Kami mendorong pengguna untuk hanya memuat tautan daftar putar yang mereka miliki hak legal untuk melakukan streaming.",
    icon: BookOpen,
  },
  {
    id: "faq-6",
    question: "Bagaimana cara saya menghubungi dukungan atau melaporkan bug?",
    answer:
      "Untuk pertanyaan, saran, atau dukungan teknis apa pun, silakan hubungi kami melalui Telegram atau Email. Anda juga dapat mengikuti repositori GitHub resmi kami (hudabootloop123) untuk pembaruan kode, laporan bug, dan fitur baru.",
    icon: MessageCircle,
  },
];

export default function FAQPage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden pb-16">
      <BackgroundScene />
      <div className="relative z-10">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
          {/* ─── Page Header ─── */}
          <div className="text-center max-w-3xl mx-auto space-y-5 mb-10 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 sm:border-white/5 backdrop-blur-sm"
            >
              <HelpCircle size={14} className="text-primary animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary">
                BANTUAN & BASIS PENGETAHUAN
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]"
            >
            <span className="gradient-text">Pertanyaan </span>
            yang Sering Diajukan 
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-400 font-medium max-w-xl mx-auto leading-relaxed"
            >
              Punya pertanyaan tentang daftar putar khusus, masalah streaming, atau kompatibilitas?
              Temukan jawaban cepat dan panduan di bawah
            </motion.p>
          </div>

          {/* ─── FAQ List (Accordion style with glassmorphism) ─── */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const IconComponent = faq.icon;
              const isOpen = activeFaq === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 sm:border-white/5 bg-white/[0.015] hover:bg-white/[0.04] hover:border-primary/30 backdrop-blur-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="p-2.5 rounded-xl border border-primary/20 bg-primary/10 text-primary flex-shrink-0"
                      >
                        <IconComponent size={18} strokeWidth={2} />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-white leading-tight">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-zinc-400 flex-shrink-0"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ─── Support Callout ─── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-6 rounded-2xl border border-white/10 sm:border-white/5 bg-white/[0.01] backdrop-blur-sm text-center max-w-xl mx-auto space-y-4"
          >
            <h3 className="text-base sm:text-lg font-bold">Masih ada pertanyaan?</h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">
              Jika Anda tidak menemukan jawaban di sini, jangan ragu untuk menghubungi dukungan langsung. Kami aktif di Telegram dan Email.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://t.me/anggapsajakenal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-white font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-primary/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <MessageCircle size={15} />
                <span>Contact via Telegram</span>
              </a>
              <a
                href="mailto:hudabootloop@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer border border-white/5"
              >
                <Mail size={15} />
                <span>Email Support</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
