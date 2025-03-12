import { useRef, useState, useEffect, useMemo } from "react";
import addCharacterToUserInDb from "../../addCharacterToUserInDb";
import addCursorToUserInDb from "../../addCursorToUserInDb";
import addUserToStateTable from "../../addUserToStateTable.js";
import "../css/sign.css";

export default function Sign() {
  const checkboxRef = useRef(null);
  const errBox = useRef(null);
  const usernameInput = useRef(null);
  const pass = useRef(null);
  const emailInput = useRef(null);
  const signContainer = useRef(null);
  let [usernameState, setUsernameState] = useState("");
  let [passwordState, setPasswordState] = useState("");
  let [hidePass,setHidePass] = useState("password");
  let [signUp, setSignUp] = useState(false);
  let [signInClass, setsignInClass] = useState("active-title");
  let [signUpClass, setsignUpClass] = useState("");
  let emailValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  // fn for which title to glow signin or signup 
  function setGlowTitle(inOrUp) {
    if (inOrUp == "up") {setsignInClass(""); setsignUpClass("active-title")}
    else {setsignInClass("active-title"); setsignUpClass("")};
  }
  // changes the type of signing
  function signUpChoice(bool) {
    signContainer.current.style.cssText = "transform: scale(0.95); opacity: 0; transition: 0.3s; filter: blur(5px)";
    setTimeout(() => {
      signContainer.current.style.cssText = "transform: scale(1)";
      signContainer.current.style.cssText = "transform: scale(1); opacity: 1; transition: 0.3s";
    },500);
    setTimeout(() => {
      if(bool) {setSignUp(true); setGlowTitle("up")}
    else {setSignUp(false); setGlowTitle("in")};
    },300)
  }
  // function for including or excluding email input section
  function InsertEmail(props) {
    if (props.visible) {
      return (
        <div className="input-container">
          <input ref={emailInput} onBlur={(e) => {inputBlurFunc(e); emailCheck(e)}} onFocus={(e) => inputFocusFunc(e)} onInput={() => checkInputs()}/>
          <div onClick={(e) => e.target.previousElementSibling.focus()} className="placeholder">email</div>
        </div>
      )
    } else {
      return;
    }
  }
  // sign text component
  function SignButton({visible}) {
    if (visible) {
      return (
      <div className="agreements">
        <div ref={checkboxRef} className="checkbox " onClick={(e) => {if (e.currentTarget.classList.contains("hover-bg-white")) addUser(usernameInput.current.value, pass.current.value, emailInput.current.value);}}>
            <div className="sign-up-text-checkbox"><span>s</span><span>i</span><span>g</span><span className="space-right" >n</span><span>u</span><span>p</span></div>
            <div onClick={(e) => overlayClicked(e)} onMouseLeave={(e) => e.target.parentElement.classList.remove("checkbox-trans")}  onMouseOver={(e) => e.target.parentElement.classList.add("checkbox-trans")} className="overlay-checkbox"></div>
            <i class="fa-solid fa-check check-icon "></i>
        </div>
        <div className="checkbox-info">
          <span>
              I have read and accepted all terms and conditions 
          </span>
        </div>
      </div>
      )
    }
    else {
      return (
        <div className="agreements" style={{marginBottom: "0px"}}><div ref={checkboxRef}  onClick={(e) => {if (e.currentTarget.classList.contains("hover-bg-white")) signUser(usernameInput.current.value, pass.current.value);}} className="checkbox pointer-none checkbox-trans-color checkbox-trans hover-bg-white" style={{width: "80px", height: "36px"}}><div className="sign-up-text-checkbox"><span style={{color: "white", transform: "translateY(0%)"}}>s</span><span style={{color: "white", transform: "translateY(0%)"}}>i</span><span style={{color: "white", transform: "translateY(0%)"}}>g</span><span className="space-right" style={{color: "white", transform: "translateY(0%)"}}>n</span><span style={{color: "white", transform: "translateY(0%)"}}>i</span><span style={{color: "white", transform: "translateY(0%)"}}>n</span></div></div></div>
        )
    }
  }
  // checks username length
  useEffect(() => {
    if (usernameState.length > 30) setUsernameState(usernameState.slice(0,-1));
  }, [usernameState])

  // checks password length
  useEffect(() => {
    if (passwordState.length > 40) setPasswordState(passwordState.slice(0,-1));
  }, [passwordState])

  // inputs onfocus animation
  function inputFocusFunc(e) {
    if(e.target.value.length <= 0) e.target.nextElementSibling.classList.add("placeholder-trans")
  }

  // inputs onblur animation
  function inputBlurFunc(e) {
    if(e.target.value.length <= 0) e.target.nextElementSibling.classList.remove("placeholder-trans");
    checkInputs();
    }
    // if it is signIn the animation would happen staright away
    if (!signUp) {
      setTimeout(() => {
        checkboxRef.current.onmouseover = () => {let spans = checkboxRef.current.children[0].children;
          for (let i = 0; i < spans.length; i++) {
            setTimeout(() => spans[i].style.cssText = "transform: translateY(0%) !important; color: var(--sign-top-design-color)",i * 50)
          };}
    
          // makes the color of the text go to white onleave
          checkboxRef.current.onmouseleave = () => {let spans = checkboxRef.current.children[0].children;
            for (let i = 0; i < spans.length; i++) {
              setTimeout(() => spans[i].style.cssText = "transform: translateY(0%) !important; color:white",i * 50)
            };}
      },0)
    }
      
    
  // check box onclick function transition 
  function overlayClicked(e) {
    // prevents clicking 
    pointerNoneButton(true);
    // allows clicking and this is a continue for the func before it (look up)
    setTimeout(() => checkInputs(),700)
    // makes submit button go full width
    e.target.parentElement.style.cssText = "width: 100%;";
    // changes the background color
    e.target.parentElement.classList.add("checkbox-trans-color");
    // this checks bec when second clicking there is no nexSibling
    if (e.target.nextElementSibling) e.target.nextElementSibling.classList.add("icon-down-trans");
    // changes background color of the sign to transparent
    e.target.addEventListener("mouseleave", (e) => e.target.parentElement.classList.add("checkbox-trans"))
    if (e.target.nextElementSibling) setTimeout(e.target.nextElementSibling.remove(),300)
    // this is the letters up trans when onclick
    setTimeout(() => {
      let spans = e.target.previousElementSibling.children;
      for (let i = 0; i < spans.length; i ++) {
        setTimeout(() => spans[i].style.cssText = "transform: translateY(0%) !important; color: white",i * 50)
      };
      
    },300)
    // adjusts the width height and trans of the button
    setTimeout(() => {e.target.parentElement.style.cssText = "width: 80px; height: 36px;"; e.target.parentElement.classList.add("hover-bg-white")},450);
    // makes the color of the text inside the button to convert to var(--main-color) when mouse over
    checkboxRef.current.onmouseover = () => {let spans = checkboxRef.current.children[0].children;
      for (let i = 0; i < spans.length; i++) {
        setTimeout(() => spans[i].style.cssText = "transform: translateY(0%) !important; color: var(--sign-top-design-color)",i * 50)
      };}

      // makes the color of the text go to white onleave
      checkboxRef.current.onmouseleave = () => {let spans = checkboxRef.current.children[0].children;
        for (let i = 0; i < spans.length; i++) {
          setTimeout(() => spans[i].style.cssText = "transform: translateY(0%) !important; color:white",i * 50)
        };}

    let style = "text-shadow: 0 0 20px white; opacity: 0;";
    e.target.parentElement.nextElementSibling.style.cssText = style;
    setTimeout(() => {e.target.parentElement.nextElementSibling.style.cssText = style + "font-size: 0;"; e.target.parentElement.parentElement.style.cssText = "margin-bottom: 0;"},400)
    // remove the overlay cover so when hovering we are going to be hovering on the main element which is div.checkbox
    setTimeout(() => e.target.remove(),600)
  }
  // this is a function that prevents or allow the clicking on the submit button
  function pointerNoneButton(state) {
    state ? checkboxRef.current.classList.add("pointer-none") : checkboxRef.current.classList.remove("pointer-none")
  }

  // starts when there is an issue with the inputs 
  function showError(text) {
    errBox.current.textContent = text;
    errBox.current.style.cssText = "font-size: 18px;";
    setTimeout(() => errBox.current.style.cssText = "",2000)
  }

  function checkInputs() {
    let email1 = signUp ? (emailInput.current.value.trim().length < 1) : false;
    let email2 = signUp ? !emailInput.current.value.trim().match(emailValidation) : false; 
    let userLen = signUp ? usernameInput.current.value.trim().length <= 3 : false;
    let passLen = signUp ? pass.current.value.trim().length <= 8 : false;
    let checkBox = signUp ? checkboxRef.current.classList.contains("hover-bg-white") : true;
    if (
      (usernameInput.current.value.trim().length < 1 ||
      userLen||
      email1 ||
      email2||
      pass.current.value.trim().length < 1 ||
      passLen) &&
      checkBox
    ) pointerNoneButton(true);
    else pointerNoneButton(false);
  }

  // username length checking
  function usernameBlur(e) {
    if (signUp) {
      if (e.target.value.trim().length < 1) showError("username is required")
        else if (e.target.value.trim().length <= 3) showError("Username must be more than 3 characters")
    }
  }

  // email input checking on blur
  function emailCheck(e) {
    if (signUp) {
      if (e.target.value.trim().length < 1) showError("Email is required")
        else if (!e.target.value.trim().match(emailValidation)) showError("email not valid")
    }
  }

  // password length checking
  function passBlur(e) {
    if (signUp) {
      if (e.target.value.trim().length < 1) showError("Password is required")
        else if (e.target.value.trim().length <= 8) showError("Password must be more than 8 characters")
  }
}

  // eye container animation onclick
  function eyeContainerClicked(e) {
    // moves the line that is over the eye
    e.currentTarget.lastElementChild.classList.toggle("cross-eye-clicked");
    // sets attribute to let the password know its action
    if (e.currentTarget.lastElementChild.classList.contains("cross-eye-clicked")) {
      setHidePass("text")
    } else {
      setHidePass("password")
    }
    // changes bg-color 
    e.currentTarget.lastElementChild.classList.contains("cross-eye-clicked") ? e.currentTarget.classList.add("eyeIcon-bg-white") : e.currentTarget.classList.remove("eyeIcon-bg-white")
    // checks if there is any animation applied
    if (!e.currentTarget.lastElementChild.classList.contains("cross-eye-clicked")) e.currentTarget.firstElementChild.style.cssText = "";
    else {
      // moves the eye down with rotate
      e.currentTarget.firstElementChild.style.cssText = "transform: translate(-8px, 8px) rotate(280deg);";
      // the thing is stored bec after timeout it becomes undefined
      const el = e.currentTarget.firstElementChild;
      const las = e.currentTarget.lastElementChild;
      // this is the second part of the eye animation
      setTimeout(_ => {if (las.classList.contains("cross-eye-clicked")) el.style.cssText = "transform: translate(0px, 0px) rotate(360deg); transition: 0.3s; color: var(--sign-top-design-color)"},400);
    }
    
  }

  const token = new Date().getTime().toString(16);


  async function addUserToVerantsTableInDb(userId, verantsCount) {
    try {
      const fet = await fetch("http://localhost/verant_apis/addUserToVerantsTable.php", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({userId: userId, verantsCount: verantsCount})
      })
      const res = await fet.json();
  
      if (res.status === 200) {
        return true
      } else return false;
    } catch (e) {
      console.log("error brother occured!" + e);
      return false;
    }
  }

  async function addUserToCostumeTableInDb(userId) {
    try {
      const fet = await fetch("http://localhost/verant_apis/addUserToCostumeTable.php", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({userId: userId})
      })
      const res = await fet.json();
  
      if (res.status === 200) {
        return true
      } else return false;
    } catch (e) {
      console.log("error brother occured!" + e);
      return false;
    }
  }

  async function addUserToLevelsTableInDb(userId) {
    try {
      const fet = await fetch("http://localhost/verant_apis/addUserToLevels.php", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({userId: userId})
      })
      const res = await fet.json();
  
      if (res.status === 200) {
        return true
      } else return false;
    } catch (e) {
      console.log("error brother occured!" + e);
      return false;
    }
  }

  async function getUserId(username, signUp) {
    try {
    const fet = await fetch("http://localhost/verant_apis/getUserIdByName.php", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({username: username})
    })
    const res = await fet.json();
    if (res.userId) {
      window.localStorage["userId"] = res.userId;
      
      if (signUp) {
        if (await addUserToLevelsTableInDb(res.userId)) {
          
          if (await addUserToCostumeTableInDb(res.userId)) {
            if (await addUserToVerantsTableInDb(res.userId, 0)) {
              if (await addCharacterToUserInDb(res.userId, 1)) {
                if (await addCursorToUserInDb(res.userId, 1)) {
                  if (await addUserToStateTable(res.userId)) {
                    return true;
                  }else {
                    return false
                  }
                } else {
                  return false;
                }
              } else {
                return false;
              }
              
            } else {
              return false
            }
          } else {
            return false;
          }
          
        } else {
          
          return false;
        }
      } else return true;

    } else return false;
  } catch (e) {
    console.log("error brother occured!" + e);
    return false;
  }
}

