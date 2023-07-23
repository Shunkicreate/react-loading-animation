import "./App.css";
import Fireworks from "./components/Fireworks";
import RotateAnimation from "./components/RotateAnimation";

function App() {
	return (
		<div className='App'>
			<main>
				<RotateAnimation />
				<RotateAnimation>
					<Fireworks />
				</RotateAnimation>
			</main>
		</div>
	);
}

export default App;

