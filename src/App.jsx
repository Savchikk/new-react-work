import Header from "./components/header/Header";
import WelcomeSection from "./components/welcomeSection/WelcomeSection";
import Footer from "./components/footer/Footer";
import Message from "./components/message/Message";
import List from "./components/list/List";
import Container from "./components/Container/Container";

const App = () => {
  const filmsData = [
    {
      id: 1,
      title: "Terminator",
    },
    {
      id: 2,
      title: "Got",
    },
    {
      id: 3,
      title: "doska",
    },
    {
      id: 4,
      title: "plitka",
    },
  ];
  const goodsData = [
    {
      id: 1,
      title: "Potato",
    },
    {
      id: 2,
      title: "Carrots",
    },
    {
      id: 3,
      title: "Tv",
    },
    {
      id: 4,
      title: "Iphone",
    },
  ];
  return (
    <div>
      <Header />
      <WelcomeSection />
      <Footer />
      <Message />
      <Message author="Igor" text="Продам холодильник" />
      <Message author="Petro" text="Продам жопу" />
      <Message author="Zlata" text="Продам sisi" />
      <Container>
        <List title="Movies" data={filmsData} />
      </Container>
      <Container>
        <List title="Goods" data={goodsData} variant="bordered" />
      </Container>
      <List title="Movies" data={filmsData} />
      <List title="Goods" data={goodsData} variant="bordered" />
    </div>
  );
};
export default App;
