import React from "react";
import "./CircleWithSatellites.css"; // CSSを別のファイルとして保存

const CircleWithSatellites = () => {
	return (
		<div className='container'>
			<div className='circle main'></div>
			{[...Array(8)].map((_, i) => (
				<div key={i} className={`circle satellite s${i}`} />
			))}
		</div>
	);
};

export default CircleWithSatellites;

