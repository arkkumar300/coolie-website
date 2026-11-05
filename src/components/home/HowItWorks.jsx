import SectionHeading from '../SectionHeading';
const steps = [
  { n: '01', title: 'Choose your service', desc: 'Select an available service that matches the work you need.' },
  { n: '02', title: 'Share requirements', desc: 'Provide work details, location and preferred timing.' },
  { n: '03', title: 'Manage your booking', desc: 'Follow your booking and view status updates available in the app.' },
];
export default function HowItWorks() {
  return <section id="how-it-works" className="py-20 sm:py-24"><div className="container-width"><SectionHeading label="Simple by design" title="Three steps. A clearer process." description="A straightforward flow helps customers explain their needs and manage work requests."/><div className="grid gap-5 md:grid-cols-3">{steps.map((step) => <article key={step.n} className="rounded-2xl border border-white/10 p-7 transition hover:border-[#ef111b] sm:p-9"><span className="text-5xl font-black text-neutral-200">{step.n}</span><div className="mt-7 h-1 w-12 rounded-full bg-[#ef111b]"/><h3 className="mt-6 text-xl font-extrabold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-neutral-400">{step.desc}</p></article>)}</div></div></section>;
}
