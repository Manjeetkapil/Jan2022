import React from "react";

function Items({ items ,currentPage,pageLimit,handleEditable}) {
  
  return (
    <div>
      <div className="title">All items</div>
      <div className="textbody">
        {items
          ? items.map((item, index) => (
              <div key={index} className="areaitem">
                <span>{index + 1}: </span>
                <div
                  suppressContentEditableWarning={true}
                  contentEditable
                  onInput={(e)=>handleEditable(e.target.innerText,currentPage*pageLimit + index)}
                >
                  {item}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Items;
