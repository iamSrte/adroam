export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          محبوب کسب‌وکارها و رانندگان
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          ببینید شرکای ما در مورد تجربه خود با ادروم چه می گویند.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl text-right border">
            <p className="text-muted-foreground">
              "ادروم به ما کمک کرد تا به مخاطبان کاملاً جدیدی در محله‌هایی که
              قبلاً نمی‌توانستیم هدف قرار دهیم، دسترسی پیدا کنیم. مشتریان حضوری
              ما در ماه اول ۲۰٪ افزایش یافت!"
            </p>
            <div className="flex items-center mt-6">
              <img
                src="https://placehold.co/48x48/CFD8DC/374151?text=A"
                alt="Avatar"
                className="w-12 h-12 rounded-lg"
              />
              <div className="mr-4">
                <p className="font-semibold text-gray-800">پرهام مهرآبادی</p>
                <p className="text-gray-500">کافه زیرو</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-right border">
            <p className="text-muted-foreground">
              "این ساده‌ترین کار جانبی است که تا به حال داشته‌ام. فقط رانندگی
              عادی خودم را انجام می‌دهم و برای آن پول می‌گیرم. نصب سریع بود و
              تیم پشتیبانی فوق‌العاده است."
            </p>
            <div className="flex items-center mt-6">
              <img
                src="https://placehold.co/48x48/CFD8DC/374151?text=M"
                alt="Avatar"
                className="w-12 h-12 rounded-lg"
              />
              <div className="mr-4">
                <p className="font-semibold text-gray-800">حامد احمدی</p>
                <p className="text-gray-500">راننده ادروم</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
