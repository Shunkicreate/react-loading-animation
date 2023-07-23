import "./App.css";
import Fireworks from "./components/Fireworks";
import RotateAnimation from "./components/RotateAnimation";
import CircleWithSatellites from "./components/CircleWithSatellites";
import LightingCircle from "./components/LightingCircle";

function App() {
	return (
		<div className='App'>
			<main>
        <LightingCircle color="red" size={16} />
				<RotateAnimation />
				<RotateAnimation>
					<Fireworks />
				</RotateAnimation>
				<RotateAnimation>
					<CircleWithSatellites />
				</RotateAnimation>
			</main>
		</div>
	);
}

export default App;

