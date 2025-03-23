import "./global.css"
import RootStack from './src/Navigation/RootStack';
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";

export default function App() {
  return(
    <Provider store={store}>
      <RootStack/>
    </Provider>
  )
}