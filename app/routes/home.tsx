export default function Home() {
  return (
    <div>
      <div className="flex flex-row justify-around">
        <span className="w-full p-4 bg-primary text-primary-foreground md:w-1/2">
          با AdRoam تبلیغات شما از بیلبوردهای ثابت فراتر می‌رود و روی خودروهای
          در حال حرکت در سطح شهر به چشم هزاران نفر می‌رسد .
        </span>
        <img
          src="assets/car-image.jpg"
          className="hidden md:block md:w-1/2"
          alt="Car"
        />
      </div>
    </div>
  );
}
