import React, { useState }  from "react";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Axios from './lib/client';

const Relations = (props) => {
    const [loading, setLoading] = useState(false);
    let message = "Sorry, this feature is not available now, please create using dummy data"
    const handleClose = () => {
        setLoading(false);
      };
    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }));
    const classes = useStyles();
    const createUsers = () => {
        return Axios.post("/user/create", {})
        .then(async (res) => {
            console.log(await res.data);
            return
        })
        .catch((err) => {
            return
        })
    }

  return (
      <div className="relations">
          {
          Array.isArray(props.data) && props.data
            ? <h4></h4>
            : 
            <div className="no_data">
                <input type="button" onClick={(e) => {e.preventDefault(); window.alert(message)}} 
                    className="add_relations" value="Add relations"
                />
                <br/><br/>
                <i>Or
                    <u>
                        {loading && 
                            <Backdrop className={classes.backdrop} open onClick={handleClose}>
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        }
                        <a className="styled_" onClick = {async(e) => {
                            e.preventDefault();
                            setLoading(true);
                            await createUsers();
                            setLoading(false);
                            window.location.href='/add';
                        }} href="/add"> test using dummy data?</a>
                    </u>
                </i>
            </div>
          }
      </div>
  );
};

export default Relations;
