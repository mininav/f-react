import React, {useEffect, useState} from 'react';
import './App.css';
import AdminPage from "./pages/AdminPage"
import Websocket from "./middleware/Websocket";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import MeasuresPage from "./pages/MeasuresPage";
import WaitPage from "./pages/WaitPage";

/**
 * @return {null}
 */
function App({websocket}) {

  const [workplace, setWorkplace] = useState({});
  useEffect(() => {
    const unsubscribe = websocket.addMsgEventListener("workplace", workplace => {

      setWorkplace(workplace);

      if (!workplace.login) {
        setPage("default");
      }
    });

    websocket.start();

    return () => {
      websocket.stop();
      unsubscribe();
    }
  }, []);


  const [page, setPage] = useState("default");
  useEffect(() => {
    return websocket.addMsgEventListener("state", msg => {
      console.log(msg);
      setPage(msg);
    });
  }, []);

  const getPage = (page) => {

    if (!workplace.login) {
      return <AuthPage websocket={websocket} />;
    }

    switch (page) {
      case "admin": {
        return <AdminPage websocket={websocket}/>;
      }

      case "products": {
        return <ProductsPage websocket={websocket}/>
      }

      case "measures": {
        return <MeasuresPage websocket={websocket}/>
      }

      default: {
        return <HomePage login={workplace.login}/>
      }
    }
  };

  if (!workplace.id) {
    return (
        <div className="App">
          <WaitPage/>
        </div>
    );
  }

  return (
      <div className="App">
          <Header workplace={workplace} websocket={websocket}/>
          {getPage(page)}
        <Footer/>
      </div>
  );

}

export default App;
