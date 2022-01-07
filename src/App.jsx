import "./App.css";
// import Buttonlist from "./Buttonlist";
import ButtonlistWithMap from "./ButtonListWithMap.js";
// const btnText = "Click Me!";
import Profile from "./Profile";
import Profile2 from "./Profile2";
import Profile3 from "./Profile3";
import Profile4 from "./Profile4";

function App() {
	return (
		<div className="App">
			{/*  <Buttonlist />  */}
			<ButtonlistWithMap />
			<Profile />
			<Profile2 />
			<Profile3 />
			<Profile4 />
		</div>
	);
}

export default App;
