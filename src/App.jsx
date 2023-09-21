import Advantages from './components/Advantages/Advantages';
import BuySubscription from './components/BuySubscription/BuySubscription';
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
				<BuySubscription />
				<Info />
			</div>
		</>
	);
}

export default App;
