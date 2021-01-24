import React from "react";

const SmallCard = (props) => {

  const dragStart = (e) => {
    console.log("DRAGGED!!!")
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0)
    // document.getElementById(target.id).style.display = 'none';
  }

  const dragOver = (e) => {
    e.stopPropagation();
  }

  return (
      <div className="small_card" 
        id={`profilesec_${props._id}`}
        draggable={props.draggable ? props.draggable : false}
        onDragStart={dragStart}
        onDragOver={dragOver}
      >
          <div className="_img_div">
            <img className="card_img" src={props.image_url} draggable={false}/>
          </div>
          <div className="details">
              <div className="_cc"> 
                <div className="_row_div _label_holder">
                    <b className="_b">Name :</b> <label className="_label"> {props.name}</label>
                </div>
                <div className="_row_div _label_holder">
                    <b className="_b">{props.tag ? `${props.tag} :` :  ""} </b> <label className="_label"> {props.last_name ? props.last_name : props.tag_name}</label>
                </div>
              </div>
          </div>
      </div>
  );
};

export default SmallCard;
