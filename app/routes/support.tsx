import { useState, useEffect, useRef } from 'react';
import {
  PhoneIcon,
  MailIcon,
  SendIcon,
  MapPinIcon,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import DotPattern from '~/components/ui/dot-pattern';
import { Button } from '~/components/ui/button';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<
    { id: number; text: string; sender: 'user' | 'support' }[]
  >([]);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: 'سلام! باعث خوشحالی ماست که با شما صحبت کنیم. چطور میتونم کمکتون کنم؟',
            sender: 'support',
          },
        ]);
      }, 500);
    }
  }, [isChatOpen]);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleStartChat = () => {
    setIsChatOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center p-4">
      <DotPattern
        className="absolute inset-0 z-10 bg-slate-"
        dotSize={5}
        gap={15}
        baseColor="#EBEEFA"
        activeColor="#2053FA"
        proximity={100}
        shockRadius={0}
        shockStrength={0}
        resistance={500}
        returnDuration={1.5}
      />
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl my-20 grid grid-cols-1 md:grid-cols-2 overflow-hidden z-20 border">
        {/* Right Side: Contact Information */}
        <div className="p-8 flex flex-col">
          <div>
            <div className="text-center md:text-right">
              <h1 className="text-3xl font-bold">🤙 تماس با ما</h1>
              <p className="text-muted-foreground mt-2">
                ما همیشه برای کمک به شما آماده‌ایم.
              </p>
            </div>
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <span className="flex flex-shrink-0 bg-blue-100 size-10 text-primary rounded-lg justify-center items-center">
                  <MapPinIcon className="text-primary size-6" />
                </span>
                <div>
                  <h3 className="font-semibold">آدرس</h3>
                  <p className="text-muted-foreground">
                    تهران، خیابان آزادی، پلاک ۱۲۳، واحد ۴
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex flex-shrink-0 bg-blue-100 size-10 text-primary rounded-lg justify-center items-center">
                  <PhoneIcon className="text-primary size-6" />
                </span>
                <div>
                  <h3 className="font-semibold">شماره تماس</h3>
                  <p className="text-muted-foreground" dir="ltr">
                    ۰۲۱ - ۱۲۳۴ ۵۶۷۸
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex flex-shrink-0 bg-blue-100 size-10 text-primary rounded-lg justify-center items-center">
                  <MailIcon className="text-primary size-6" />
                </span>
                <div>
                  <h3 className="font-semibold">ایمیل</h3>
                  <p className="text-muted-foreground">support@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex-grow flex flex-col">
            <div className="h-48 rounded-lg mb-8 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%A2%D8%B2%D8%A7%D8%AF%DB%8C&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              ></iframe>
            </div>
            <div className="mt-auto">
              <h3 className="font-semibold text-center md:text-right mb-4">
                ما را دنبال کنید
              </h3>
              <div className="flex justify-center md:justify-start gap-2">
                <a
                  aria-label="Twitter"
                  className="bg-gray-100 text-muted-foreground hover:bg-blue-100 hover:text-primary transition-colors p-2 rounded-lg"
                >
                  <Twitter className="size-6" />
                </a>
                <a
                  aria-label="Instagram"
                  className="bg-gray-100 text-muted-foreground hover:bg-blue-100 hover:text-primary transition-colors p-2 rounded-lg"
                >
                  <Instagram className="size-6" />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="bg-gray-100 text-muted-foreground hover:bg-blue-100 hover:text-primary transition-colors p-2 rounded-lg"
                >
                  <Linkedin className="size-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side: Chat/Interactive Area */}
        <div className="bg-slate-100 md:p-8 flex flex-col">
          {!isChatOpen ? (
            <div className="flex flex-col items-center justify-center text-center h-full p-8">
              <h2 className="text-2xl font-bold text-slate-800">
                به کمک فوری نیاز دارید؟
              </h2>
              <p className="text-muted-foreground my-4 max-w-sm">
                با تیم پشتیبانی ما به صورت آنلاین صحبت کنید تا پاسخ سوالات خود
                را سریع‌تر دریافت کنید.
              </p>
              <Button
                variant="default"
                className="w-full max-w-xs bg-primary px-8 py-8 font-bold text-lg  hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg"
                onClick={handleStartChat}
              >
                ارتباط با پشتیبانی آنلاین
              </Button>
            </div>
          ) : (
            <div className="flex flex-col h-[550px] md:h-full bg-white md:rounded-xl md:shadow-inner">
              {/* Chat Header */}
              <div className="p-4 border-y md:border-t-0 text-center">
                <h3 className="font-bold text-lg">پشتیبانی آنلاین</h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full ring-3 ring-green-500/40"></span>
                  <p className="text-sm text-muted-foreground">
                    ما آنلاین هستیم
                  </p>
                </div>
              </div>

              {/* Messages Area */}
              <div
                ref={chatAreaRef}
                className="flex-1 p-4 space-y-4 overflow-y-auto"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === 'support' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-xl ${
                        msg.sender === 'support'
                          ? 'bg-slate-200 text-slate-800 rounded-br-none'
                          : 'bg-primary text-white rounded-bl-none'
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="پیام خود را بنویسید..."
                    className="flex-1 w-full border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <button className="bg-primary text-white p-2 rounded-lg hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex-shrink-0">
                    <SendIcon className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
