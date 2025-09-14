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
      'بعد ارسال تبلیغ کارشناسان ادروم آن را بررسی کرده و طی 24 ساعت با شما تماس خواهند گرفت',
  },
];

export default function Instruction() {
  return (
    <div className="flex flex-col justify-start">
      <h2 className="text-2xl font-semibold">چجوری تبلیغم رو منتشر کنم؟</h2>
      <div className="flex flex-col gap-y-4 mt-14">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-row items-start gap-4">
            <div>
              <span className="flex flex-shrink-0 size-8 pt-1 bg-blue-100 text-primary rounded-lg justify-center items-center">
                {index + 1}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-medium">{step.title}</h3>
              <p className="text-md text-muted-foreground mt-1">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
