export default function SectionHeading({ label, title, description, light = false, align = 'center' }) {
  return (
    <div className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className={`eyebrow ${light ? '!text-[#ef111b]' : ''}`}>{label}</span>
      <h2 className={`mt-4 text-3xl font-black leading-tight tracking-[-.045em] sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-white'}`}>{title}</h2>
      {description && <p className={`mt-5 text-sm leading-7 sm:text-base ${light ? 'text-neutral-400' : 'text-neutral-400'}`}>{description}</p>}
    </div>
  );
}
