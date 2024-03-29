import RainbowBorder from './RainbowBorder';
import MainComponent from './MainComponent';

import Preferences from './Preferences';
import KeyboardShortcuts from './KeyboardShortcuts';
import Branding from './Branding';
import Thanks from './Thanks';
import Footer from './Footer';

import settings from './settings.json';



function App () {
	let mainProps = {settings};

	const links = settings.links;
	let footerProps = {links};

	const thanks = settings.thanks;
	let thanksProps = {thanks};

	let bgClasses = [
		"bg-red-500", "bg-slate-500",
		"bg-blue-500", "bg-slate-500-500",
		"bg-green-500"
	];

	return (
		<div className="App">
			<RainbowBorder bgClasses={bgClasses} />
			<MainComponent {...mainProps} />
			<RainbowBorder bgClasses={bgClasses} />
			<Preferences />
			<RainbowBorder bgClasses={bgClasses} />
			<KeyboardShortcuts keyboardShortcuts={settings.keyboardShortcuts} />
			<RainbowBorder bgClasses={bgClasses} />
			<Branding meta={settings.meta} />
			<RainbowBorder bgClasses={bgClasses} />
			<Thanks {...thanksProps} />
			<RainbowBorder bgClasses={bgClasses} />
			<Footer {...footerProps} />
		</div>
	);
}

export default App;
