import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef, createContext } from "react";
import HomePage from "./components/home_comp/js/home.js";
import Sign from "./components/sign_comp/js/sign.js";
import Err from "./components/err_comp/js/index.js";
import ShopPage from "./components/shop_page/js/shop.js";
import "./css/all.css";
import "./app.css";
import Vpass from "./components/vPass_comp/js/vPass.js";
import SkinsPage from "./components/skin_page_comp/js/skin_page.js";
import RankPage from "./components/rank_page_comp/js/rank.js";
import VerantsPage from "./components/verants_page_comp/js/verants.js";
import ChallengesPage from "./components/challenges_page_comp/js/challenges.js";
export const UseContextValues = createContext();

function App() {
  const mainCursorContainer = useRef(null);
  const websiteMainContainer = useRef(null);
  let [username, setUsername] = useState("Unknown");
  let [userLevel, setUserLevel] = useState(1);
  let [currentXp, setCurrentXp] = useState(0);
  let [goalXp, setGoalXp] = useState(2000);
  let [validUser, setValidUser] = useState({valid: false});
  let [availableToken, setAvailableToken] = useState(false);
  let [updateVerantsCount, setUpdateVerantsCount] = useState(0);
  let [userId, setUserId] = useState(null);
  let [userVerantsAmount, setUserVerantsAmount] = useState("----")

  const newToken = new Date().getTime().toString(16);

  function updateToken() {
    window.localStorage.token = newToken;
  }


  useEffect(() => {
    if (userId !== null) {
      getVerantsAmount(userId)
    }
  }, [updateVerantsCount,userId])

  useEffect(() => {
  if (validUser.valid) {
    (async function getUserLevel() {
      try {
        const fet = await fetch(
          "http://localhost/verant_apis/getUserLevel.php",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ userId: validUser.userId}),
          }
        );

        const res = await fet.json();
        
        if (res.goalLevel) {
          setUserLevel(res.goalLevel - 1)
          setCurrentXp(res.currentXp)
          setGoalXp(res.goalXp)
        }

      } catch (e) {
        console.log("error brother occured!" + e);
        return false;
      }
    }())
  }
}, [validUser])

  
  
async function getVerantsAmount(userId) {

  try {
      const fet = await fetch("http://localhost/verant_apis/getVerantsAmount.php", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({userId: userId})
      })
      const res = await fet.json();
      console.log(res)
      if (res.verantsAmount >= 0) {
        setUserVerantsAmount(res.verantsAmount)
          return true;
      } else return false;
    } catch (e) {
      console.log("error brother occured!" + e);
      return false;
    }
} 

  // gets user name from his id
  async function getUserName(userId) {
    try {
      const fet = await fetch(
        "http://localhost/verant_apis/getUsernameFromId.php",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            userId: userId
          }),
        }
      );
      const res = await fet.json();
      if (res.username) 
        setUsername(res.username);
    } catch (e) {
      return false;
    }
  }

  // gets user name from his id
  useEffect(() => {
    getUserName(window.localStorage["userId"]);
  }, [])

  async function signUserWithId(userId, token) {
    try {
      const fet = await fetch(
        "http://localhost/verant_apis/token_checker_&_updater.php",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            userId: userId,
            token: token,
            newToken: newToken,
          }),
        }
      );
      const res = await fet.json();
      if (res.message === "valid quick login") {
        setValidUser({valid: true, userId: userId});
        updateToken();
        setUserId(userId);
        return true;
      } else return false;
    } catch (e) {
      return false;
    }
  }

  function tokenChecker() {
    signUserWithId(
      window.localStorage["userId"],
      window.localStorage["token"]
    ).then((res) => {
      setAvailableToken(res);
    });
  }

  useEffect(() => {
    tokenChecker();
  }, []);

  let x = 0,
    y = 0;
  let isMoving = false;

  const handleMouseMove = (e) => {
    x = e.pageX;
    y = e.pageY;

    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updateCursor);
    }
  };

  const updateCursor = () => {
    if (mainCursorContainer.current) {
      mainCursorContainer.current.style.transform = `translate(${x - 10}px, ${
        y - 10
      }px)`;
    }
    isMoving = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  let providerValues = {
    username: username,
    userLevel: userLevel,
    currentXp: currentXp,
    goalXp: goalXp,
    userVerantsAmount: userVerantsAmount,
    setUserId: setUserId,
    setUpdateVerantsCount: setUpdateVerantsCount,
    setUserVerantsAmount: setUserVerantsAmount,
   }
    
  

  return (
    <div ref={websiteMainContainer}>
      <div ref={mainCursorContainer} className="cursor-main-container"></div>
      <UseContextValues.Provider value={providerValues}>
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
          {availableToken ? (
            <Route path="/vPass" element={<Vpass />} />
          ) : (
            <Route path="/vPass" element={<Sign />} />
          )}
          {availableToken ? (
            <Route path="/skin" element={<SkinsPage />} />
          ) : (
            <Route path="/skin" element={<Sign />} />
          )}
          {availableToken ? (
            <Route path="/rank" element={<RankPage />} />
          ) : (
            <Route path="/rank" element={<Sign />} />
          )}
          {availableToken ? (
            <Route path="/verants" element={<VerantsPage />} />
          ) : (
            <Route path="/verants" element={<Sign />} />
          )}
          {availableToken ? (
            <Route path="/challenges" element={<ChallengesPage />} />
          ) : (
            <Route path="/challenges" element={<Sign />} />
          )}
          <Route path="*" element={<Err />} />
        </Routes>
      </BrowserRouter>
      </UseContextValues.Provider >
    </div>
  );
}

export default App;
