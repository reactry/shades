import MainComponent from './MainComponent';
import Footer from './Footer';

import settings from './settings.json';



function App () {
	const links = settings.links;
	let footerProps = {
		links
	};

	return (
		<div className="App">
			<MainComponent />
			<Footer {...footerProps} />
		</div>
	);
}

export default App;
