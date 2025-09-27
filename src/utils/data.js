import TEMPLATE_ONE_IMG from '../assets/template-one.png'
import TEMPLATE_TWO_IMG from '../assets/template-two.png'
import TEMPLATE_THREE_IMG from '../assets/template-three.png'

export const resumeTemplates = [
  {
    id:'01',
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: 'themeOne',
    isPremium: false
  },
  {
    id:'02',
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: 'themeTwo',
    isPremium: true
  },
  {
    id:'03',
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: 'themeThree',
    isPremium: true
  }
]

export const themeColorPalette = {
  themeOne: [
    ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
  themeTwo: [
    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],
    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],
    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
  themeThree: [
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],
    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],
    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
  ],
  themeFour: [
    // Modern gradient-focused color palettes for TemplateFour
    ["#F8FAFC", "#E2E8F0", "#CBD5E1", "#6366F1", "#1E293B"],
    ["#FEFEFE", "#F1F5F9", "#E2E8F0", "#8B5CF6", "#0F172A"],
    ["#FCFCFD", "#F8FAFC", "#E1E7EF", "#3B82F6", "#334155"],
    ["#FAFAFB", "#F4F6F8", "#E5E7EB", "#10B981", "#374151"],
    ["#FEFCFB", "#FDF2F8", "#FCE7F3", "#EC4899", "#831843"],
    ["#FFFBEB", "#FEF3C7", "#FDE68A", "#F59E0B", "#92400E"],
    ["#F0FDF4", "#DCFCE7", "#BBF7D0", "#22C55E", "#166534"],
    ["#FEF2F2", "#FECACA", "#FCA5A5", "#EF4444", "#991B1B"],
    ["#F0F9FF", "#E0F2FE", "#BAE6FD", "#0EA5E9", "#0C4A6E"],
    ["#FEFCE8", "#FEF3C7", "#FDE047", "#EAB308", "#A16207"],
    ["#FAF5FF", "#F3E8FF", "#DDD6FE", "#A855F7", "#6B21A8"],
    ["#F9FAFB", "#F3F4F6", "#D1D5DB", "#6B7280", "#374151"],
  ],
  themeFive: [
    // Minimalist and clean color palettes for TemplateFive
    ["#FAFAFA", "#F5F5F5", "#E0E0E0", "#6366F1", "#374151"],
    ["#FDFDFD", "#F8F9FA", "#E9ECEF", "#495057", "#212529"],
    ["#FFFFFF", "#F7F8F9", "#E1E5E9", "#4A5568", "#2D3748"],
    ["#FEFEFE", "#F9FAFB", "#F3F4F6", "#6B7280", "#1F2937"],
    ["#FCFCFC", "#F6F7F8", "#E5E7EB", "#9CA3AF", "#111827"],
    ["#FBFBFB", "#F5F6F7", "#E2E4E7", "#64748B", "#0F172A"],
    ["#F9F9F9", "#F1F3F4", "#D1D5DB", "#475569", "#334155"],
    ["#F8F8F8", "#EEEFF1", "#CBD5E1", "#52525B", "#27272A"],
    ["#F7F7F7", "#EBECED", "#C4C7CB", "#71717A", "#18181B"],
    ["#F6F6F6", "#E8E9EA", "#BDC1C6", "#A1A1AA", "#09090B"],
    ["#F5F5F5", "#E5E6E7", "#B6BABF", "#D4D4D8", "#FAFAFA"],
    ["#F4F4F4", "#E2E3E4", "#AFB3B8", "#E4E4E7", "#F9FAFB"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    previewUrl: "",
    fullName: "John Doe",
    designation: "Senior Software Engineer",
    summary:
      "Passionate and results-driven developer with 6+ years of experience building full-stack web applications using modern technologies like React, Node.js, and MongoDB.",
  },
  contactInfo: {
    email: "john.doe@example.com",
    phone: "+1234567890",
    location:'#12 Anywhere, Any City, Any Country',
    linkedin: "https://linkedin.com/timetoprogram",
    github: "https://github.com/timetoprogram",
    website: "https://timetoprogram.com",
  },
  workExperience: [
    {
      company: "Tech Solutions",
      role: "Senior Frontend Engineer",
      startDate: "2022-03",
      endDate: "2025-04",
      description:
        "Leading the frontend team to build scalable enterprise applications using React, Tailwind CSS, and TypeScript.",
    },
    {
      company: "Coding Dev",
      role: "Full Stack Developer",
      startDate: "2020-01",
      endDate: "2022-02",
      description:
        "Worked on cross-functional teams developing full-stack solutions with React, Node.js, and MongoDB. Improved performance by 30% through code optimization.",
    },
    {
      company: "Startup Company",
      role: "Junior Web Developer",
      startDate: "2018-06",
      endDate: "2019-12",
      description:
        "Built responsive websites for startups and small businesses. Maintained legacy code and collaborated with designers to enhance UX/UI.",
    },
  ],
  education: [
    {
      degree: "M.Sc. Software Engineering",
      institution: "Tech University",
      startDate: "2021-08",
      endDate: "2023-06",
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "State University",
      startDate: "2017-08",
      endDate: "2021-05",
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      startDate: "2015-06",
      endDate: "2017-05",
    },
  ],
  skills: [
    { name: "JavaScript", progress: 95 },
    { name: "React", progress: 90 },
    { name: "Node.js", progress: 85 },
    { name: "TypeScript", progress: 80 },
    { name: "MongoDB", progress: 75 },
  ],
  projects: [
    {
      title: "Project Manager App",
      description:
        "A task and team management app built with MERN stack. Includes user roles, real-time notifications, and drag-and-drop task boards.",
      github: "https://github.com/timetoprogram/project-manager-app",
    },
    {
      title: "E-Commerce Platform",
      description:
        "An e-commerce site built with Next.js and Stripe integration. Supports cart, payments, order history, and admin dashboard.",
      liveDemo: "https://ecommerce-demo.timetoprogram.com",
    },
    {
      title: "Blog CMS",
      description:
        "A custom CMS for blogging using Express and React. Includes WYSIWYG editor, markdown support, and user management.",
      github: "https://github.com/timetoprogram/blog-cms",
      liveDemo: "https://blogcms.timetoprogram.dev",
    },
  ],
  certifications: [
    {
      title: "Full Stack Web Developer",
      issuer: "Udemy",
      year: "2023",
    },
    {
      title: "React Advanced Certification",
      issuer: "Coursera",
      year: "2022",
    },
  ],
  languages: [
    { name: "English", progress: 100 },
    { name: "Spanish", progress: 70 },
    { name: "French", progress: 40 },
  ],
  interests: ["Reading", "Open Source Contribution", "Hiking"],
};