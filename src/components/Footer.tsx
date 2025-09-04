import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { useI18n } from "../i18n/index";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, get } = useI18n();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/logo-avif.avif"
                alt="CatKat logo"
                className="h-8 w-8 mr-3"
              />
              <div className="text-gray-200 py-2 rounded-lg font-bold text-xl inline-block">
                CATKAT
              </div>
            </div>
            <p className="text-gray-400 text-xs mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("common.home")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("common.services")}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("common.products")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("common.about")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("common.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("common.contact")}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1" size={18} />
                <div>
                  {(get("contact.info.addressLines") as string[]).map(
                    (line, idx) => (
                      <p key={idx} className="text-gray-300 text-sm">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={18} />
                <div className="flex flex-col">
                  {(get("contact.info.phoneLines") as string[]).map((line) => (
                    <span key={line} className="text-gray-300 text-sm">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={18} />
                <div className="flex flex-col">
                  {(get("contact.info.emailLines") as string[]).map((line) => (
                    <span key={line} className="text-gray-300 text-sm">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t("footer.copyright")}{" "}
              <a
                href="https://catkat.co"
                className="underline hover:text-white"
              >
                catkat.co
              </a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.legal.privacy")}
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.legal.terms")}
              </Link>
              <Link
                to="/guidelines"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.legal.guidelines")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
