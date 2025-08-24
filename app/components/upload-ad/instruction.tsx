const steps = [
  {
    title: 'بارگذاری تصویر',
    description: 'تصویر خود را کادر رو به رو بارگذاری کنید.',
  },
  {
    title: 'نسبت تصویر را انتخاب کنید',
    description: 'در منو باز شده نسبت تصویر را انتخاب کنید',
  },
  {
    title: 'برش تصویر',
    description: 'اگر نیاز است بخشی از تصویر را ببرید',
  },
  {
    title: 'تایید کارشناسان',
    description:
      'بعد ارسال تبلیغ کارشناسان adroam آن را بررسی کرده و طی 24 ساعت با شما تماس خواهند گرفت',
  },
];

export default function Instruction() {
  return (
      <div className="max-w-lg flex flex-col justify-start mx-auto lg:mx-0">
        <h2 className="text-2xl font-semibold mb-12">
          چجوری تبلیغم رو منتشر کنم؟
        </h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-row items-start gap-4">
              <div>
                <div className="w-6 h-6 rounded-full bg-primary text-center text-primary-foreground flex items-center justify-center text-sm font-medium mt-1 pt-1">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">{step.title}</h3>
                <p className="text-md text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
