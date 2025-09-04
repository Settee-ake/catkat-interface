import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Language = "en" | "th" | "zh";

type Translations = Record<string, any>;

interface I18nContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => string;
  get: (path: string) => any;
}

const translations: Record<Language, Translations> = {
  en: {
    brand: "CATKAT",
    common: {
      home: "Home",
      services: "Services",
      products: "Products",
      about: "About",
      contact: "Contact Us",
      learnMore: "Learn More",
      viewProducts: "View Products",
      requestQuote: "Request Quote",
      viewCatalog: "View Full Product Catalog",
      englishThai: "English | ไทย | 中文",
    },
    header: {
      phone: "+66 96 242 5155",
      email: "info@catkat.co",
    },
    hero: {
      titleA: "Premium",
      titleB: "Borderless Intertrade",
      titleC: "Solutions",
      subtitle:
        "Connecting partners with reliable bulk trading. Your trusted gateway for distribution excellence.",
      features: {
        shipping: "Reliable Shipping",
        network: "Global Network",
        pricing: "Bulk Pricing",
      },
      floating: {
        shippedLabel: "Containers Shipped",
        clientsLabel: "Happy Clients",
      },
    },
    stats: {
      items: [
        {
          number: "20,000+",
          label: "Products Imported",
          description: "Wide variety of goods",
        },
        {
          number: "300+",
          label: "Active Partners",
          description: "Distributors & Retailers",
        },
        {
          number: "30+",
          label: "Years Experience",
          description: "In international trade",
        },
        {
          number: "95%",
          label: "Client Satisfaction",
          description: "Proven track record",
        },
      ],
    },
    services: {
      title: "Comprehensive Trade Solutions",
      subtitle:
        "End-to-end import services tailored for reliable bulk purchasing solutions.",
      items: [
        {
          title: "Import & Logistics",
          description:
            "Complete import management with customs clearance and delivery.",
        },
        {
          title: "Quality Assurance",
          description:
            "Rigorous quality control ensuring standards and specifications.",
        },
        {
          title: "Fast Delivery",
          description:
            "Predictable timelines and real-time tracking for shipments.",
        },
        {
          title: "Bulk Pricing",
          description: "Competitive wholesale pricing and volume discounts.",
        },
        {
          title: "Documentation",
          description: "Permits and regulatory compliance handled end-to-end.",
        },
        {
          title: "24/7 Support",
          description:
            "Dedicated account management and round-the-clock support.",
        },
      ],
    },
    products: {
      title: "Product Categories",
      subtitle:
        "We import a diverse range of high-quality products from trusted manufacturers.",
      categories: [
        {
          title: "Electronics",
          description:
            "Mobile devices, computers, accessories, and consumer electronics",
        },
        {
          title: "Fashion & Apparel",
          description: "Clothing, shoes, bags, and accessories",
        },
        {
          title: "Home & Living",
          description: "Furniture, kitchenware, decor, and essentials",
        },
        {
          title: "Tools & Hardware",
          description:
            "Industrial tools, construction materials, hardware supplies",
        },
        {
          title: "Mother & Baby",
          description: "Baby products, toys, maternity items, care essentials",
        },
        {
          title: "Sports & Recreation",
          description:
            "Sporting goods, fitness equipment, recreational products",
        },
      ],
    },
    about: {
      title: "About CatKat",
      body: "CatKat crafts modern, performant interfaces and product experiences. We focus on speed, accessibility, and thoughtful design to elevate your brand and convert customers.",
      missionTitle: "Our Mission",
      missionBody:
        "Our mission is to provide high-quality products at affordable prices, ensuring that everyone has access to excellence without compromise",
      visionTitle: "Our Vision",
      visionBody:
        "To inspire a future where excellence and affordability go hand in hand",
      features: [
        "Direct partnerships",
        "Comprehensive quality control",
        "Fast and seemless",
        "Full documentation handling",
        "Reliable delivery timelines",
        "Dedicated account management",
      ],
    },
    testimonials: {
      title: "What Our Partners Say",
      subtitle:
        "Trusted by leading distributors and retailers for reliable service.",
      items: [
        {
          name: "Somchai Pattana",
          company: "Bangkok Electronics Distributors",
          content:
            "Consistent quality and competitive pricing have helped us grow significantly.",
          rating: 5,
          image:
            "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
        },
        {
          name: "Apinya Srisai",
          company: "Northern Thailand Retail Group",
          content:
            "They handle all the complexities of import so we can focus on customers.",
          rating: 5,
          image:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
        },
        {
          name: "Niran Chaiwong",
          company: "Central Fashion Distributors",
          content:
            "Excellent logistics coordination and bulk pricing improved our margins.",
          rating: 5,
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Contact us for pricing, catalogs, and personalized solutions.",
      info: {
        office: "Head Office",
        phone: "Phone",
        email: "Email",
        hours: "Business Hours",
        addressLines: [
          "9/99 Moo 6 Khlong Maduea, Krahum Baen, Samut Sakhon 74110, Thailand",
        ],
        phoneLines: ["+66 96 242 5155", "+66 95 841 9793"],
        emailLines: ["info@catkat.co", "sales@catkat.co"],
        hoursLines: ["Monday - Friday: 8:00 AM - 6:30 PM"],
      },
      form: {
        requestTitle: "Request a Quote",
        name: "Your Name*",
        company: "Company Name*",
        email: "Email Address*",
        phone: "Phone Number*",
        categoryPlaceholder: "Select Product Category*",
        quantity: "Expected Quantity*",
        message: "Tell us about your requirements...",
        submit: "Send Inquiry",
        success:
          "Thank you for your inquiry! We will contact you within 24 hours.",
        categories: [
          "Electronics",
          "Fashion & Apparel",
          "Home & Living",
          "Tools & Hardware",
          "Mother & Baby",
          "Sports & Recreation",
          "Other",
        ],
      },
    },
    footer: {
      description:
        'Cat Kat Inter Co., Ltd. ("CatKat") is a Thailand-registered import/export facilitator providing cross-border product sourcing, logistics coordination, and customs support between China and Thailand. The information on this website is for general informational purposes only and does not constitute legal, tax, or compliance advice. Service timelines, availability, and pricing are indicative and may change due to market conditions, carrier capacity, or regulatory requirements. All services are subject to written agreements and applicable Thai law, including export controls, sanctions, and safety regulations.',
      quickLinks: "Quick Links",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        guidelines: "Guidelines",
      },
      copyright: (year: number) =>
        `© ${year} Cat Kat Inter Co., Ltd. All rights reserved.`,
    },
  },
  th: {
    brand: "CATKAT",
    common: {
      home: "หน้าแรก",
      services: "บริการ",
      products: "สินค้า",
      about: "เกี่ยวกับเรา",
      contact: "ติดต่อเรา",
      learnMore: "ดูเพิ่มเติม",
      viewProducts: "ดูสินค้า",
      requestQuote: "ขอใบเสนอราคา",
      viewCatalog: "ดูแคตตาล็อกทั้งหมด",
      englishThai: "English | ไทย | 中文",
    },
    header: {
      phone: "+66 96 242 5155",
      email: "info@catkat.co",
    },
    hero: {
      titleA: "โซลูชัน",
      titleB: "การค้าระหว่างประเทศไร้พรมแดน",
      titleC: "ระดับพรีเมียม",
      subtitle:
        "เชื่อมต่อพันธมิตรด้วยบริการค้าส่งที่เชื่อถือได้ เกตเวย์คู่ค้าที่คุณไว้ใจได้",
      features: {
        shipping: "ขนส่งเชื่อถือได้",
        network: "เครือข่ายทั่วโลก",
        pricing: "ราคาแบบเหมาจำนวน",
      },
      floating: {
        shippedLabel: "จำนวนตู้คอนเทนเนอร์",
        clientsLabel: "ลูกค้ามีความสุข",
      },
    },
    stats: {
      items: [
        {
          number: "20,000+",
          label: "สินค้านำเข้า",
          description: "หลากหลายหมวดหมู่",
        },
        {
          number: "300+",
          label: "พันธมิตร",
          description: "ผู้จัดจำหน่ายและค้าปลีก",
        },
        {
          number: "30+",
          label: "ปีแห่งประสบการณ์",
          description: "ด้านการค้าระหว่างประเทศ",
        },
        {
          number: "95%",
          label: "ความพึงพอใจ",
          description: "พิสูจน์ด้วยผลงาน",
        },
      ],
    },
    services: {
      title: "โซลูชันการค้าครบวงจร",
      subtitle:
        "บริการนำเข้าตั้งแต่ต้นจนจบสำหรับการสั่งซื้อจำนวนมากอย่างมั่นใจ",
      items: [
        {
          title: "นำเข้าและโลจิสติกส์",
          description: "จัดการนำเข้าพร้อมพิธีศุลกากรและจัดส่งถึงที่",
        },
        {
          title: "ควบคุมคุณภาพ",
          description: "ตรวจสอบคุณภาพให้ได้ตามมาตรฐานและข้อกำหนด",
        },
        {
          title: "จัดส่งรวดเร็ว",
          description: "กำหนดเวลาชัดเจนและติดตามได้แบบเรียลไทม์",
        },
        {
          title: "ราคาเหมาจำนวน",
          description: "ราคาส่งแข่งขันพร้อมส่วนลดตามปริมาณ",
        },
        {
          title: "เอกสารครบถ้วน",
          description: "ดูแลเอกสาร ใบอนุญาต และกฎระเบียบทั้งหมด",
        },
        {
          title: "ช่วยเหลือ 24/7",
          description: "ผู้ดูแลบัญชีเฉพาะและซัพพอร์ตตลอดเวลา",
        },
      ],
    },
    products: {
      title: "หมวดหมู่สินค้า",
      subtitle: "เรานำเข้าสินค้าคุณภาพจากผู้ผลิตที่เชื่อถือได้หลากหลาย",
      categories: [
        {
          title: "อิเล็กทรอนิกส์",
          description: "มือถือ คอมพิวเตอร์ อุปกรณ์เสริม และเครื่องใช้ไฟฟ้า",
        },
        {
          title: "แฟชั่นและเครื่องแต่งกาย",
          description: "เสื้อผ้า รองเท้า กระเป๋า และเครื่องประดับ",
        },
        {
          title: "ของใช้ในบ้าน",
          description: "เฟอร์นิเจอร์ ของใช้ในครัว ตกแต่งบ้าน และของจำเป็น",
        },
        {
          title: "เครื่องมือและฮาร์ดแวร์",
          description: "เครื่องมืออุตสาหกรรม วัสดุก่อสร้าง และฮาร์ดแวร์",
        },
        {
          title: "แม่และเด็ก",
          description: "ของใช้เด็ก ของเล่น สินค้าแม่และเด็ก",
        },
        {
          title: "กีฬาและสันทนาการ",
          description: "อุปกรณ์กีฬา ฟิตเนส และสันทนาการ",
        },
      ],
    },
    about: {
      title: "เกี่ยวกับ CatKat",
      body: "CatKat ออกแบบประสบการณ์อินเทอร์เฟซที่ทันสมัยและมีประสิทธิภาพ มุ่งเน้นความเร็ว การเข้าถึง และการออกแบบที่พิถีพิถันเพื่อยกระดับแบรนด์ของคุณ",
      missionTitle: "พันธกิจของเรา",
      missionBody:
        "พันธกิจของเราคือส่งมอบสินค้าคุณภาพในราคาที่เข้าถึงได้ เพื่อให้ทุกคนเข้าถึงความเป็นเลิศโดยไม่ต้องประนีประนอม",
      visionTitle: "วิสัยทัศน์ของเรา",
      visionBody: "สร้างอนาคตที่ความเป็นเลิศและความคุ้มค่าเดินเคียงกัน",
      features: [
        "พาร์ทเนอร์โดยตรง",
        "ควบคุมคุณภาพครบวงจร",
        "การดำเนินงานที่รวดเร็วและไร้รอยต่อ",
        "จัดการเอกสารครบถ้วน",
        "ส่งมอบตามกำหนด",
        "ผู้ดูแลบัญชีเฉพาะ",
      ],
    },
    testimonials: {
      title: "เสียงจากพาร์ทเนอร์ของเรา",
      subtitle: "ได้รับความไว้วางใจจากผู้จัดจำหน่ายและค้าปลีกชั้นนำ",
      items: [
        {
          name: "สมชาย พัฒนา",
          company: "Bangkok Electronics Distributors",
          content:
            "คุณภาพสม่ำเสมอและราคาที่แข่งขันได้ช่วยให้ธุรกิจของเราเติบโตมาก",
          rating: 5,
          image:
            "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
        },
        {
          name: "อภิญญา ศรีใส",
          company: "Northern Thailand Retail Group",
          content:
            "พวกเขาดูแลขั้นตอนการนำเข้าที่ซับซ้อนทั้งหมด เราจึงโฟกัสลูกค้าได้เต็มที่",
          rating: 5,
          image:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
        },
        {
          name: "นิรันดร์ ไชยวงศ์",
          company: "Central Fashion Distributors",
          content:
            "การจัดการโลจิสติกส์ยอดเยี่ยมและราคาเหมาจำนวนช่วยเพิ่มมาร์จิ้นของเรา",
          rating: 5,
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
        },
      ],
    },
    contact: {
      title: "ติดต่อเรา",
      subtitle: "ติดต่อเราเพื่อขอราคา แคตตาล็อก และโซลูชันเฉพาะธุรกิจของคุณ",
      info: {
        office: "สำนักงานใหญ่",
        phone: "โทร",
        email: "อีเมล",
        hours: "เวลาทำการ",
        addressLines: [
          "9/99 หมู่ 6 คลองมะเดื่อ กระทุ่มแบน",
          "สมุทรสาคร 74110 ประเทศไทย",
        ],
        phoneLines: ["+66 96 242 5155", "+66 95 841 9793"],
        emailLines: ["info@catkat.co", "sales@catkat.co"],
        hoursLines: ["จันทร์ - ศุกร์: 8:00 - 18:30"],
      },
      form: {
        requestTitle: "ขอใบเสนอราคา",
        name: "ชื่อของคุณ*",
        company: "ชื่อบริษัท*",
        email: "อีเมล*",
        phone: "เบอร์โทร*",
        categoryPlaceholder: "เลือกหมวดหมู่สินค้า*",
        quantity: "จำนวนที่ต้องการ*",
        message: "บอกความต้องการของคุณ...",
        submit: "ส่งคำขอ",
        success: "ขอบคุณสำหรับคำร้อง! เราจะติดต่อคุณภายใน 24 ชั่วโมง",
        categories: [
          "อิเล็กทรอนิกส์",
          "แฟชั่นและเครื่องแต่งกาย",
          "ของใช้ในบ้าน",
          "เครื่องมือและฮาร์ดแวร์",
          "แม่และเด็ก",
          "กีฬาและสันทนาการ",
          "อื่น ๆ",
        ],
      },
    },
    footer: {
      description:
        'บริษัท แคท แคท อินเตอร์ จำกัด ("CatKat") เป็นนิติบุคคลที่จดทะเบียนในประเทศไทย ให้บริการจัดหาสินค้า การประสานงานโลจิสติกส์ และการสนับสนุนด้านพิธีการศุลกากรสำหรับการค้าข้ามพรมแดนระหว่างจีนและไทย ข้อมูลบนเว็บไซต์นี้จัดทำขึ้นเพื่อให้ข้อมูลทั่วไปเท่านั้น มิใช่คำแนะนำทางกฎหมาย ภาษี หรือการปฏิบัติตามกฎระเบียบ ระยะเวลา การให้บริการ และราคาอาจเปลี่ยนแปลงได้ตามสภาวะตลาด ความสามารถของผู้ให้บริการขนส่ง หรือข้อกำหนดทางกฎหมาย การให้บริการทั้งหมดอยู่ภายใต้ข้อตกลงเป็นลายลักษณ์อักษรและกฎหมายไทย รวมถึงข้อกำหนดด้านการควบคุมการส่งออก มาตรการคว่ำบาตร และข้อกำหนดด้านความปลอดภัย',
      quickLinks: "ลิงก์ด่วน",
      legal: {
        privacy: "นโยบายความเป็นส่วนตัว",
        terms: "ข้อกำหนดการให้บริการ",
        guidelines: "แนวทาง",
      },
      copyright: (year: number) =>
        `© ${year} Cat Kat Inter Co., Ltd. สงวนลิขสิทธิ์`,
    },
  },
  zh: {
    brand: "CATKAT",
    common: {
      home: "首页",
      services: "服务",
      products: "产品",
      about: "关于我们",
      contact: "联系我们",
      learnMore: "了解更多",
      viewProducts: "查看产品",
      requestQuote: "获取报价",
      viewCatalog: "查看全部目录",
      englishThai: "English | ไทย | 中文",
    },
    header: {
      phone: "+66 96 242 5155",
      email: "info@catkat.co",
    },
    hero: {
      titleA: "高端",
      titleB: "无界互贸",
      titleC: "解决方案",
      subtitle: "连接可靠的批发合作伙伴，为分销提供值得信赖的跨境通道。",
      features: {
        shipping: "可靠运输",
        network: "全球网络",
        pricing: "批量价格",
      },
      floating: {
        shippedLabel: "已装运集装箱",
        clientsLabel: "满意客户",
      },
    },
    stats: {
      items: [
        { number: "20,000+", label: "进口产品", description: "覆盖多类目" },
        {
          number: "300+",
          label: "活跃合作伙伴",
          description: "分销商与零售商",
        },
        { number: "30+", label: "行业经验", description: "国际贸易领域" },
        { number: "95%", label: "客户满意度", description: "口碑与数据验证" },
      ],
    },
    services: {
      title: "一站式贸易解决方案",
      subtitle: "端到端的进口服务，助力稳定的大宗采购。",
      items: [
        {
          title: "进口与物流",
          description: "全流程进口管理，清关与送达同步进行。",
        },
        { title: "质量保障", description: "严格质检，确保符合标准与要求。" },
        { title: "快速交付", description: "可预期的时效与实时跟踪。" },
        { title: "批量定价", description: "具竞争力的批发价与量大优惠。" },
        { title: "单证合规", description: "许可与合规文件全流程处理。" },
        { title: "7×24 支持", description: "专属客户经理与全天候服务。" },
      ],
    },
    products: {
      title: "产品品类",
      subtitle: "与可信制造商合作，覆盖多样高品质产品。",
      categories: [
        { title: "电子产品", description: "手机、电脑、配件及消费电子" },
        { title: "时尚服饰", description: "服装、鞋包与配饰" },
        { title: "家居生活", description: "家具、厨具、家居装饰与日用品" },
        { title: "工具五金", description: "工业工具、建材与五金耗材" },
        { title: "母婴用品", description: "婴童用品、玩具与母婴护理" },
        { title: "运动休闲", description: "运动器材、健身与户外产品" },
      ],
    },
    about: {
      title: "关于 CatKat",
      body: "CatKat 专注于打造高性能、可访问、注重细节的现代化界面与产品体验，帮助你的品牌脱颖而出并提升转化。",
      missionTitle: "我们的使命",
      missionBody:
        "我们的使命是以可负担的价格提供高品质产品，确保人人都能不妥协地获得卓越",
      visionTitle: "我们的愿景",
      visionBody: "启迪一个卓越与可负担并行的未来",
      features: [
        "直接合作伙伴网络",
        "完整质量管控",
        "快速无缝的运营",
        "全流程单证处理",
        "可靠的交付时效",
        "专属客户经理",
      ],
    },
    testimonials: {
      title: "合作伙伴的评价",
      subtitle: "深受分销商与零售商信赖的专业服务。",
      items: [
        {
          name: "Somchai Pattana",
          company: "曼谷电子分销商",
          content: "稳定的质量与有竞争力的价格，帮助我们显著增长。",
          rating: 5,
          image:
            "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
        },
        {
          name: "Apinya Srisai",
          company: "泰北零售集团",
          content: "他们处理进口的复杂流程，我们可专注于服务客户。",
          rating: 5,
          image:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
        },
        {
          name: "Niran Chaiwong",
          company: "中部时尚分销商",
          content: "出色的物流协调与批量定价，显著提升了我们的利润。",
          rating: 5,
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
        },
      ],
    },
    contact: {
      title: "联系我们",
      subtitle: "欢迎联系获取价格、目录与定制方案。",
      info: {
        office: "总部",
        phone: "电话",
        email: "邮箱",
        hours: "营业时间",
        addressLines: [
          "泰国龙仔厝府 甲他奔县 Khlong Maduea 9/99 Moo 6",
          "邮编 74110",
        ],
        phoneLines: ["+66 96 242 5155", "+66 95 841 9793"],
        emailLines: ["info@catkat.co", "sales@catkat.co"],
        hoursLines: ["周一至周五: 8:00 - 18:30"],
      },
      form: {
        requestTitle: "获取报价",
        name: "您的姓名*",
        company: "公司名称*",
        email: "邮箱地址*",
        phone: "联系电话*",
        categoryPlaceholder: "选择产品品类*",
        quantity: "预计数量*",
        message: "请描述您的需求...",
        submit: "发送询盘",
        success: "感谢您的咨询！我们将于24小时内与您联系。",
        categories: [
          "电子产品",
          "时尚服饰",
          "家居生活",
          "工具五金",
          "母婴用品",
          "运动休闲",
          "其他",
        ],
      },
    },
    footer: {
      description:
        "Cat Kat Inter Co., Ltd.（“CatKat”）在泰国注册，提供中泰跨境商品采购、物流协调与关务支持。本站信息仅供一般参考，不构成法律/税务/合规建议。服务时效、可用性与定价可能随市场、运力或监管要求变化。所有服务以书面协议及泰国法律为准，包括出口管制、制裁与安全法规。",
      quickLinks: "快速链接",
      legal: {
        privacy: "隐私政策",
        terms: "服务条款",
        guidelines: "指南",
      },
      copyright: (year: number) =>
        `© ${year} Cat Kat Inter Co., Ltd. 保留所有权利`,
    },
  },
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getByPath(obj: any, path: string): any {
  return path
    .split(".")
    .reduce(
      (acc: any, key: string) =>
        acc && acc[key] !== undefined ? acc[key] : undefined,
      obj
    );
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>(
    (localStorage.getItem("lang") as Language) || "en"
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
  }, []);

  const t = useCallback(
    (path: string): string => {
      const value = getByPath(translations[lang], path);
      if (typeof value === "function") {
        return value(new Date().getFullYear());
      }
      if (value === undefined) {
        const fallback = getByPath(translations.en, path);
        return typeof fallback === "string"
          ? fallback
          : String(fallback ?? path);
      }
      return typeof value === "string" ? value : String(value);
    },
    [lang]
  );

  const get = useCallback(
    (path: string): any => {
      const value = getByPath(translations[lang], path);
      if (typeof value === "function") {
        return value(new Date().getFullYear());
      }
      return value !== undefined ? value : getByPath(translations.en, path);
    },
    [lang]
  );

  const value = useMemo(
    () => ({ lang, setLang, t, get }),
    [lang, setLang, t, get]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useTranslate() {
  const { t } = useI18n();
  return t;
}
