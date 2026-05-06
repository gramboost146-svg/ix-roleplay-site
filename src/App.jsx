import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const menu = ["მთავარი", "დაწყება", "ფორუმი", "სოციალები"];

function DiscordIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.32 4.37A19.8 19.8 0 0 0 15.36 2.84a.07.07 0 0 0-.08.04c-.21.38-.45.88-.62 1.27a18.4 18.4 0 0 0-5.32 0c-.17-.4-.42-.9-.64-1.27a.08.08 0 0 0-.08-.04A19.74 19.74 0 0 0 3.68 4.37a.07.07 0 0 0-.03.03C.54 9.04-.31 13.56.11 18.03c0 .02.01.05.03.06a19.9 19.9 0 0 0 6.08 3.07.08.08 0 0 0 .09-.03c.47-.64.89-1.31 1.24-2.02a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.9-.91.08.08 0 0 1-.01-.13c.13-.1.26-.2.38-.3a.08.08 0 0 1 .08-.01c3.99 1.82 8.3 1.82 12.24 0a.08.08 0 0 1 .09.01c.12.1.25.2.38.3a.08.08 0 0 1-.01.13c-.6.35-1.23.65-1.9.91a.08.08 0 0 0-.04.11c.36.7.77 1.38 1.24 2.02a.08.08 0 0 0 .09.03 19.84 19.84 0 0 0 6.09-3.07.08.08 0 0 0 .03-.06c.5-5.17-.84-9.65-3.52-13.63a.06.06 0 0 0-.03-.03Z" />
    </svg>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black text-red-500">IX RolePlay</h1>
        <p className="mt-4 text-white/60">Project Ready</p>
      </div>
    </main>
  );
}
