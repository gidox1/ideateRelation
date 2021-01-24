import React, { useEffect, useState } from "react";
import Card from '../component/card';
import Axios from './lib/client';

const Add = (props) => {
    const [users, setUsers] = useState([])
    const [scrolled,setScrolled]= useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 10 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }

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

    useEffect(() => {
        getUsers();
        window.addEventListener('scroll',handleScroll)
      }, []);
    
    let navbarClasses=['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }

    return (
      <div className="add_body">
            <div className={navbarClasses.join(" ")}>
                <div className="pp">
                    <h1 className="people">PEOPLE</h1>
                </div>
                <hr></hr>
            </div>
          <div className="imageLayout">
            {
                users.map((info, key) => (
                    <div className="banner_" key={key}>
                        <Card
                            image_url={info.image_url}
                            first_name={info.first_name}
                            last_name={info.last_name}
                            _id={info.id}
                       />
                    </div>
                ))
            }
          </div>
      </div>
  );
};

export default Add;
