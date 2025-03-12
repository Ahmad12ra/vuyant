export default async function updateUserState(userId, newState) {
    try {
        const fet = await fetch("http://localhost/verant_apis/updateUserState.php", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({userId: userId, newState: newState})
        })
        const res = await fet.json();
        console.log(res);
        if (res.status === 200) {
          return true
        } else return false;
      } catch (e) {
        console.error("error fetching updateUserState.php" + e);
        return false;
      }
}