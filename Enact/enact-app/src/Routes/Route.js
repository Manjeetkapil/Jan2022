import { useState,useCallback } from "react";
import Routable,{Route,Link}  from '@enact/ui/Routable';
import FolderRepeater from "../components/FolderRepeater/FolderRepeater";
import Folder from "../components/Folder/Folder";
import InsideFolder from "../components/InsideFolder/InsideFolder";
const Views = Routable({navigate: 'onNavigate'}, ({children}) => <div>{children}</div>);

const Main = () => (
  <div>
	  <Link path="./about">About</Link>
      <br />
	  <Link path="./faq">FAQ</Link>
      {/* hi */}
  </div>
);

const About = () => (<div>Greetings! We are Enact team.</div>);

const Faq = () => (<div>List of FAQ</div>);

const Router = (props) => {
  // use 'main' for the default path
  const [path, nav] = useState('main');
  // if onNavigate is called with a new path, update the state
  const handleNavigate = useCallback((ev) => nav(ev.path), [nav]);

  const onNavigate = (path) =>{
      nav(path);
  }

  return (
	  <Views {...props} path={path} onNavigate={handleNavigate}>
		  {/* <Route path="main" component={FolderRepeater}> */}
            <Route path="main" component={FolderRepeater} onNavigate={onNavigate}/>
			<Route path="folder/:id" component={InsideFolder} />
            {/* Bug: Not able to use :id to render component By Id */}
            {/* When you click any folder it says does not mathes the route */}
		  {/* </Route> */}
	  </Views>
  );
};

export default Router;