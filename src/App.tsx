import React from "react";
import { Header } from "./components/header";
import { MainPage } from "./components/page";
import { ContentWrapper } from "./components/styles/shared";

function App() {
  return (
      <ContentWrapper>
        <Header />
        <MainPage />
      </ContentWrapper>
  );
}

export default App;
