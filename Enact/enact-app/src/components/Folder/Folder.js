import kind from '@enact/core/kind';
import PropTypes from 'prop-types';

import css from './Folder.module.less';
import Icon from '@enact/sandstone/Icon';

const Folder = kind({
	name: 'Folder',

	propTypes: {
		children: PropTypes.string,
		index: PropTypes.number,
		size: PropTypes.number,
        onNavigate: PropTypes.func,
	},
    handlers:{
        handleClick:(index,obj)=>{
            obj.onNavigate(`/folder`);
        }
    },
	render: ({children, index,onNavigate,handleClick, ...rest}) => {
		return (
			<div {...rest} className={css.folder} onClick={()=>handleClick(index,onNavigate)}>
                <div className={css.icon}>
                    <Icon>folder</Icon>
                </div>
				<div className={css.name}>{children}</div>
			</div>
		);
	}
});

export default Folder;