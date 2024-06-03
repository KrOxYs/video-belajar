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
module.exports = { productData, FooterAccordionItems };
