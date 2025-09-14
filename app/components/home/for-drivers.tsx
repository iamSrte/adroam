import { DollarSignIcon, ClockIcon, CarIcon, UsersIcon } from 'lucide-react';
import FeatureCard from './feature-card';
import { Button } from '~/components/ui/button';
import { Link } from 'react-router';

export default function ForDrivers() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="assets/happy-driver.png"
              alt="Illustration of a happy driver"
              className="rounded-xl shadow-xl mx-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              برانید. کسب درآمد کنید. کاوش کنید.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              رفت و آمد روزانه خود را به یک منبع درآمد منعطف و قابل اعتماد تبدیل
              کنید.
            </p>
            <div className="mt-8 space-y-8">
              <FeatureCard
                icon={<ClockIcon className="w-6 h-6" />}
                title="برنامه زمانی منعطف"
              >
                هر زمان و هر کجا که می خواهید رانندگی کنید. پلتفرم ما به طور
                یکپارچه با روال موجود شما سازگار است.
              </FeatureCard>
              <FeatureCard
                icon={<CarIcon className="w-6 h-6" />}
                title="نصب آسان"
              >
                ما نصب سریع، ساده و بدون آسیب پنل‌های تبلیغاتی را روی خودروی شما
                ارائه می‌دهیم.
              </FeatureCard>
              <FeatureCard
                icon={<DollarSignIcon className="w-6 h-6" />}
                title="درآمد پایدار"
              >
                به طور منظم برای مسافت‌هایی که طی می‌کنید پول دریافت کنید. هرچه
                بیشتر رانندگی کنید، بیشتر درآمد کسب می‌کنید.
              </FeatureCard>
              <FeatureCard
                icon={<UsersIcon className="w-6 h-6" />}
                title="به یک جامعه بپیوندید"
              >
                بخشی از شبکه رو به رشد رانندگانی شوید که در حال تغییر چشم‌انداز
                تبلیغات هستند.
              </FeatureCard>
            </div>
            <div className="mt-10">
              <Button
                asChild
                variant="default"
                className="px-8 py-8 font-bold text-lg hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg"
              >
                <Link to="/signup">به شبکه رانندگان ما بپیوندید</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