async function addUser(username, password, email) {
  console.log("addUser")
    try {
    const fet = await fetch("http://localhost/verant_apis/sign_up_api.php", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({username: username, password: password, email: email, token: token})
    })
    const res = await fet.json();
    if(res.message === "already exists") showError("user already exists");
    else if (res.status == 404) showError("error occured"); 
    else if (res.status == 500) showError("Internal Server Error"); 
    else if (res.message === "added") {
      window.localStorage["token"] = token;
      if (await getUserId(username, true)) {
            window.location.reload();
          } else {
        showError("error occured")
      }
      
      
    };
  } catch (e) {
    console.log("error brother occured!")
  }
}

async function signUser(username, password) {
  try {
    const fet = await fetch("http://localhost/verant_apis/sign_in_api.php", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({username: username, password: password})
    })
    const res = await fet.json();
    if(res.message !== "valid login") showError("unvalid username or password");
    else if (res.message === "valid login") {
      if (await getUserId(username, false)) {
        window.localStorage["token"] = res.token;
        window.location.reload()
      } else {
        showError("error occured")
      }
    };
  } catch (e) {
    console.error("error brother occured!");
  }
}




// showError 

  return (
    <div className="sign-main-full-container">
      <div className="top-right-design">
        <div className="top-right-design-square"></div>
        <div className="top-right-design-circle top-right-design-circle1"></div>
        <div className="top-right-design-circle top-right-design-circle2"></div>
        <div className="top-right-design-circle top-right-design-circle3"></div>
        <div className="top-right-design-circle top-right-design-circle4"></div>
        <div className="top-right-design-circle top-right-design-circle5"></div>
        <div className="top-right-design-circle top-right-design-circle6"></div>
      </div>
      <div className="container">
        <div ref={signContainer} className="sign-container">
          <div ref={errBox} className="err-popup"></div>
          <div className="sign">
            <div className="title-container">
              <div onClick={() => {signUpChoice(false)}} className={signInClass + " title"} >Sign In</div>
              <div onClick={() => {signUpChoice(true)}} className={signUpClass + " title"} >Sign Up</div>
            </div>
            <div className="information">
              <div className="input-container">
                <input ref={usernameInput} onBlur={(e) => {inputBlurFunc(e); usernameBlur(e)}} onFocus={(e) => inputFocusFunc(e)}  value={usernameState} onInput={(e) => {setUsernameState(e.target.value); checkInputs();}} />
                <div onClick={(e) => e.target.previousElementSibling.focus()} className="placeholder">username</div>
              </div>
              {useMemo(() => <InsertEmail visible={signUp} />,[signUp])}
              <div className="input-container">
                <input type={hidePass} ref={pass} onBlur={(e) => {inputBlurFunc(e); passBlur(e)}} onFocus={(e) => inputFocusFunc(e)} value={passwordState} onInput={(e) => {setPasswordState(e.target.value); checkInputs();}} />
                <div onClick={(e) => e.target.previousElementSibling.focus()} className="placeholder">password</div>
                <div className="eyeIcon" onClick={(e) => eyeContainerClicked(e)}>
                  <i class="fa-solid fa-hurricane eye-icon"></i>
                  <div className="cross-eye"></div>
                </div>
              </div>
            </div>
              {useMemo(() => <SignButton visible={signUp} />,[signUp])}
          </div>
        </div>
      </div>
    </div>
  );
}

