export default async function getUserOwnedCharacters(userId, callbackFunciton) {
        let arrayOfCharacters = [];
        try {
        const fet = await fetch("http://localhost/verant_apis/getUserOwnedCharacters/getUserOwnedCharacters.php", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({userId: userId})
        })
        const res = await fet.json();
        if (res.ownedCharacterNames) {
            Array.from(res.ownedCharacterNames).forEach(element => {
              arrayOfCharacters.push(element);
            });
        } else return false;
      } catch (e) {
        console.log("error brother occured!" + e);
        return false;
      };

      callbackFunciton(arrayOfCharacters);

}