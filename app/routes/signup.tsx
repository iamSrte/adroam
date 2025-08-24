import Requirements from '~/components/signup/requirements';
import BenefitsSection from '~/components/signup/benefits-section';

export default function Signup() {
  return (
      <div className="m-4 mt-12 space-y-16">
          <Requirements />
          <BenefitsSection />
      </div>
  );
}
