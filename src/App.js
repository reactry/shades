import MainComponent from './MainComponent';
import Thanks from './Thanks';
import Footer from './Footer';

import settings from './settings.json';



function App () {
	let mainProps = {settings};

	const links = settings.links;
	let footerProps = {links};

	const thanks = settings.thanks;
	let thanksProps = {thanks};

	return (
		<div className="App">
			<MainComponent {...mainProps} />
			<Thanks {...thanksProps} />
			<Footer {...footerProps} />
		</div>
	);
}

export default App;
