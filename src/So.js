import React, { useState } from 'react';
import SoBackground from './components/SoBackground/SoBackground';
import SoStartScreen from './components/SoStartScreen/SoStartScreen';
import SoQuestionsScreen from './components/SoQuestionsScreen/SoQuestionsScreen';
import SoScoreScreen from './components/SoScoreScreen/SoScoreScreen';
import './So.css';


const So = () => {

	const [screen, setScreen] = useState("");

	const getSoScreen = () => {
		return <SoStartScreen />
	};

	return (
		<React.Fragment>
			<SoBackground />
			{getSoScreen()}
		</React.Fragment>
	);
};

export default So;