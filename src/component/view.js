import React, { useEffect, useState } from "react";
import Card from '../component/card';
import Axios from './lib/client';
import SmallCard from './small_card';
import NoRelations from '../component/no_relations'

const View = (props) => {
    const [users, setUsers] = useState([])
    const [familyData, setFamilyData] = useState([])
    const currentUser = new URLSearchParams(window.location.search).get('id')

    const getUsers = () => {
        return Axios.get("/user", {})
            .then(async (res) => {
                let data = await res.data['data'];
                data =  data.filter((x) => x.image_url)
                data.sort( () => .5 - Math.random());
                setUsers(data)
                return
            })
            .catch((err) => {
                return
            })
    }

    const getFamily =() => {
        return Axios.get(`/family/${parseInt(currentUser)}`, {})
        .then(async (res) => {
            let data = await res.data['data'];
            console.log(data, "FAMILY DATA");
            setFamilyData(data)
            return
        })
        .catch((err) => {
            return
        })
    }

    useEffect(() => {
        getUsers();
        getFamily();
    }, []);
    
    const userImage = users.filter((x) => x.id === parseInt(currentUser));
    console.log(userImage)

    return (
      <div className="add_body">
          <div className="_rel">
            <a href= "/" className="home">Home</a>
            <h3 className="_h3">RELATIONS</h3>
            <hr className="_rel_hr"></hr>
          </div>
          <div className="_row_div">
            <div className="_profile">
            {
                currentUser && 
                    <div className="frame">
                        <div className="inner_frame">
                            {
                                userImage.map((info, key) => (
                                    <>
                                        <img
                                            className="frame_img"
                                            src={info.image_url}
                                            key={key}
                                        />
                                        <label className="__name">{`${info.first_name} ${info.last_name}`}</label>
                                    </>
                                ))
                            }
                        </div>
                    </div>
            }

            </div>
            <div className="_col"></div>
            <div className="gallery">
                 {
                   familyData.length ? familyData.map((info, key) => (
                        <div
                            className="_gall"
                        >
                            <SmallCard
                                name={`${info.user.first_name} ${info.user.last_name}`}
                                image_url= {`${info.user.image_url}`}
                                tag="R-ship"
                                tag_name={info.tag.name}
                                key={key}
                            />
                        </div>
                    ))

                    :
                    <>
                        <NoRelations/>
                        <input type="button" onClick={
                            (e) => {e.preventDefault(); 
                                window.location.href=`/create?id=${parseInt(currentUser)}`;
                                } 
                            }
                            className="add_relations_" 
                            value="Add relations"
                        />
                    </>
                }
            </div>
          </div>
      </div>
  );
};

export default View;
