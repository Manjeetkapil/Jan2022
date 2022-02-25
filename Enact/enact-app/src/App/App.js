import kind from "@enact/core/kind";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import Panels from "@enact/sandstone/Panels";

import MainPanel from "../views/MainPanel";
import FolderRepeater from "../components/FolderRepeater/FolderRepeater";
import Subheader from "../components/Subheader/Subheader";
import Routable from '@enact/ui/Routable';
import Router from "../Routes/Route";

import css from "./App.module.less";

const App = kind({
  name: "App",

  styles:{
	  css,
	  className:'app'
  },

  render: (props) => (
    <div className={props.className}>
		{/* <div className={css.panel}>
		<Panels>
			<MainPanel />
		</Panels>
	  </div> */}
	  <div className={css.subheader}>
		<Subheader/>
	  </div>
      <div className={css.body}>
        <Router/>
      </div>
    </div>
  ),
});

export default ThemeDecorator(App);
