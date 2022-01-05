import "./App.css";
import Button from "./Button";

const randomString = "This is a button";

function App() {
	const addDiv = () => {
		//console.log("text");

		document
			.getElementById("root")
			.insertAdjacentHTML("beforeend", "<div>This is a new div</div>");
	};

	return (
		<div className="App">
			<Button buttonText={randomString} onClick={addDiv} />
		</div>
	);
}

export default App;
