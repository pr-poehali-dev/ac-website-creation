import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const footerLinks = {
  catalog: [
    { label: "Кондиционеры", href: "#" },
    { label: "Сплит-системы", href: "#" },
    { label: "Мульти-сплит", href: "#" },
    { label: "Промышленные", href: "#" },
  ],
  services: [
    { label: "Установка", href: "#" },
    { label: "Обслуживание", href: "#" },
    { label: "Ремонт", href: "#" },
    { label: "Гарантия", href: "#" },
  ],
  contacts: [
    "+7 (495) 123-45-67",
    "info@climatech.ru",
    "Москва, ул. Примерная, 123",
  ],
  social: [
    { icon: "Facebook", href: "#" },
    { icon: "Twitter", href: "#" },
    { icon: "Instagram", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Snowflake" className="h-6 w-6" />
              <span className="text-xl font-bold">КлиматТехника</span>
            </div>
            <p className="text-gray-400">
              Профессиональные решения для климатического комфорта
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.catalog.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.contacts.map((contact, idx) => (
                <li key={idx}>{contact}</li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 КлиматТехника. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {footerLinks.social.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name={social.icon as any} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
