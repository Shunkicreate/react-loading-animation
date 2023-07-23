import "./App.css";
import Fireworks from "./components/Fireworks";
import RotateAnimation from "./components/RotateAnimation";
import CircleWithSatellites from "./components/CircleWithSatellites";

function App() {
	return (
		<div className='App'>
			<main>
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

