import Advantages from './components/Advantages/Advantages';
import ExclusiveAccess from './components/ExclusiveAccess/ExclusiveAccess';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import './index.css';

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Advantages />
				<ExclusiveAccess />
				<Info />
			</div>
		</>
	);
}

export default App;
