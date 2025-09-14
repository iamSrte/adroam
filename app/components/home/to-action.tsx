import { Link } from "react-router";
import { Button } from "../ui/button";

export default function CallToAction() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          آماده‌اید؟
        </h2>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          همین امروز به ادروم بپیوندید و برند خود را روی نقشه قرار دهید، یا
          خودروی خود را به یک ماشین پول‌سازی تبدیل کنید.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          variant="outline"
          className="px-8 py-8 font-bold text-lg text-primary hover:text-primary transition-transform hover:scale-105 shadow-lg"
        >
          <Link to="/ad-submission">شروع تبلیغات</Link>
        </Button>
        <Button
          asChild
          variant="default"
          className="px-8 py-8 font-bold text-lg bg-blue-700 hover:bg-blue-800 border transition-transform hover:scale-105 shadow-lg"
        >
          <Link to="/driver-signup">
            ثبت نام به عنوان راننده
          </Link>
        </Button>
        </div>
      </div>
    </section>
  );
}
