import {
  RiBriefcase4Fill,
  RiProjectorFill,
  RiTeamFill,
  RiWhatsappFill,
} from "react-icons/ri";

export const personalData = [
  {
    Name: "Mahid Lucman",
    contactNumber: "+966 55 244 9592",
    experience: "2 Years of Experience",
    happyClient: "100 Happy Clients",
    mySkills: ["Web & Mobile Developer", "Graphic Designer", "Technical Support"],
    socialMedia: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/lucmanm/",
      },
      {
        name: "GitHub",
        link: "https://github.com/lucmanm/"
      },
      {
        name: "facebook",
        link: "https://www.facebook.com/normadz22"
      },
    ],
    projects: [
      {
        image: "/work/computech-front.png",
        category: "Next js",
        name: "Computech",
        teckStacks: ["React", "Prisma", "ReactQuery"],
        description: "Electronics store from Jeddah, Saudi Arabia",
        link: "https://www.compu-tech.com.sa",
        github: "https://github.com/lucmanm/nextjs_ecommerce_computech_storefront",
        status: "live"
      },
      {
        image: "/work/2.png",
        category: "Next js",
        name: "Playground",
        description: "All I keep my web development and test applications",
        link: "https://playground-hazel-six.vercel.app/",
        github: "https://github.com/lucmanm/playground",
        status: "live"
      },
      {
        image: "/work/3.png",
        category: "Next js",
        name: "Admin Dashboard",
        teckStacks: ["Next js"],
        description: "A Simple frontend application admin dashboard contains basic react usage",
        link: "https://lucmanm-admin-dashboard.netlify.app/",
        github: "https://github.com/lucmanm/admin-dashboard",
        status: "live"
      },
      {
        image: "/work/4.png",
        category: "Next js",
        name: "Nexa Website",
        teckStacks: ["Next js"],
        description: "Simplete project about car data is fetch from rest api cars",
        link: "https://next-project-car-showcase.vercel.app/",
        github: "https://github.com/lucmanm/nextjs_car_showcase",
        status: "live"
      },
      {
        image: "/work/4.png",
        category: "Nextjs",
        name: "Projects App",
        teckStacks: ["Next js"],
        description: "This contains about projects only like for resume",
        link: "projects-app-tau.vercel.app",
        github: "https://github.com/lucmanm/nextjs_projects_app",
        status: "live"
      },
    ]
  }
] as const;




