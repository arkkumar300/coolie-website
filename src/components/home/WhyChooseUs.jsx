import { BadgeCheck, Clock3, MapPin, ShieldCheck, Smartphone, Wallet } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const benefits = [
  { Icon: Clock3, title: 'A simpler process', desc: 'Follow a clear flow to submit work requirements and review booking details.' },
  { Icon: MapPin, title: 'Location-aware requests', desc: 'Share where the work is needed so your requirements are clear.' },
  { Icon: ShieldCheck, title: 'Trust-focused experience', desc: 'Review the worker, booking and verification information actually available in the app.' },
  { Icon: Wallet, title: 'Booking information in one place', desc: 'Keep relevant request and payment details easier to find.' },
  { Icon: Smartphone, title: 'Designed for mobile', desc: 'Access supported features through the Coolie mobile experience.' },
  { Icon: BadgeCheck, title: 'Clear updates', desc: 'Follow the booking status and updates provided by the platform.' },
];

export default function WhyChooseUs() {
  return <section id="why-coolie" className="bg-[#black] py-20 sm:py-28"><div className="container-width"><SectionHeading label="Why choose Coolie" title="Practical features. A clearer experience." description="Useful tools designed around the everyday steps involved in coordinating work."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(({ Icon, title, desc }, index) => <article key={title} className="rounded-2xl border border-white/10 bg-neutral-900 p-6 sm:p-7"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#26090b] text-white"><Icon size={23}/></span><span className="text-xs font-black tracking-widest text-neutral-300">0{index + 1}</span></div><h3 className="mt-6 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-neutral-400">{desc}</p></article>)}</div></div></section>;
}
