import { ArrowUpRight, BriefcaseBusiness, HardHat, Wrench, Zap, Sparkles, Paintbrush, Truck, CookingPot, Scissors, Bubbles, PackageCheck, TrainFront, ShieldCheck } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const services = [
  { n: '01', title: 'Railway Coolie', desc: 'Luggage carrying and porter assistance for train journeys.', Icon: TrainFront, tag: 'Travel' },
  { n: '02', title: 'Construction Workers', desc: 'Find support for construction, site work and material handling.', Icon: HardHat, tag: 'Skilled & general work' },
  { n: '03', title: 'Beautician at Home', desc: 'Discover beauty and personal-care services at your convenience.', Icon: Sparkles, tag: 'Beauty & wellness' },
  { n: '04', title: 'Electricians', desc: 'Connect with help for supported electrical repairs and installations.', Icon: Zap, tag: 'Home services' },
  { n: '05', title: 'Plumbers & Repairs', desc: 'Help with plumbing, fittings and everyday maintenance needs.', Icon: Wrench, tag: 'Home services' },
  { n: '06', title: 'Cleaning Services', desc: 'Explore assistance for home, office and deep-cleaning tasks.', Icon: Bubbles, tag: 'Cleaning' },
  { n: '07', title: 'Painters', desc: 'Find help for painting, touch-ups and property refresh projects.', Icon: Paintbrush, tag: 'Property care' },
  { n: '08', title: 'Packers & Movers', desc: 'Support for shifting, loading, unloading and moving belongings.', Icon: Truck, tag: 'Moving' },
  { n: '09', title: 'Cooking & Household Help', desc: 'Explore household assistance based on local service availability.', Icon: CookingPot, tag: 'Household' },
  { n: '10', title: 'Salon & Grooming', desc: 'Personal grooming services for your everyday routine.', Icon: Scissors, tag: 'Beauty & wellness' },
  { n: '11', title: 'Delivery & Errands', desc: 'Convenient help with supported pickup, delivery and errands.', Icon: PackageCheck, tag: 'On-demand help' },
  { n: '12', title: 'General Helpers', desc: 'Find assistance for other everyday tasks and work requirements.', Icon: BriefcaseBusiness, tag: 'And more' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-width">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl"><SectionHeading label="Services on Coolie" title={<>One platform. <span className="text-[#ef111b]">Many ways to get help.</span></>} description="From railway porter assistance to construction, beauty and home services, explore a growing range of services in one place." /></div>
          <a href="#how-it-works" className="mb-14 inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-[#ef111b]/60 px-5 py-3 text-sm font-extrabold transition hover:bg-[#ef111b]">Explore how it works <ArrowUpRight size={16}/></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ n, title, desc, Icon, tag }) => (
            <article key={n} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0d] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ef111b]/70 hover:bg-[#111112]">
              <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ef111b]/25 bg-[#1b090b] text-[#ff3038] transition group-hover:bg-[#ef111b] group-hover:text-white"><Icon size={23}/></span><span className="text-xs font-bold tracking-widest text-neutral-600">{n}</span></div>
              <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#ff454c]">{tag}</p>
              <h3 className="mt-2 text-lg font-extrabold tracking-tight text-white">{title}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-neutral-400">{desc}</p>
              <a href="#download" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-neutral-200 transition group-hover:text-[#ff3038]">Explore service <ArrowUpRight size={15}/></a>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-[#0b0b0b] p-4 text-xs leading-6 text-neutral-400"><ShieldCheck className="mt-0.5 shrink-0 text-[#ef111b]" size={18}/><p>Services shown are examples of the Coolie marketplace. Actual categories, locations, booking options and provider availability depend on the live app. Only publish services that are currently supported.</p></div>
      </div>
    </section>
  );
}
