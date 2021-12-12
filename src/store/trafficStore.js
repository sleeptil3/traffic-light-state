export const trafficReducer = (state, action) => {
	const newState = { ...state }
	switch (action.type) {
		case "RED":
			newState.red = true
			newState.yellow = false
			newState.green = false
			return newState
		case "YELLOW":
			newState.red = false
			newState.yellow = true
			newState.green = false
			return newState
		case "GREEN":
			newState.red = false
			newState.yellow = false
			newState.green = true
			return newState
		case "OFF":
			newState.red = false
			newState.yellow = false
			newState.green = false
			return newState
		default:
			console.log("trafficReducer received invalid input")
	}
}
