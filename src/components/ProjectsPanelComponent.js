import React, {useState, useEffect} from "react";
import axios from "axios";
import {motion, useTransform, useScroll} from "framer-motion";
import {useRef} from "react";

const PanelComponent = (props) => {
  return (
    <div className="bg-neutral-800">
      <div style={{height: "40%"}}></div>
      <HorizontalScrollCarousel projectType={props.projectType} />
      <div className="panels-bottom">
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = (props) => {
  useEffect(() => {
    console.log({props});
  });
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const [data, setData] = useState([]);

  // Fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get("http://portfolio-2024-API.local/projects/read_by_type.php", {
        params: {
          type: props.projectType
        }
      });
      setData(response.data.records);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section ref={targetRef} className="panel-outer-layout">
      <div className="panel-container">
        <motion.div style={{x}} className="panel-inner-container">
          {data.map((post) => (
            <div key={post.id}
              className="panel"
              >
              <div
                style={{
                  backgroundImage: `url(${post.image_path_1})`, 
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
                className="panel-image"
              ></div>
              <div className="panel-info">
                <p className="panel-info-title">
                  {post.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PanelComponent;

const cards = [
  {
    url: "https://www.jeffndesign.net/images/project-icc-1.svg",
    url2: "https://www.iccsafe.org/wp-content/uploads/22-21066_ICC_website_HDRs_1920x443_FINALf_people.jpg",
    title: "International Code Council (ICC)",
    id: 1,
  },
  {
    url: "https://www.jeffndesign.net/images/project-ppp-1.svg",
    url2: "https://ppp.iccsafe.org/images/main-block-img.jpg",
    title: "ICC Preferred Provider",
    id: 2,
  },
  {
    url: "https://www.jeffndesign.net/images/project-nlu-1.svg",
    url2: "https://ppp.iccsafe.org/images/main-block-img.jpg",
    title: "National Louis University",
    id: 3,
  },
  {
    url: "https://www.jeffndesign.net/images/large/projects_3_1.jpg",
    url2: "https://www.jeffndesign.net/images/large/projects_3_1.jpg",
    title: "Chipotle",
    id: 4,
  },
  {
    url: "../assets/images/dev5.jpg",
    url2: "../assets/images/dev5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "../assets/images/dev6.jpg",
    url2: "../assets/images/dev6.jpg",
    title: "Title 6",
    id: 6,
  },

];