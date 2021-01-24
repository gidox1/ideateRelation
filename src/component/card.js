import React from "react";

const Card = (props) => {

    return (
    <div className="card">
        <div className="card_content">

        </div>
        <img src={props.image_url} className="image_" alt="no image"/>
        <center>
            <label className="name_">{props.first_name.charAt(0).toUpperCase()+props.first_name.slice(1)} {props.last_name.charAt(0).toUpperCase()+props.last_name.slice(1)}</label>
            <br/>
            <label>
                <a className="hover_" onClick={
                    (e) => {
                        e.preventDefault();
                        window.location.href=`/create?id=${props._id}`;
                    }
                }>create relation</a> | <a className="hover_" onClick={
                    (e) => {
                        e.preventDefault();
                        window.location.href=`/add/view?id=${props._id}`;
                    }
                }>view relations</a>
            </label>
        </center>
    </div>
  );
};

export default Card;
