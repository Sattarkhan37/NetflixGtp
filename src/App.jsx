import Header from "./components/Header";
import Body from "./components/Body";
import Loginn from "./components/Loginn";
import { Provider } from "react-redux";
import appstore from "../src/utils/appStore.js";
function App() {
  return (
    <div>
      <Provider store={appstore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
