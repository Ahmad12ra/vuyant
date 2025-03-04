export default async function getUserOwnedCharacters(userId) {
        try {
        const fet = await fetch("http://localhost/verant_apis/getUserOwnedCharacters.php", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({userId: userId})
        })
        const res = await fet.json();
        if (res.ownedCharacterNames) {
            console.log(res.ownedCharacterNames);
        } else return false;
      } catch (e) {
        console.log("error brother occured!" + e);
        return false;
      }
}