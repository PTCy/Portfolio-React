import React from 'react'
import Img1 from "../../assets/web-hotel.jpeg";
import Img2 from "../../assets/web-rocket.jpeg";
import Img3 from "../../assets/app.png";
import Img4 from "../../assets/portfolio.png";
import Img5 from "../../assets/webDonsek.png";
import Img6 from "../../assets/ux-ui.jpg";

const data = [
    {
      id: 1,
      img: Img1,
      title: "Hotel Booking",
      github: "https://github.com/PTCy",
      demo: "http://localhost/hotelbooking/index.php",
    },
  
    {
      id: 2,
      img: Img2,
      title: "Rocket Coffee",
      github: "https://github.com/PTCy",
      demo: "https://web-design-1c0f4.web.app/",
    },
  
    {
      id: 3,
      img: Img3,
      title: "Life History Application",
      github: "https://github.com/PTCy/HistoryAppFlutter",
      demo: "https://github.com/PTCy/HistoryAppFlutter",
    },
  
    {
      id: 4,
      img: Img4,
      title: "Portfolio With React",
      github: "https://github.com/PTCy",
      demo: "#",
    },
  
    {
      id: 5,
      img: Img5,
      title: "web Donsek",
      github: "https://github.com/PTCy/Web-Donsek.git",
      demo: "http://localhost/WebProject/UserPage/index.php",
    }, 
  
    {
      id: 6,
      img: Img6,
      title: "UX/UI Design",
      github: "https://github.com/PTCy",
      demo: "https://www.canva.com/design/DAFfac7NyMI/tS_rF3A66PXGXOY0OcV_cg/edit?analyticsCorrelationId=c4f1b520-79a4-44ac-82c0-0bcad95ed8e9",
    }
  ];

const DataProject = () => {
  return data;
}

export default DataProject