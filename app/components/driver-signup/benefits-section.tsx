import { CoinsIcon, StarIcon, Clock4Icon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

const features = [
  {
    icon: <StarIcon size={32} />,
    title: 'انواع طرح‌های تشویقی',
    description:
      'با رانندگی در ادروم از طرح‌های تشویقی متنوع، پاداش‌ها و جوایز دوره‌ای برخوردار شوید.',
  },
  {
    icon: <CoinsIcon size={32} />,
    title: 'مدیریت درآمد',
    description:
      'با رانندگی در مسیرهای دلخواه و اوقات آزاد خود، درآمد بیشتری داشته باشید.',
  },
  {
    icon: <Clock4Icon size={32} />,
    title: 'رئیس خودتان باشید',
    description:
      'در هر ساعت از شبانه‌روز و در هر مسیری که دوست دارید، پشت فرمان بنشینید و درآمدزایی کنید.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-gray-50 text-center py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold">مزایای رانندگان ادروم</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        در ادروم با هر وسیله نقلیه‌ای که دارید می‌توانید فعالیت کنید.
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 mt-12 justify-center items-center">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="max-w-sm transform transition-transform duration-300 hover:-translate-y-2 "
          >
            <CardHeader className="flex flex-row items-center justify-center gap-4">
              <span className="flex p-4 rounded-lg bg-blue-100 text-primary items-center justify-center">
                {feature.icon}
              </span>
              <CardTitle className="text-xl font-bold">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-md text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
