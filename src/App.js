import './App.css';
import Head from './component/head';
import SideBanner from './component/side_banner';
import NoRelations from './component/no_relations';
import Relations from './component/relations';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

function App() {
  console.log(useParams(), "UP")
  return (
    <div className="main">
      <Head
        message="Welcome to"
        note="relations creator."
      />
      <Fragment>
        <div className="_body">
          <SideBanner/>
          <div className="no_relations">
            <img className="hurray" src="https://res.cloudinary.com/passionpolisapi/image/upload/v1611134776/dumps/38_rtjhyx.svg" alt="no image"/>
              <u className="u-tag">
                <h3 className="h3">
                  Start creating people relations!
                </h3>
              </u>
          </div>
          {/* <NoRelations/> */}
          <Relations/>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
 