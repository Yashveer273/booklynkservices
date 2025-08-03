
import {
    content,
    reputation,
    socialMedia,
    featureImg1,
    featureImg2,
    featureImg3,
    featureImg4,
    featureImg6,
    clientImg,
    footerImg,
    caweb,
    
    
} from "../assets";


export const SERVICES = [
  {
    id: '01',
    title: 'Website Development',
    description:
      'From sleek business sites to powerful web apps, we build responsive, modern, and scalable websites tailored to your goals.',
    points: [
      'Customized strategy development',
      'Ongoing monitoring and support',
      'Sustainable & eye catching UI/UX development  I',
    ],
    image: featureImg2,
  },
  
   {
    id: '02',
    title: 'Mobile App Development',
    description:
      'Create high-performance iOS and Android apps with smooth UX/UI, scalable backend, and real-time updates.',
    points: [
      'Customized strategy development',
      'Ongoing monitoring and support',
      'App size controlling',
      'Smooth animation amnimated user friendly UI/UX experience',
      'We impliment philosophical aspect in development for our end users heppiness '
    ],
    image: featureImg6,
  },
  {
    id: '03',
    title: 'Social Media Strategy',
    description:
      'Engage your audience like never before with our expertly crafted social media strategies. We tailor content to resonate with your followers and drive engagement.',
    points: [
      'Targeted content creation',
'Audience engagement techniques',
'Performance analytics and insights'
    ],
    image:reputation ,
  },
  {
    id: '04',
    title: 'Reputation Management',
    description:
    'We understand the importance of maintaining a positive online image. Our reputation management services are designed to help you present your best self and build trust.',
    points: [
      'Customized strategy development',
      'Ongoing monitoring and support',
      'Proactive image enhancement',
    ],
    image: content ,
  },
  {
    id: '05',
    title: 'Content Creation',
    description:
      'Crafting compelling content is essential for connecting with your audience. Our experienced team produces high-quality articles, blogs, and visual content tailored to your message.',
    points: [
      'Engaging blog posts',
      'Professional copywriting',
      'Custom visual assets',
    ],
    image:  socialMedia,
  },
];

export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Collegemitra : App",
    image: featureImg1,
    link:"https://play.google.com/store/apps/details?id=com.aaditya.collegemitra"
  },
  {
    id: 2,
    title: "Modernbazaar : App & Web App",
    image: featureImg2,
       link:"https://www.modernbazaar.online/"
  },
  {
    id: 3,
    title: "Havenhubinfra : WebSite",
    image: featureImg3,
     link:"https://www.havenhubinfra.com/"
  },
  {
    id: 4,
    title: "EZ Super App : App", 
    image: featureImg4,
 link:"https://play.google.com/store/apps/details?id=com.EZ_M_Three.TheEZStartUP"
  },
   {
    id: 5,
    title: "CA Website Plan", 
    image: caweb,
    link:"https://chartered.booklynkservices.com"
  },
];


export const Feedback = [
  {
    stars: 5,
    feedback:
      "Book Lynk Services transformed my online presence! My patient inquiries have skyrocketed, thanks to their incredible reputation management strategies.",
    client_image: clientImg,
    client_name: 'Dr. Kavya Sharma',
    client_designation: 'M.D. at Global Tech',
  },
  {
    stars: 5,
    feedback:
      "The social media campaign they created for my real estate business was a game changer. I'm seeing more engagement and leads than ever before!",
    client_image: clientImg,
    client_name: 'Ravi Verma',
    client_designation: 'Creative Director',
  },
  {
    stars: 5,
    feedback:
      "Their content strategy significantly improved my visibility online. I can't imagine growing my brand without them.",
    client_image: clientImg,
    client_name: 'Meera Choudhary',
    client_designation: 'Entrepreneur',
  },
  {
    stars: 4,
    feedback:
      "Very professional and results-driven. They helped optimize my online presence drastically.",
    client_image: clientImg,
    client_name: 'Sahil Verma',
    client_designation: 'Startup Founder',
  },
    {
    stars: 5,
    feedback:
      "Couldn’t be happier with the service! Quick, efficient, and personalized.",
    client_image: clientImg,
    client_name: 'Neha Joshi',
    client_designation: 'Fitness Coach',
  },
  {
    stars: 4,
    feedback:
      "Great experience overall. Support team was responsive and understood our needs perfectly.",
    client_image: clientImg,
    client_name: 'Varun Kapoor',
    client_designation: 'App Developer',
  },
   {
    stars: 5,
    feedback:
      "Simply put, they’re the best in the business! Their tailored approach and exceptional service made all the difference for my practice.",
    client_image: clientImg,
    client_name: 'Aman Singh',
    client_designation: 'YouTuber',
  },
  {
    stars: 5,
    feedback:
      "Incredible team and amazing support! I’ve seen real growth since working with them.",
    client_image: clientImg,
    client_name: 'Riya Mehra',
    client_designation: 'Digital Marketer',
  },
];


  // replace with your actual image path
export const FooterBgImg = footerImg;