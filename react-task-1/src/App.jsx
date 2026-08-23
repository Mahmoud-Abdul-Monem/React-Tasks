import Header from "./comps/Header"
import Footer from "./comps/Footer"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
export default function App() {
	return (
		<div className="w-full overflow-x-hidden dark:bg-[#0D0D0D] min-h-dvh text-black dark:text-white  relative">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-linear-to-b from-[#ff5722]/15 via-[#9c27b0]/10 to-transparent blur-[120px] pointer-events-none"></div>

			<div className="max-w-7xl mx-auto px-6 py-5 relative z-10 flex flex-col justify-between min-h-dvh">
				<Header />

				<main className="flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="projects" element={<Projects />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</div>
	);
}