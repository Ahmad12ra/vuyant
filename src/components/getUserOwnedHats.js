export default async function getUserOwnedHats(userId, callbackFunciton) {
    let arrayOfHats = [];
    try {
    const fet = await fetch("http://localhost/verant_apis/getUserOwnedHats/getUserOwnedHats.php", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({userId: userId})
    })
    const res = await fet.json();
    console.log(res)
    if (res.ownedHatNames) {
        console.log(res)
        Array.from(res.ownedHatNames).forEach(element => {
            arrayOfHats.push(element);
        });
    } else return false;
  } catch (e) {
    console.log("error fetching getUserOwnedHats" + e);
    return false;
  };

  callbackFunciton(arrayOfHats);

}