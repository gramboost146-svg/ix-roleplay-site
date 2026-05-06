import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const menu = ["მთავარი", "დაწყება", "ფორუმი", "სიახლეები", "პროექტი"];

function SocialCard({ icon, title, text, action, href }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#101010] text-white shadow-xl shadow-black/30">
      <div className="flex items-center justify-between gap-5 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/15 text-3xl ring-1 ring-red-500/20">{icon}</div>
          <div>
            <p className="text-sm text-white/45">{text}</p>
            <h3 className="text-2xl font-black">{title}</h3>
          </div>
        </div>
        <button
          onClick={() => href && window.open(href, "_blank")}
          className="rounded-2xl bg-red-600 px-6 py-3 font-black hover:bg-red-700"
        >
          {action}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);

  const goTo = (url) => {
    window.open(url, "_blank");
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const serverIp = "IP_MOGVIANEBIT";
  const discordUrl = "https://discord.gg/Upd7zRr4qm";
  const forumUrl = "https://forum-ix.site/";

  const news = useMemo(
    () => [
      {
        date: "მალე",
        title: "IX RolePlay-ის გახსნა",
        text: "სერვერი ემზადება ოფიციალური გაშვებისთვის.",
      },
      {
        date: "მალე",
        title: "სტარტ ბონუსი ახალ მოთამაშეებს",
        text: "ახალ მოთამაშეებს დახვდებათ საწყისი ბონუსი.",
      },
      {
        date: "მალე",
        title: "ფრაქციების განაცხადები",
        text: "განაცხადები ეტაპობრივად გაიხსნება.",
      },
    ],
    []
  );

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(serverIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_18%,rgba(220,38,38,0.26),transparent_26%),linear-gradient(180deg,#0d0d0d_0%,#050505_55%,#090000_100%)]" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#090909]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[18px] bg-gradient-to-br from-red-500 to-red-900">
              <span className="text-2xl font-black">IX</span>
            </div>
            <div className="leading-none">
              <p className="text-xl font-black tracking-tight">IX RolePlay</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.38em] text-red-200/45">GTA V RP</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {menu.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  if (index === 0) window.scrollTo({ top: 0, behavior: "smooth" });
                  if (index === 1) scrollToSection("#start");
                  if (index === 2) goTo(forumUrl);
                  if (index === 3) scrollToSection("#news");
                  if (index === 4) scrollToSection("#project");
                }}
                className="text-sm font-semibold text-white/55 transition hover:text-white"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => goTo(forumUrl)}
            className="rounded-[18px] bg-red-600 px-6 py-3 font-black hover:bg-red-700"
          >
            Forum
          </button>
        </div>
      </header>

      <section className="relative mx-auto min-h-screen max-w-7xl px-5 pb-24 pt-36">
        <div className="grid min-h-[78vh] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.45em] text-red-300/75">Scroll Down</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.055em] md:text-7xl lg:text-[86px]">
              აირჩიე შენი როლი და დაიწყე თამაში ახლავე
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/52">
              ქართული GTA V RP პროექტი.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => goTo(discordUrl)}
                className="h-16 rounded-[22px] bg-red-600 px-9 text-lg font-black hover:bg-red-700"
              >
                ▶ დაიწყე თამაში
              </button>

              <button
                onClick={() => goTo(forumUrl)}
                className="h-16 rounded-[22px] border border-white/10 bg-white/[0.055] px-9 text-lg font-black text-white hover:bg-white/10"
              >
                ☰ ფორუმი
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
            <div className="relative mx-auto flex h-[520px] max-w-[520px] items-center justify-center rounded-[48px] border border-red-500/20 bg-gradient-to-br from-[#1a0606] via-[#080808] to-[#180000]">
              <div className="text-center">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-[40px] bg-gradient-to-br from-red-500 to-red-950 text-6xl font-black">
                  IX
                </div>
                <h3 className="mt-8 text-4xl font-black">IX RolePlay</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="start" className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[34px] border border-white/10 bg-[#101010] p-8">
            <p className="text-sm text-white/35">სერვერი №1</p>

            <button
              onClick={copyIp}
              className="mt-4 w-full rounded-[20px] border border-red-500/20 bg-red-500/10 px-5 py-5 text-left"
            >
              <span className="block text-lg font-black text-white">{serverIp}</span>
              <span className="mt-1 block text-xs text-white/38">
                {copied ? "IP დაკოპირდა" : "დააჭირე დასაკოპირებლად"}
              </span>
            </button>
          </div>

          <div className="rounded-[34px] border border-red-500/20 bg-[#101010] p-8">
            <p className="text-sm uppercase tracking-[0.4em] text-red-200/70">Start Bonus</p>
            <h2 className="mt-5 text-4xl font-black">PROMO: IX</h2>
          </div>
        </div>
      </section>

      <section id="news" className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="mb-8 text-4xl font-black">ბოლო სიახლეები</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <div key={item.title} className="rounded-[30px] border border-white/10 bg-[#101010] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/35">{item.date}</p>
              <h3 className="mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-white/52">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="project" className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="mb-8 text-4xl font-black">შემოგვიერთდი</h2>

        <div className="grid gap-5 md:grid-cols-2">
          <SocialCard icon="☰" text="ოფიციალური ფორუმი" title="Forum" action="გადასვლა" href={forumUrl} />
          <SocialCard icon="💬" text="ოფიციალური არხი" title="Discord" action="შესვლა" href={discordUrl} />
        </div>
      </section>
    </main>
  );
}
