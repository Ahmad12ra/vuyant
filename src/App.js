import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import HomePage from "./components/home_comp/js/home.js";
import Sign from "./components/sign_comp/js/sign.js";
import Err from "./components/err_comp/js/index.js";
import ShopPage from "./components/shop_page/js/shop.js";
import "./css/all.css";
import "./app.css";

function App() {
  const mainCursorContainer = useRef(null);
  const websiteMainContainer = useRef(null);

  let [availableToken, setAvailableToken] = useState(false);

  const newToken = new Date().getTime().toString(16);

  function updateToken() {
    window.localStorage.token = newToken;
  }

  async function signUser(username, token) {
    try {
      const fet = await fetch(
        "http://localhost/verant_apis/token_checker_&_updater.php",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            username: username,
            token: token,
            newToken: newToken,
          }),
        }
      );
      const res = await fet.json();
      if (res.message === "valid quick login") {
        updateToken();
        return true;
      } else return false;
    } catch (e) {
      return false;
    }
  }

  function tokenChecker() {
    signUser(
      window.localStorage["username"],
      window.localStorage["token"]
    ).then((res) => {
      setAvailableToken(res);
    });
  }

  useEffect(() => {
    tokenChecker();
  }, []);
  let y;
  let x;
  window.onmousemove = (e) => {
    y = e.pageY;
    x = e.pageX;
    mainCursorContainer.current.style.cssText = `top: ${y - 10}px; left: ${x - 10}px`;

    
  };

  return (
    <div ref={websiteMainContainer}>
      <div ref={mainCursorContainer} className="cursor-main-container"></div>
      <BrowserRouter>
        <Routes>
          {availableToken ? (
            <Route path="/" element={<HomePage />} />
          ) : (
            <Route path="/" element={<Sign />} />
          )}
          {availableToken ? (
            <Route path="/shop" element={<ShopPage />} />
          ) : (
            <Route path="/shop" element={<Sign />} />
          )}
          <Route path="*" element={<Err />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
