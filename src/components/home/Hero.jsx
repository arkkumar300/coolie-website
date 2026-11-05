import { ArrowDownRight, ArrowUpRight, ShieldCheck, Smartphone, BriefcaseBusiness } from 'lucide-react';
import DownloadButton from '../DownloadButton';

export default function Hero() {
  return (
    <section id="home" className="hero-banner relative isolate overflow-hidden border-b border-white/10 bg-black text-white">
      <div className="absolute inset-0 -z-20 bg-cover bg-[center_35%]" style={{ backgroundImage: "url('/images/coolie-hero.png')" }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/90 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-black/20" />
      <div className="container-width grid min-h-[650px] items-center py-20 sm:py-24 lg:min-h-[710px] lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-black/60 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-neutral-200 sm:text-xs"><i className="h-2 w-2 rounded-full bg-red-500"/> Everyday services, one platform <ArrowUpRight size={14} className="text-red-500"/></span>
          <h1 className="mt-8 text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[82px]">YOUR NEEDS.<br/>YOUR <span className="text-[#ef111b]">PEOPLE.</span><br/>ONE <span className="text-[#ef111b]">COOLIE.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-neutral-200 sm:text-lg">From railway coolies and construction workers to beauticians, electricians, cleaners and more — discover everyday services through one convenient platform.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><DownloadButton/><a href="#services" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-black/40 px-6 py-4 text-sm font-extrabold text-white transition hover:border-red-500 hover:bg-white/5">Explore Services <ArrowDownRight size={17}/></a></div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs font-bold text-neutral-200"><span className="inline-flex items-center gap-2"><BriefcaseBusiness size={17} className="text-red-500"/> Multiple service categories</span><span className="inline-flex items-center gap-2"><ShieldCheck size={17} className="text-red-500"/> Clear booking information</span><span className="inline-flex items-center gap-2"><Smartphone size={17} className="text-red-500"/> One mobile platform</span></div>
        </div>
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#ef111b]" />
    </section>
  );
}
