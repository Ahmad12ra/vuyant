export default async function getUserOwnedCursors(userId, callbackFunciton) {
    let arrayOfCursors = [];
    try {
    const fet = await fetch("http://localhost/verant_apis/getUserOwnedCursors.php", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({userId: userId})
    })
    const res = await fet.json();
    if (res.ownedCursorNames) {
        Array.from(res.ownedCursorNames).forEach(element => {
            arrayOfCursors.push(element);
        });
        callbackFunciton(arrayOfCursors);
    } else return false;
  } catch (e) {
    console.log("error fetching getUserOwnedCursors" + e);
    return false;
  };


}