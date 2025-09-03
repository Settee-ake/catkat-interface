import { Smartphone, Shirt, Home, Wrench, Baby, Gamepad2 } from 'lucide-react';
import { useI18n } from '../i18n/index';

const Products = () => {
  const { t, get } = useI18n();
  const categories = get('products.categories') as Array<{ title: string; description: string }>;
  const productCategories = [
    {
      icon: <Smartphone className="text-blue-600 rounded-md bg-gray-200/70 p-1" size={36} />,
      title: categories[0]?.title,
      description: categories[0]?.description,
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Shirt className="text-blue-600 rounded-md bg-gray-200/70 p-1" size={36} />,
      title: categories[1]?.title,
      description: categories[1]?.description,
      image: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Home className="text-blue-600 rounded-md bg-gray-200/70 p-1" size={36} />,
      title: categories[2]?.title,
      description: categories[2]?.description,
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Wrench className="text-blue-600 rounded-md bg-gray-200/70 p-1" size={36} />,
      title: categories[3]?.title,
      description: categories[3]?.description,
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Baby className="text-blue-600 rounded-md bg-gray-200/70 p-1" size={36} />,
      title: categories[4]?.title,
      description: categories[4]?.description,
      image: "https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Gamepad2 className="text-blue-600 rounded-md bg-gray-200/70 p-1" size={36} />,
      title: categories[5]?.title,
      description: categories[5]?.description,
      image: "https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center space-x-2">
                  <span>{t('common.learnMore')}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105">
            {t('common.viewCatalog')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;