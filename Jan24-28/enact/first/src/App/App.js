import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Repeater from '@enact/ui/Repeater';

import Kitten from '../components/Kitten/Kitten';

const kittens = [
	'Garfield',
	'Nermal',
	'Simba',
	'Nala',
	'Tiger',
	'Kitty',
	'tiksy',
	'cutie',
];

const AppBase = kind({
	name: 'App',

	render: (props) => (
		<div className={props.className}>
			<Repeater childComponent={Kitten} indexProp="index">
				{kittens}
			</Repeater>
		</div>
	)
});
const App = ThemeDecorator(AppBase);

export default App;
export {
	App,
	AppBase
};