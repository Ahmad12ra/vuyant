export default async function getUserOwnedGlasses(userId, callbackFunciton) {
    let arrayOfGlasses = [];
    try {
    const fet = await fetch("http://localhost/verant_apis/getUserOwnedGlasses/getUserOwnedGlasses.php", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({userId: userId})
    })
    const res = await fet.json();
    console.log(res)
    if (res.ownedGlassesNames) {
        console.log(res)
        Array.from(res.ownedGlassesNames).forEach(element => {
            arrayOfGlasses.push(element);
        });
    } else return false;
  } catch (e) {
    console.log("error fetching getUserOwnedGlassess" + e);
    return false;
  };

  callbackFunciton(arrayOfGlasses);

}