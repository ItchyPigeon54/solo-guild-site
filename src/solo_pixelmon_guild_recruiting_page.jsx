import React, { useEffect, useState } from 'react';

export default function SoloGuildRecruitingPage() {
  const perks = [
    {
      title: 'Elite Battlers',
      desc: 'Our trainers dominate tournaments and guild wars.',
      icon: '⚔️',
    },
    {
      title: 'Event Champions',
      desc: 'From winning normal events all the way to hour long events SOLO always shows up and wins big.',
      icon: '🏆',
    },
    {
      title: 'Strong Community',
      desc: 'Active members, helpful teammates, and a guild focused on teamwork and fun. We also do daily tier 9 guild quests.',
      icon: '🔥',
    },
  ];

  const quotes = [
    {
      name: '[PixelGod] ItchyPigeon54',
      text: 'what in the b10kamal prices',
    },
    {
      name: '[Helper] SylverAutumn',
      text: 'I dont find that funny.',
    },
    {
      name: '[Omega] DeathByHotcoco',
      text: 'id rather struggle',
    },
    {
      name: '[Master] iKrizzy',
      text: 'solo just full stall',
    },
    {
      name: '[PixelGod] ItchyPigeon53',
      text: 'bellibolt has SOOO much aura',
    },
    {
      name: '[Champion] elivile',
      text: "Don't need some child making it worse.",
    },
    {
      name: '[PixelGod] Dontphail',
      text: '32 btw',
    },
    {
      name: '[PixelGod] Twandhi',
      text: 'Bro can Solo team more',
    },
  ];

  const [leftQuote, setLeftQuote] = React.useState(quotes[0]);
  const [rightQuote, setRightQuote] = React.useState(quotes[1]);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        const pickLeft = quotes[Math.floor(Math.random() * quotes.length)];
        const pickRight = quotes[Math.floor(Math.random() * quotes.length)];

        setLeftQuote(pickLeft);
        setRightQuote(pickRight);
        setFade(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-purple-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.4),transparent_45%)]" />

      <section className="relative px-6 py-24 text-center max-w-7xl mx-auto">
        <div className={`absolute top-6 left-6 text-left text-xs md:text-sm text-white/70 italic transition-all duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <p>{leftQuote.name}</p>
          <p>» {leftQuote.text}</p>
        </div>

        <div className={`absolute top-6 right-6 text-right text-xs md:text-sm text-white/70 italic transition-all duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <p>{rightQuote.name}</p>
          <p>» {rightQuote.text}</p>
        </div>

        <div className="inline-block px-4 py-1 rounded-full border border-purple-500 bg-purple-500/10 text-purple-300 text-sm tracking-widest uppercase mb-6">
          Want To Join SOLO?
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
          SOLO
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-zinc-300 leading-relaxed mb-10">
          We are the best battlers, the strongest event grinders, and one of the most respected Pixelmon guilds on the server.
          If you want victories, rewards, and a competitive squad that never backs down — SOLO is your home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition-all text-lg font-bold shadow-2xl shadow-purple-500/30">
            Apply Now
          </button>

          <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all text-lg font-semibold">
            Join Our Discord
          </button>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <div className="text-5xl mb-6">{perk.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{perk.title}</h2>
              <p className="text-zinc-300 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-[2rem] overflow-hidden border border-purple-500/20 bg-gradient-to-r from-purple-900/40 to-black/40 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-10 items-center p-10 md:p-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Why Players Choose SOLO
              </h2>

              <div className="mb-8 rounded-2xl border border-purple-500/30 bg-purple-500/10 p-5 text-left">
                <p className="text-purple-300 font-bold mb-2">
                  SOLO is feared across the server:
                </p>
                <p className="text-white/80 italic text-sm md:text-base">
                  {leftQuote.name} » {leftQuote.text}
                </p>
              </div>

              <ul className="space-y-4 text-lg text-zinc-300">
                <li>✔ Consistent tournament wins</li>
                <li>✔ Organized raid and event teams</li>
                <li>✔ Competitive but chill atmosphere</li>
                <li>✔ Experienced PvP trainers</li>
                <li>✔ Daily active members and voice chats</li>
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-600 p-[2px] shadow-2xl shadow-purple-500/30">
                <div className="w-full h-full rounded-3xl bg-zinc-950 flex flex-col items-center justify-center text-center p-10">
                  <div className="text-7xl mb-6">👑</div>
                  <h3 className="text-3xl font-black mb-3">Top Tier Guild</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    SOLO isn’t just another guild — we dominate every season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-28">
        <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-purple-500/20 bg-white/5 backdrop-blur-xl p-12">
          <h2 className="text-5xl font-black mb-6">
            Ready To Join SOLO?
          </h2>

          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-10">
            Whether youre a battler, pokedex hunter, shiny hunter or even a fisher SOLO is the place for YOU. Were looking for active players who want to dominate PokeSage.
          </p>

          <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:scale-105 transition-all duration-300 text-xl font-black shadow-2xl shadow-purple-500/40">
            Become Part of SOLO
          </button>
        </div>
      </section>
    </div>
  );
}
