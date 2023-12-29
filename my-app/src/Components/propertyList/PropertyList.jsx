import React from 'react';
import './propertyList.css';
import image1 from "../../Assets/hotel1.jpg"
import image2 from "../../Assets/hotel6.jpg"
import image3 from "../../Assets/hotel3.jpg"
import image4 from "../../Assets/hotel4.jpg"
import image5 from "../../Assets/hotel5.jpg"
import image6 from "../../Assets/hotel2.jpg"
import useFetch from "../../hooks/useFetch";

export const PropertyList = () => {
  const { data, loading } = useFetch("/hotels/countByType");
  
  const images = {
    image1: <img src={image1} alt="" className="pListImg" />,
    image2: <img src={image2} alt="" className="pListImg" />,
    image3: <img src={image3} alt="" className="pListImg" />,
    image4: <img src={image4} alt="" className="pListImg" />,
    image5: <img src={image5} alt="" className="pListImg" />,
    image6: <img src={image6} alt="" className="pListImg" />,
  };
  var i=0;
  return (
    <div className="pList">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data &&
          images.map((img)=>(

          
            <div className="pListItem" key={i}>
            <img src={img}
             alt="" 
             className="pListImg" />

            <div className="pListTitles">
              <h1>{data[i]?.type}</h1>
              <h2>{data[i]}? {data[i]?.type}</h2>
            </div>
          </div>
          ))}
          
        </>
      )}
    </div>
  );
};

export default PropertyList;
