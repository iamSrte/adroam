import {
  TargetIcon,
  EyeIcon,
  DollarSignIcon,
  TrendingUpIcon,
} from 'lucide-react';
import FeatureCard from './feature-card';
import MapIllustration from '~/assets/map-Illustration.png';

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              مزایا ادروم
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              مزایای تبلیغات پویا و در حال حرکت را کشف کنید.
            </p>
            <div className="mt-8 space-y-8">
              <FeatureCard
                icon={<EyeIcon className="w-6 h-6" />}
                title="دید بی‌نظیر"
              >
                تبلیغات شما در سراسر شهر حرکت می‌کنند و در مناطق پرتردد که
                بیلبوردهای ثابت نمی‌توانند به آن دسترسی داشته باشند، توجه را به
                خود جلب می‌کنند.
              </FeatureCard>
              <FeatureCard
                icon={<TargetIcon className="w-6 h-6" />}
                title="دسترسی هدفمند"
              >
                محله‌ها و مسیرهای خاص را مشخص کنید تا اطمینان حاصل شود که پیام
                شما با مخاطبان محلی مناسب ارتباط برقرار می‌کند.
              </FeatureCard>
              <FeatureCard
                icon={<DollarSignIcon className="w-6 h-6" />}
                title="مقرون به صرفه"
              >
                با کسری از هزینه روش‌های تبلیغاتی سنتی، به گستره دید و یادآوری
                بالاتری دست پیدا کنید.
              </FeatureCard>
              <FeatureCard
                icon={<TrendingUpIcon className="w-6 h-6" />}
                title="آمار لحظه‌ای"
              >
                عملکرد و دسترسی کمپین خود را با داشبورد بصری ما پیگیری کنید. (به
                زودی!)
              </FeatureCard>
            </div>
          </div>
          <div className="order-1 md:order-1">
            <img
              src={MapIllustration}
              alt="Illustration of a city map with routes highlighted"
              className="rounded-xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
