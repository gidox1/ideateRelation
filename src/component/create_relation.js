import React, { useEffect, useState } from "react";
import Card from '../component/card';
import Axios from './lib/client';
import SmallCard from './small_card';

const Create = (props) => {
    const [userArray, setUserArray] = useState([])
    const [tags, setTags] = useState([])
    let arrayData = [];
    const [side_, setSide] = useState(false);

    const currentUser = new URLSearchParams(window.location.search).get('id')

    const submit = (data) => {
        return Axios.post("/family", data)
            .then(async (res) => {
                window.alert('Family successfully created');
            })
            .catch((err) => {
                return
            })
    }

    const getUserHook = () => {
        return Axios.get("/user", {})
            .then(async (res) => {
                let data = await res.data['data'];
                data =  data.filter((x) => x.image_url)
                data.sort( () => .5 - Math.random());
                setUserArray(data)
                return
            })
            .catch((err) => {
                return
            })
    }

    const drop = (e) => {
        e.preventDefault();
        let card_id = e.dataTransfer.getData('card_id');
        let card = document.getElementById(card_id);
        card.style.display = 'flex';
        card.style.border = 'none';
        card.draggable = false;
        const formerCard = document.getElementById(`nametag_${e.target.id.split("_")[1]}`)
        formerCard.style.display = 'none';
        arrayData.push({
            tag_id : parseInt(e.target.id.split("_")[1]),
            user_id: parseInt(card.id.split("_")[1]),
            family_id: parseInt(currentUser)
        })
        e.target.appendChild(card);
    }
    const dragOver = (e) => {
        e.preventDefault();
    }


    const getTags = () => {
        return Axios.get("/tag", {})
            .then(async (res) => {
                let data = await res.data['data'];
                setTags(data)
            })
            .catch((err) => {
                return
            })
    }

    useEffect(() => {
        getUserHook();
       getTags();
      }, []);

    const listD = userArray.filter((x) => x.id === parseInt(currentUser));
    const dataPack = userArray.filter((x) => x.id !== parseInt(currentUser))
      return (
        <div className="add_body">
            <div className="_rel">
                <a href= "/" className="home">Home</a>
                <h3 className="_h3">CREATE</h3>
                <hr className="_rel_hr"></hr>
            </div>
            <div className="_row_div">
                <div className="identity"
                    onDragOver={dragOver}
                    onDrop={drop}
                    id={`push_main_`}
                >
                    {
                        dataPack.map((info, key) => (
                            <div
                                className="card_div"
                                key={key}
                            >
                                <SmallCard
                                    image_url={info.image_url}
                                    name={info.first_name + " " + info.last_name}
                                    _id={info.id}
                                    // last_name={info.last_name}
                                    // tag= "Family"
                                    key={key}
                                    draggable={true}
                                />    
                            </div>                      
                        ))
                    }   
                </div>
                {/* <div className="_col"></div> */}
                <div className="pitch">
                    <center>
                        {
                            listD.map((info, key) => (
                                <SmallCard
                                    image_url={info.image_url}
                                    name={info.first_name + " " + info.last_name}
                                    _id={info.id}
                                    last_name={info.last_name}
                                    tag= "Family"
                                    key={key}
                                />                          
                            ))
                        }   
                        <div>
                            {
                                tags.map((info, key) => (
                                    <>
                                        <div className="line"></div>
                                        <div className= {(side_ == true) ? "none" : "push_card"} 
                                            onDragOver={dragOver}
                                            onDrop={drop}
                                            name={`${info.id}_name`}
                                            id={`pushid_${parseInt(key) + 1}`}
                                        >
                                            <h2 id={`nametag_${parseInt(key) + 1}`}>{info.name}</h2>
                                        </div>
                                    </>
                                ))
                            }
                            <button 
                                className="create"
                                onClick={
                                    async (e) => {
                                        e.preventDefault();
                                        await submit(arrayData)
                                    }
                                }
                            >Create</button>   
                        </div>   
                    </center>
                </div>
            </div>
        </div>
  );
};

export default Create;
