import { useState } from "react";
import CarDetails from "./Components/CarDetails";
import Challenge from "./Components/Challenge";
import ConditionalRender from "./Components/ConditionalRender";
import { Container } from "./Components/Container";
import { ExeciteFunction } from "./Components/ExeciteFunction";
import ListRender from "./Components/ListRender";
import ShowUserName from "./Components/ShowUserName";
import { Message } from "./Components/Message";
import { ChangeMessageState } from "./Components/ChangeMessageState";
import { UserDetail } from "./Components/UserDetail";


function App() {

  const cars = [{ id: 1, brand: "Ferrari", color: "Yellow", newCar: true },
  { id: 2, brand: "Fiat", color: "Red", newCar: false },
  { id: 3, brand: "Honda", color: "Green", newCar: true }]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
      setMessage(msg)
  }

  return (
    <>
      <Challenge />
      <CarDetails />
      <ConditionalRender />
      <ListRender />
      <ShowUserName name="João" />

      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}

      <Container>
        <p>E esse é o conteúdo</p>
      </Container>

      <ExeciteFunction myFunction={showMessage}/>
        
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>

      <UserDetail />
    </>
  );
}

export default App;
