import React, { useState, useEffect } from 'react';
import SoBackground from './components/SoBackground/SoBackground';
import SoStartScreen from './components/SoStartScreen/SoStartScreen';
import './So.css';


const So = () => {

	const [screen, setScreen] = useState(null);

	useEffect(() => {
		setScreen(<SoStartScreen setScreen={setScreen} />);
	}, []);

	return (
		<React.Fragment>
			<SoBackground />
			{screen}
		</React.Fragment>
	);
};

export default So;