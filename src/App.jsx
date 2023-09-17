import Advantages from './components/Advantages/Advantages';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import './index.css';

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Advantages />
				<Info />
			</div>
		</>
	);
}

export default App;
