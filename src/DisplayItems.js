import React from "react";

const DisplayItems = (props) => {
  const {invArray} = props;
  return (
    <div className="itemContainer">
      {
        invArray.map((items) => {
          return(
            <div key={items.key}>
              <h2>{items.itemName}</h2>
              <div className="archiveFlex">
                <img className="archiveImg" src={items.img} alt="" />
                <div className="archiveInfo">
                  <h3>{items.season}</h3>
                  <h4>Description</h4>
                  <p>{items.description}</p>
                  <h4>Materials</h4>
                  <ul>
                    <li>{items.materials}</li>
                  </ul>
                  <h4>Care</h4>
                  <ul>
                    <li>{items.care}</li>
                  </ul>
                </div>
              </div>
            </div>
            )
          })
        }
    </div>
  )
}

export default DisplayItems;