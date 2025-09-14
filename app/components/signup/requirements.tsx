import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import DotPattern from '~/components/ui/dot-pattern';

const documentsList = [
  'عکس گواهینامه (پشت و رو)',
  'عکس کارت خودرو (پشت و رو)',
  'عکس بیمه‌نامه شخص ثالث یا کد یکتای بیمه',
];

export default function Requirements() {
  return (
    <section className="flex flex-col relative min-h-screen md:min-h-full overflow-hidden py-20 px-4">
      <DotPattern
        gap={15}
        dotSize={5}
        proximity={100}
        shockRadius={0}
        shockStrength={0}
        resistance={500}
        returnDuration={1.5}
        baseColor="#EBEEFA"
        activeColor="#2053FA"
        className="absolute inset-0 z-10"
      />
      <div className="flex flex-col md:flex-row md:gap-x-10 gap-y-25 relative z-20 text-center items-center justify-around">
        {/* intro */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            برانید. کسب درآمد کنید. کاوش کنید.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            رفت و آمد روزانه خود را به یک منبع درآمد منعطف و قابل اعتماد تبدیل
            کنید.
          </p>
          <Button
            asChild
            variant="default"
            className="p-8 mt-10 text-lg font-bold hover:bg-blue-700 shadow-lg transition-transform hover:scale-105"
          >
            <Link to="/signup">به شبکه رانندگان ما بپیوندید</Link>
          </Button>
        </div>

        {/* requirements */}
        <div className="flex flex-col gap-y-10 items-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            مدارک لازم برای ثبت‌نام
          </h2>
          <Card className="max-w-md md:max-w-xl text-right transform transition-transform duration-300 hover:-translate-y-2">
            <CardContent>
              <ul className="space-y-5 text-lg">
                {documentsList.map((document, index) => (
                  <li key={index} className="relative pr-6">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full ring-3 ring-primary/40"></span>
                    {document}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
