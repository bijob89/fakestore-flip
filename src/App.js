import './App.css';
import {
	BrowserRouter as Router,
} from "react-router-dom";
import MainRoutes from './routes';
import store from "./services/store"
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<MainRoutes />
			</Router>
		</Provider>
	);
}

export default App;
