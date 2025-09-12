import { Card, CardContent, CardHeader } from '../ui/card';

const documentsList = [
  'عکس گواهینامه (پشت و رو)',
  'عکس کارت خودرو (پشت و رو)',
  'عکس بیمه‌نامه شخص ثالث یا کد یکتای بیمه',
];

export default function Requirements() {
  return (
    <section className="w-full">
      <div className="felx flex-col mx-auto text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          مدارک لازم برای ثبت‌نام
        </h2>
        <div className="flex items-center justify-center">
          <Card className="max-w-sm md:max-w-md transform transition-transform duration-300 hover:-translate-y-2 text-right mt-10">
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
