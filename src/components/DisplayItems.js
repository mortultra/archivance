import React from "react";

const DisplayItems = (props) => {
  const {invArray} = props;
  return (
    <div className="displayContainer">
      {invArray.map((items) => {
        return (
          <div className="itemContainer" key={items.key}>
            <h2>{items.itemName}</h2>
            <div className="archiveFlex">
              {/* {items.img.forEach(item.img)} */}
              <div className="archiveImg">
                <img src={items.img} alt={items.itemName} />
              </div>
              <div className="archiveInfo">
                <h3>{items.season}</h3>
                <h4>Description</h4>
                <p>{items.description}</p>
                <h4>Materials</h4>
                <ul>
                  <li>
                    <p>{items.materials}</p>
                  </li>
                </ul>
                <h4>Care</h4>
                <ul>
                  <li>
                    <p>{items.care}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayItems;