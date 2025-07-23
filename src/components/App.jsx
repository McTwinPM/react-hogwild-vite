import React from "react";
import Nav from "./Nav";
import PorkerList from "./PorkerList";


import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PorkerList porkers={hogs} onPorkerClick={(porker) => <div>{porker.name}</div>} />

		</div>
	);
}

export default App;
