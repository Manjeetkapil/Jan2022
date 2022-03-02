import Button from "@enact/sandstone/Button";
import kind from "@enact/core/kind";
import { Panel, Header } from "@enact/sandstone/Panels";

import css from "./MainPanel.module.less";
import Icon from "@enact/sandstone/Icon";


const MainPanel = kind({
  name: "MainPanel",
  styles: {
    css,
    className: "mainpanel",
  },
  render: (props) => (
    <Panel {...props}>
      {/* <Icon>search</Icon> */}
      <Header className={props.className} type="standard">
        <title>Media Player</title>
        <slotAfter>
          {" "}
          <Icon>search</Icon>
          <Icon>verticalellipsis</Icon>
        </slotAfter>
        <subtitle>Cruzer : 1.49GB Free/14.9GB</subtitle>
      </Header>

    </Panel>
  ),
});

export default MainPanel;
