import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

const features = [
  {
    icon: '🎁',
    title: 'انواع طرح‌های تشویقی',
    description:
      'با رانندگی در اسنپ از طرح‌های تشویقی متنوع، پاداش‌ها و جوایز دوره‌ای برخوردار شوید.',
  },
  {
    icon: '🪙',
    title: 'مدیریت درآمد',
    description:
      'با رانندگی در مسیرهای دلخواه و اوقات آزاد خود، درآمد بیشتری داشته باشید.',
  },
  {
    icon: '🕒',
    title: 'رئیس خودتان باشید',
    description:
      'در هر ساعت از شبانه‌روز و در هر مسیری که دوست دارید، پشت فرمان بنشینید و درآمدزایی کنید.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold md:text-4xl">مزایای اسنپ رانندگان</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          در اسنپ با هر وسیله نقلیه‌ای که دارید می‌توانید فعالیت کنید.
        </p>
        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-full max-w-sm transform transition-transform duration-300 hover:-translate-y-2 md:w-[45%] lg:w-1/3"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                  <span className="text-4xl">{feature.icon}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-md text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
