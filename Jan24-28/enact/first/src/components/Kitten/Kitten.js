import kind from '@enact/core/kind';
import PropTypes from 'prop-types';

import css from './Kitten.module.less';

const KittenBase = kind({
	name: 'Kitten',

	propTypes: {
		children: PropTypes.string,
		index: PropTypes.number,
		size: PropTypes.number
	},

	defaultProps: {
		size: 500
	},

	styles: {
		css,
		className: 'kitten'
	},

	computed: {
		url: ({index, size}) => {
			return `//loremflickr.com/${size}/${size}/kitten?random=${index}`;
		}
	},

	render: ({children, url, ...rest}) => {
		delete rest.index;
		delete rest.size;

		return (
			<div {...rest}>
				<img src={url} alt="Kitten" />
				<div>{children}</div>
			</div>
		);
	}
});

export default KittenBase;
export {KittenBase as Kitten};