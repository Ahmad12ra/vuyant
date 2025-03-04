export default async function addCursorToUserInDb(userId, cursorId) {
    try {
      const fet = await fetch("http://localhost/verant_apis/addCursorToUser.php", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({userId: userId, cursorId: cursorId})
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