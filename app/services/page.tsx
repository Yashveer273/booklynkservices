import { 
  Code, 
  Smartphone,
  Users,
  Shield,    
  FileText,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from 'lucide-react'
import Link from "next/link";
import Image from 'next/image'
import Footer from "../components/Footer"; 

export default function Services() {
  const services = [
    {
      id: "01",
      icon: Code,
      title: 'Website Development',
      description:
        'From sleek business sites to powerful web apps, we build responsive, modern, and scalable websites tailored to your goals.',
      features: [
        'Customized strategy development',
        'Ongoing monitoring and support',
        'Sustainable & eye-catching UI/UX development',
      ],
      image: "/website.jpg",
    },
    {
      id: "02",
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Create high-performance iOS and Android apps with smooth UX/UI, scalable backend, and real-time updates.',
      features: [
        'Customized strategy development',
        'Ongoing monitoring and support',
        'App size controlling',
        'Smooth animated user-friendly UI/UX experience',
        'We implement philosophical aspects in development for our end users\' happiness',
      ],
      image: "/mobile app development.jpg",
    },
    {
      id: "03",
      icon: Users,
      title: 'Social Media Strategy',
      description:
        'Engage your audience like never before with our expertly crafted social media strategies. We tailor content to resonate with your followers and drive engagement.',
      features: [
        'Targeted content creation',
        'Audience engagement techniques',
        'Performance analytics and insights',
      ],
      image: "/Social Media Strategy.jpg",
    },
    {
      id: "04",
      icon: Shield,
      title: 'Reputation Management',
      description:
        'We understand the importance of maintaining a positive online image. Our reputation management services help you present your best self and build trust.',
      features: [
        'Customized strategy development',
        'Ongoing monitoring and support',
        'Proactive image enhancement',
      ],
      image: "/Reputation Management.jpg",
    },
    {
      id: "05",
      icon: FileText,
      title: 'Content Creation',
      description:
        'Crafting compelling content is essential for connecting with your audience. Our experienced team produces high-quality articles, blogs, and visuals tailored to your message.',
      features: [
        'Engaging blog posts',
        'Professional copywriting',
        'Custom visual assets',
      ],
      image: "/Content Creation.jpg",
    },
  ]

  return (
    <div className="bg-white py-20">
      <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-8">
            Our Tailored Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Customized digital solutions crafted for growth, visibility, and impact.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
            >
              {/* Image - Shows first on mobile, alternates on desktop */}
              <div className={`flex justify-center items-center order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="w-full max-w-[500px] sm:max-w-[600px] h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={350}
                    className="w-full h-full object-fill rounded-lg"
                  />
                </div>
              </div>

              {/* Content - Shows second on mobile, alternates on desktop */}
              <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                <span className="text-base sm:text-lg font-semibold text-gray-700">
                  {service.id}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm sm:text-base text-gray-700">
                      <span className="mr-2 text-black flex-shrink-0">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                
              </div>
            </div>
          ))}
        </div>

      </div>

<div>
  
</div>
 <div className="mb-20"></div>

      {/* ---------------- Footer Section ---------------- */}
 <Footer />

    </div>
  )
}