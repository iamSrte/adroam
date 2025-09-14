import {
  CallToAction,
  ForDrivers,
  Hero,
  HowItWorks,
  Testimonials,
  WhyChooseUs,
} from '~/components/home';

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <ForDrivers />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
