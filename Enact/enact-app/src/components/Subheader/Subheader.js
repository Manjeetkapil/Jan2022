import kind from "@enact/core/kind";

import css from "./Subheader.module.less";
import Icon from "@enact/sandstone/Icon";
import Dropdown from "@enact/sandstone/Dropdown";

const Subheader = kind({
  name: "Subheader",

  render: (props) => {
    return (
      <div className={css.subheader}>
        <div className={css.icontitle}>
          <Icon>list</Icon>
          <div className={css.title}>Cruzer /</div>
        </div>
        <div className={css.Dropdown}>
          <Dropdown defaultSelected={0}>
            {["All","Music", "Audio", "Video", "Images"]}
          </Dropdown>
        </div>
      </div>
    );
  },
});

export default Subheader;
