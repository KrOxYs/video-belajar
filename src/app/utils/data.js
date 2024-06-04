// import { v4 as uuidv4 } from "uuid";
import g1 from "/public/g1.png";
import g2 from "/public/g2.png";
import g3 from "/public/g3.png";
import g4 from "/public/g4.png";
import g5 from "/public/g5.png";
import g6 from "/public/g6.png";
import g7 from "/public/g7.png";
import g8 from "/public/g8.png";
import g9 from "/public/g9.png";
import miniG1 from "/public/miniProductImage/miniG1.png";
import miniG2 from "/public/miniProductImage/miniG2.png";
import miniG3 from "/public/miniProductImage/miniG3.png";
import miniG4 from "/public/miniProductImage/miniG4.png";
import miniG5 from "/public/miniProductImage/miniG5.png";
import miniG6 from "/public/miniProductImage/miniG6.png";
import miniG7 from "/public/miniProductImage/miniG7.png";
import miniG8 from "/public/miniProductImage/miniG8.png";
import miniG9 from "/public/miniProductImage/miniG9.png";
import miniImg1 from "/public/mini-g1.png";
const productData = () => {
  //   const uniqueId = uuidv4();
  const data = [
    {
      id: 1,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage: g1,
      MiniImage: miniG1,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 2,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage: g2,
      MiniImage: miniG2,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 3,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage: g3,
      MiniImage: miniG3,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 4,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage: g4,
      MiniImage: miniG4,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 5,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage: g5,
      MiniImage: miniG5,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 6,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage: g6,
      MiniImage: miniG6,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 7,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage: g7,
      MiniImage: miniG7,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 8,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage: g8,
      MiniImage: miniG8,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
    {
      id: 9,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan....",
      productImage: g9,
      MiniImage: miniG9,
      username: "Jenna Ortega",
      userTitle: "Senior Accountant di Gojek",
      // userImage: "https://www.youngontop.com/wp-content/uploads/2022/09/port"
      price: 300,
    },
  ];
  return data;
};

const FooterAccordionItems = () => {
  const footerNavs = [
    {
      label: "Kategori",
      items: [
        {
          href: "/",
          name: "Digital & Teknologi",
        },
        {
          href: "/",
          name: "Pemasaran",
        },
        {
          href: "/",
          name: "Manajemen Bisnis",
        },
        {
          href: "/",
          name: "Pengembangan Diri",
        },
        {
          href: "/",
          name: "Desain",
        },
      ],
    },
    {
      label: "Perusahaan",
      items: [
        {
          href: "/",
          name: "Tentang Kami",
        },
        {
          href: "/",
          name: "FAQ",
        },
        {
          href: "/",
          name: "Kebijakan Privasi ",
        },
        {
          href: "/",
          name: "Ketentuan Layanan",
        },
        {
          href: "/",
          name: "Bantuan",
        },
      ],
    },
    {
      label: "Komunitas",
      items: [
        {
          href: "/",
          name: "Tips Sukses",
        },
        {
          href: "/",
          name: "Blog",
        },
      ],
    },
  ];
  return footerNavs;
};

// const userData = () => {
//   users = [
//     {
//       id: 1,
//       name: "Tony Reichert",
//       role: "CEO",
//       team: "Management",
//       status: "active",
//       age: "29",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
//       email: "tony.reichert@example.com",
//     },
//     {
//       id: 2,
//       name: "Zoey Lang",
//       role: "Tech Lead",
//       team: "Development",
//       status: "paused",
//       age: "25",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
//       email: "zoey.lang@example.com",
//     },
//     {
//       id: 3,
//       name: "Jane Fisher",
//       role: "Sr. Dev",
//       team: "Development",
//       status: "active",
//       age: "22",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
//       email: "jane.fisher@example.com",
//     },
//     {
//       id: 4,
//       name: "William Howard",
//       role: "C.M.",
//       team: "Marketing",
//       status: "vacation",
//       age: "28",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
//       email: "william.howard@example.com",
//     },
//     {
//       id: 5,
//       name: "Kristen Copper",
//       role: "S. Manager",
//       team: "Sales",
//       status: "active",
//       age: "24",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
//       email: "kristen.cooper@example.com",
//     },
//     {
//       id: 6,
//       name: "Brian Kim",
//       role: "P. Manager",
//       team: "Management",
//       age: "29",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png",
//       email: "brian.kim@example.com",
//       status: "Active",
//     },
//     {
//       id: 7,
//       name: "Michael Hunt",
//       role: "Designer",
//       team: "Design",
//       status: "paused",
//       age: "27",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/4.png",
//       email: "michael.hunt@example.com",
//     },
//     {
//       id: 8,
//       name: "Samantha Brooks",
//       role: "HR Manager",
//       team: "HR",
//       status: "active",
//       age: "31",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/4.png",
//       email: "samantha.brooks@example.com",
//     },
//     {
//       id: 9,
//       name: "Frank Harrison",
//       role: "F. Manager",
//       team: "Finance",
//       status: "vacation",
//       age: "33",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/5.png",
//       email: "frank.harrison@example.com",
//     },
//     {
//       id: 10,
//       name: "Emma Adams",
//       role: "Ops Manager",
//       team: "Operations",
//       status: "active",
//       age: "35",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/5.png",
//       email: "emma.adams@example.com",
//     },
//     {
//       id: 11,
//       name: "Brandon Stevens",
//       role: "Jr. Dev",
//       team: "Development",
//       status: "active",
//       age: "22",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/7.png",
//       email: "brandon.stevens@example.com",
//     },
//     {
//       id: 12,
//       name: "Megan Richards",
//       role: "P. Manager",
//       team: "Product",
//       status: "paused",
//       age: "28",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/7.png",
//       email: "megan.richards@example.com",
//     },
//     {
//       id: 13,
//       name: "Oliver Scott",
//       role: "S. Manager",
//       team: "Security",
//       status: "active",
//       age: "37",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/8.png",
//       email: "oliver.scott@example.com",
//     },
//     {
//       id: 14,
//       name: "Grace Allen",
//       role: "M. Specialist",
//       team: "Marketing",
//       status: "active",
//       age: "30",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/8.png",
//       email: "grace.allen@example.com",
//     },
//     {
//       id: 15,
//       name: "Noah Carter",
//       role: "IT Specialist",
//       team: "I. Technology",
//       status: "paused",
//       age: "31",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/9.png",
//       email: "noah.carter@example.com",
//     },
//     {
//       id: 16,
//       name: "Ava Perez",
//       role: "Manager",
//       team: "Sales",
//       status: "active",
//       age: "29",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/9.png",
//       email: "ava.perez@example.com",
//     },
//     {
//       id: 17,
//       name: "Liam Johnson",
//       role: "Data Analyst",
//       team: "Analysis",
//       status: "active",
//       age: "28",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/11.png",
//       email: "liam.johnson@example.com",
//     },
//     {
//       id: 18,
//       name: "Sophia Taylor",
//       role: "QA Analyst",
//       team: "Testing",
//       status: "active",
//       age: "27",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/11.png",
//       email: "sophia.taylor@example.com",
//     },
//     {
//       id: 19,
//       name: "Lucas Harris",
//       role: "Administrator",
//       team: "Information Technology",
//       status: "paused",
//       age: "32",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/12.png",
//       email: "lucas.harris@example.com",
//     },
//     {
//       id: 20,
//       name: "Mia Robinson",
//       role: "Coordinator",
//       team: "Operations",
//       status: "active",
//       age: "26",
//       avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/12.png",
//       email: "mia.robinson@example.com",
//     },
//   ];
//   return users;
// };
module.exports = { productData, FooterAccordionItems };
