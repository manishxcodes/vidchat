import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Lobby } from "./pages/lobby"
import { Room } from "./pages/room"


function App() {

  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Lobby />} />
				<Route path="/room:id" element={<Room />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
