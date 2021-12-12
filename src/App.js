import { useReducer, useEffect } from "react"
import "./App.css"
import { RED, YELLOW, GREEN } from "./constants/colors"
import { trafficReducer } from "./store/trafficStore"

function App() {
	const [state, dispatch] = useReducer(trafficReducer, { red: false, yellow: false, green: false })

	const handleRedLight = () => {
		dispatch({
			type: "RED",
		})
	}

	const handleYellowLight = () => {
		dispatch({
			type: "YELLOW",
		})
	}

	const handleGreenLight = () => {
		dispatch({
			type: "GREEN",
		})
	}

	const allOff = () => {
		dispatch({
			type: "OFF",
		})
	}

	const handleSimulation = (time) => {
		allOff()
		handleGreenLight()
		setTimeout(() => {
			handleYellowLight()
			setTimeout(() => handleRedLight(), 1500)
		}, time * 1000)
	}

	useEffect(() => {
		allOff()
	}, [])

	return (
		<div className="App">
			<div className="pole"></div>
			<div className="light">
				<div id="red" className={`bulb ${state.red && RED}`}></div>
				<div id="yellow" className={`bulb ${state.yellow && YELLOW}`}></div>
				<div id="green" className={`bulb ${state.green && GREEN}`}></div>
			</div>
			<div className="control">
				<button onClick={handleRedLight}>STOP</button>
				<button onClick={handleYellowLight}>CAUTION</button>
				<button onClick={handleGreenLight}>GO</button>
				<button onClick={allOff}>ALL OFF</button>
				<button onClick={() => handleSimulation(3)}>SIMULATE</button>
			</div>
		</div>
	)
}

export default App
