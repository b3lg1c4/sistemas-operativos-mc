import React, { useState } from 'react';
import SoBackground from './components/SoBackground/SoBackground';
import SoStartScreen from './components/SoStartScreen/SoStartScreen';
import './So.css';


const So = () => {

	const [screen, setScreen] = useState("");

	return (
		<React.Fragment>
			<SoBackground />
		</React.Fragment>
	);
};

export default So;