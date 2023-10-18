import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";
import Footer from "./components/Footer";

function App() {
  const times = [
    {
      name: "Atacante",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Volante",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Meia",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Ponta",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "Zagueiro",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Lateral",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Goleiro",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [players, setPlayers] = useState([])

  function addPlayer(player) {
    setPlayers([...players, player])
  }

  return (
    <div>
      <Banner />
      <Form
        times={times.map(time => time.name)}
        onRegisteredPlayer={player => addPlayer(player)}
      />

      {times.map(time =>
        <Time
          key={time.name}
          name={time.name}
          primaryColor={time.primaryColor}
          secondaryColor={time.secondaryColor}
          players={players.filter(player => player.time === time.name)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;