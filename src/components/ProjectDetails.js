import React, {useState, useEffect, useRef} from "react";
import axios from "axios";

// Import Individual project pages
import ICC from "./ICC";
import PPP from "./PPP";
import Chipotle from "./Chipotle";

export default function ProjectDetails(props) {
    const [data, setData] = useState([]);

    // Fetch data using Axios
    const fetchData = async () => {
        try {
        const response = await axios.get("http://portfolio-2024-API.local/projects/read_one.php", {
          params: {
            id: props.project
          }
        });
        setData(response.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    // Call fetchData on component mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {(() => {
                switch (props.project) {
                    case 1:
                        return (<ICC />);
                    case 2:
                        return (<PPP />);
                    case 4:
                        return (<Chipotle />);
                default:
                    return (<ICC />);
                }
            })()}
        </>
    );
}