import React from "react";
import { View, Text } from "react-native";
import { ContainerGame, ButtonPink, ContGame } from "../style/style.js";

const Home = () => {
  return (
    <ContainerGame>
      <ContGame>
        <Text>Jogo da Memoria</Text>
      </ContGame>

      <ButtonPink>
        <Text style={{ color: "white", fontSize: 30 }}>Continuar</Text>
      </ButtonPink>
    </ContainerGame>
  );
};

export default Home;
