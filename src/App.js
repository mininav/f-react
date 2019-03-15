import React, {useEffect, useState} from 'react';
import './App.css';
import AdminPage from "./pages/AdminPage"
import Websocket from "./utils/Websocket";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";

function App() {

  // const [websocket, setWebsocket] = useState(new AppWebSocket("ws://f.fusion-mng.xyz/hws"));
  const [websocket, setWebsocket] = useState(new Websocket("ws://localhost/hws"));
  useEffect(() => {
    websocket.start();
    return () => {
      websocket.stop();
    }
  }, []);

  const [workplace, setWorkplace] = useState({});
  useEffect(() => {

    const property = "workplace";

    const id = websocket.addMsgEventListener(property, workplace => {
      setWorkplace(workplace);
      if (!workplace.login) {
        setPage("default");
      }
    });

    return() => {
      websocket.removeMsgEventListener(property, id);
    }

  }, []);

  const [page, setPage] = useState("default");
  useEffect(() => {
    const property = "state";

    const id = websocket.addMsgEventListener(property, msg => {
      console.log(msg);
      setPage(msg);
    });

    return () => {
      websocket.removeMsgEventListener(property, id);
    }
  }, []);

  const getPage = (page) => {

    switch (page) {
      case "admin": {
        return <AdminPage/>;
      }

      default: {
        return <HomePage login={workplace.login}/>
      }

    }

  };

  return (
      <div className="App">
        {console.log("render")}

          <Header workplace={workplace} websocket={websocket}/>

          {[page].map(page => {

            if (!workplace.login) {
              return <AuthPage key={"auth"} ws={websocket} />;
            }

            if (page === "default") {
              return <HomePage key={"welcome"} login={workplace.login}/>
            }

            if (page === "admin") {
              console.log("AdminPage");
              return <AdminPage websocket={websocket}/>
            }

            if (page === "products") {
              return <ProductsPage/>
            }

            return <ErrorPage/>
          })}
        <Footer/>

      </div>
  );

}

export default App;
