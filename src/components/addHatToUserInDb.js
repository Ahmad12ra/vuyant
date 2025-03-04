export default async function addHatToUserInDb(userId, hatId) {
    try {
      const fet = await fetch("http://localhost/verant_apis/addHatToUser.php", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({userId: userId, hatID: hatId})
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