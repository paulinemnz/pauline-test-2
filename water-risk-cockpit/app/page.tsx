import { AlertTriangle, Droplets, ShieldCheck } from 'lucide-react';

const previewFacilities = [
  { name: 'Arkema — Jarrie', region: 'Isère', score: 82, level: 'Critical' },
  { name: 'Kem One — Fos-sur-Mer', region: 'Bouches-du-Rhône', score: 76, level: 'High' },
  { name: 'Solvay — Tavaux', region: 'Jura', score: 68, level: 'High' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071a25] text-[#edf8f5]">
      <header className="border-b border-white/10 px-5 py-4 lg:px-8">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10">
              <Droplets className="h-5 w-5 text-cyan-300" />
            </span>
            <div>
              <p className="font-semibold tracking-tight">AQUA / SIGNAL</p>
              <p className="text-xs text-slate-400">France industrial water-risk cockpit</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-sm text-slate-300 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Snapshot · 09 Sep 2026
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1500px] px-5 py-6 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">Portfolio overview</p>
            <h1 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              See where water stress becomes financial exposure.
            </h1>
          </div>
          <p className="max-w-lg text-sm leading-6 text-slate-400">
            Public hazard evidence and editable business assumptions, kept separate so every priority is explainable.
          </p>
        </div>

        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          {[
            { label: 'Facilities screened', value: '8', note: 'French chemical sector', icon: ShieldCheck },
            { label: 'High priority', value: '3', note: 'Score above 65', icon: AlertTriangle },
            { label: 'Scenario exposure', value: '€18.4M', note: 'Modeled, not predicted', icon: Droplets },
          ].map(({ label, value, note, icon: Icon }) => (
            <article key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <div className="mb-4 flex items-center justify-between text-slate-400">
                <span className="text-sm">{label}</span><Icon className="h-4 w-4" />
              </div>
              <p className="text-3xl font-semibold tracking-tight">{value}</p>
              <p className="mt-1 text-xs text-slate-500">{note}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.35fr_0.9fr]">
          <section className="relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0a2330] p-5">
            <div className="absolute inset-0 map-grid opacity-25" />
            <div className="relative z-10 flex items-start justify-between">
              <div><p className="text-sm font-medium">France exposure map</p><p className="mt-1 text-xs text-slate-500">EDO drought × WEI+ scarcity</p></div>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">All risk levels</span>
            </div>
            <div className="relative z-10 grid h-[400px] place-items-center">
              <div className="france-shape relative h-[340px] w-[300px] bg-cyan-300/[0.08] ring-1 ring-inset ring-cyan-200/20">
                {[
                  ['68%', '30%', 82], ['62%', '74%', 76], ['72%', '50%', 68], ['45%', '22%', 54], ['36%', '54%', 47], ['48%', '70%', 61],
                ].map(([left, top, score], index) => (
                  <span key={index} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: String(left), top: String(top) }}>
                    <span className={`block h-4 w-4 rounded-full border-[3px] border-[#0a2330] ${Number(score) > 70 ? 'bg-orange-400' : Number(score) > 60 ? 'bg-amber-300' : 'bg-cyan-300'} shadow-[0_0_0_6px_rgb(103_232_249/10%)]`} />
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5">
            <div className="mb-5 flex items-end justify-between">
              <div><p className="text-sm font-medium">Priority queue</p><p className="mt-1 text-xs text-slate-500">Highest diligence need first</p></div>
              <span className="text-xs text-cyan-300">View methodology</span>
            </div>
            <div className="space-y-3">
              {previewFacilities.map((facility, index) => (
                <article key={facility.name} className="rounded-2xl border border-white/10 bg-[#071a25]/70 p-4">
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-semibold text-slate-500">0{index + 1}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div><h2 className="font-medium">{facility.name}</h2><p className="mt-1 text-xs text-slate-500">{facility.region} · Chemical industry</p></div>
                        <div className="text-right"><p className="text-2xl font-semibold">{facility.score}</p><p className="text-[11px] uppercase tracking-wider text-orange-300">{facility.level}</p></div>
                      </div>
                      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-orange-400" style={{ width: `${facility.score}%` }} /></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
