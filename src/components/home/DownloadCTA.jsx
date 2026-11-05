import { ArrowUpRight, Smartphone } from 'lucide-react';
import DownloadButton from '../DownloadButton';
export default function DownloadCTA() {
  return <section id="download" className="px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-24"><div className="container-width overflow-hidden rounded-[28px] bg-[#ef111b] px-6 py-12 sm:px-12 sm:py-16"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.18em]"><Smartphone size={15}/> The Coolie experience</span><h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">Ready to get started?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-neutral-100 sm:text-base">Explore the app and discover a simpler way to manage work requirements.</p></div><div><DownloadButton dark/><p className="mt-3 text-xs text-neutral-100">Official store URL must be configured before launch.</p></div></div></div></section>;
}
