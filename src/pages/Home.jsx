import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ForEveryone from '../components/home/ForEveryone';
import HowItWorks from '../components/home/HowItWorks';
import DownloadCTA from '../components/home/DownloadCTA';
import LegalLinks from '../components/home/LegalLinks';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <ForEveryone />
      <HowItWorks />
      <DownloadCTA />
      <LegalLinks />
    </main>
  );
}
