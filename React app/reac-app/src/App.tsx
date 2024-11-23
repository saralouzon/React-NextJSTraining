import { useState } from "react";
import Alert from "./components/Alert";
//import ListGroup from "./components/ListGroup"
import Button from "./components/Button";

function App() {
  // const items = ["New York", "San francisco", "Tokyo", "London", "Paris"];
  //const handleSelectItem = (item : string) => {
  // console.log(item);}
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {/*<ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>*/}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        my button
      </Button>
    </>
  );
}

export default App;
