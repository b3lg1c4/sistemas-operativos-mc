import React from 'react';
import './SoScoreScreenStatistics.css';

const SoScoreScreenStatistics = ({ statistics }) => {

    return (
        <div className="SoScoreScreen-statistics">
            {statistics.map((statistic,key) => (
                <div key={key} className="SoScoreScreen-statistics-statistic">
                    {statistic.icon}
                    <p className="SoScoreScreen-statistics-statistic-value">{statistic.value}</p>
                </div>
            ))}

        </div>);

};

export default SoScoreScreenStatistics;