import { Link } from 'react-router';
import { TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-right">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white">AdRoam</h3>
            <p className="mt-2">تبلیغاتی که همراه مخاطبانتان حرکت می کند.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider">
              دسترسی سریع
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="hover:text-white">
                  خانه
                </Link>
              </li>
              <li>
                <Link to="/ad-submission" className="hover:text-white">
                  تبلیغ کنید
                </Link>
              </li>
              <li>
                <Link to="/driver-signup" className="hover:text-white">
                  رانندگان
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white">
                  پشتیبانی
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider">
              شرایط و قوانین
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a className="hover:text-white">سیاست حفظ حریم خصوصی</a>
              </li>
              <li>
                <a className="hover:text-white">شرایط خدمات</a>
              </li>
              <li>
                <a className="hover:text-white">تماس با ما</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider">
              ارتباط با ما
            </h4>
            <div className="flex mt-4 gap-4 justify-start">
              <a className="text-gray-400 hover:text-white">
                <LinkedinIcon size={24} />
              </a>
              <a className="text-gray-400 hover:text-white">
                <TwitterIcon size={24} />
              </a>
              <a className="text-gray-400 hover:text-white">
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>تمام حقوق محفوظ است. AdRoam&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
