import { UploadCloudIcon, TargetIcon, RocketIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          هوشمندانه‌تر تبلیغ کنید و به مخاطبان گسترده‌تری دست پیدا کنید.
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          رساندن پیام شما به مخاطبان هرگز به این سادگی نبوده است. برای شروع این
          مراحل ساده را دنبال کنید.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <Card className="w-full transform transition-transform duration-300 hover:-translate-y-2 ">
            <CardHeader className='gap-0'>
              <div className="flex flex-col">
                <span className="bg-blue-100 text-primary p-4 mb-6 rounded-lg flex items-center justify-center mx-auto">
                  <UploadCloudIcon size={32} />
                </span>
                <CardTitle className="text-xl font-bold">
                  ۱. تبلیغ خود را ثبت کنید
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-md text-muted-foreground">
                طرح‌های خلاقانه و جزئیات کمپین خود را به راحتی از طریق پلتفرم
                امن ما بارگذاری کنید.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full transform transition-transform duration-300 hover:-translate-y-2 ">
            <CardHeader className='gap-0'>
              <div className="flex flex-col">
                <span className="bg-blue-100 text-primary p-4 mb-6 rounded-lg flex items-center justify-center mx-auto">
                  <TargetIcon size={32} />
                </span>
                <CardTitle className="text-xl font-bold">
              ۲. کمپین خود را تعریف کنید
            </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-md text-muted-foreground">
              مناطق مورد نظر، بودجه و مدت زمان کمپین خود را برای به حداکثر
              رساندن تأثیر انتخاب کنید.
            </p>
            </CardContent>
          </Card>
          <Card className="w-full transform transition-transform duration-300 hover:-translate-y-2 ">
            <CardHeader className='gap-0'>
              <div className="flex flex-col">
                <span className="bg-blue-100 text-primary p-4 mb-6 rounded-lg flex items-center justify-center mx-auto">
                  <RocketIcon size={32} />
                </span>
                <CardTitle className="text-xl font-bold">
              ۳. کمپین را اجرا کنید!
            </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-md text-muted-foreground">
              تبلیغ شما در شبکه خودروهای ما به نمایش در می‌آید و روزانه توسط
              هزاران مشتری بالقوه دیده می‌شود.
            </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
