import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import DotPattern from '~/components/ui/dot-pattern';
import LandingImage from '~/assets/landing-image.png';

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-transparent">
        <DotPattern
          className="absolute inset-0 z-10"
          dotSize={5}
          gap={15}
          baseColor="#EBEEFA"
          activeColor="#2053FA"
          proximity={100}
          shockRadius={0}
          shockStrength={0}
          resistance={500}
          returnDuration={1.5}
        />
        <div className="relative z-20 container mx-auto px-6 py-16 md:py-20 ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                برند شما، همه جا.
                <span className="block text-primary">
                  در حال حرکت با هزاران نفر ارتباط برقرار کنید.
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                ادروم تبلیغات محیطی را با تبدیل وسایل نقلیه روزمره به بیلبوردهای
                متحرک متحول می کند و پیام شما را مستقیماً به مخاطبان شما می
                رساند.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  variant="default"
                  className="px-8 py-8 font-bold text-lg  hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg"
                >
                  <Link to="/ad-submission">کسب و کار خود را تبلیغ کنید</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="px-8 py-8 font-bold text-lg text-primary hover:text-primary transition-transform hover:scale-105 shadow-lg"
                >
                  <Link to="/driver-signup">راننده شوید</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src={LandingImage}
                alt="Illustration of a car with an advertisement panel on its roof"
                className="rounded-xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
