import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const ProjectTypes = () => {
    // State to store the fetched data
    const [data, setData] = useState([]);
  
    // Fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get("http://portfolio-2024-API.local/project-types/read.php");
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
      <div className="projects-nav">
        <ul>
          {data.map((post) => (
            <Link key={post.id} to="/projects-design" 
              className="nav-item" 
              style={{display: "block"}} 
            >
            {post.name}
            </Link>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProjectTypes;