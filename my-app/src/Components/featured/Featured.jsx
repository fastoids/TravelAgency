import "./featured.css";
import React from "react";
import image1 from "../../Assets/pic.jpg";
import image2 from "../../Assets/pic8.jpg";
import image3 from "../../Assets/pic3.jpg";
import image4 from "../../Assets/pic4.jpg";
import image5 from "../../Assets/pic5.jpg";
import image6 from "../../Assets/pic6.jpg";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london");
  
    return (
      <div className="featured">
        {loading ? (
          "Loading, please wait..."
        ) : (
          <>
            <div className="featuredItem">
              <img src={image1} alt="Skardu" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>
  
            <div className="featuredItem">
              <img src={image2} alt="Passu cones" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[1]} properties</h2>
              </div>
            </div>
  
            <div className="featuredItem">
              <img src={image3} alt="Rakaposhi" className="featuredImg" />
              <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[2]} properties</h2>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default Featured;