import Sensores from "./components/SensorsList";
import SensorWS from "./hooks/SensorWS";
function App() {
  return (
    <Sensores />
    // <>
    //   <SensorWS url={"ws://192.168.1.96/ws"} />
    //   <SensorWS />
    //   <SensorWS />
    // </>
    //<SensorWS />
  );
}

export default App;
