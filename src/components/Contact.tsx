import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useI18n } from '../i18n/index';

const Contact = () => {
  const { t, get } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    quantity: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
    const toEmail = import.meta.env.VITE_CONTACT_TO_EMAIL as string;

    if (!serviceId || !templateId || !publicKey || !toEmail) {
      console.error('EmailJS env vars are missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY, VITE_CONTACT_TO_EMAIL.');
      alert('Email service is not configured.');
      return;
    }

    setSending(true);
    try {
      const params = {
        to_email: toEmail,
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        product_category: formData.productCategory,
        quantity: formData.quantity,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, params, { publicKey });

      alert(t('contact.form.success'));
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productCategory: '',
        quantity: '',
        message: ''
      });
    } catch (err) {
      console.error('Email send failed:', err);
      alert('Failed to send. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: t('contact.info.office'),
      content: (get('contact.info.addressLines') as string[]).join('\n')
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: t('contact.info.phone'),
      content: (get('contact.info.phoneLines') as string[]).join('\n')
    },
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: t('contact.info.email'),
      content: (get('contact.info.emailLines') as string[]).join('\n')
    },
    {
      icon: <Clock className="text-blue-600" size={24} />,
      title: t('contact.info.hours'),
      content: (get('contact.info.hoursLines') as string[]).join('\n')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    {info.icon}
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                      <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">{t('contact.form.requestTitle')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                />
                <input
                  type="text"
                  name="company"
                  placeholder={t('contact.form.company')}
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('contact.form.phone')}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                >
                  <option value="">{t('contact.form.categoryPlaceholder')}</option>
                  {(get('contact.form.categories') as string[]).map((c) => (
                    <option key={c} value={c.toLowerCase()}>{c}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="quantity"
                  placeholder={t('contact.form.quantity')}
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                />
              </div>

              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
              ></textarea>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-blue-600 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:hover:bg-blue-400 transition-all transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                <span>{sending ? t('common.sending') ?? 'Sending…' : t('contact.form.submit')}</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;