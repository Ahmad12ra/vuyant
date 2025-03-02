export default async function addUserToFriendsTableInDb(userId, friendId) {
    try {
      const fet = await fetch("http://localhost/verant_apis/addUserToCostumeTable.php", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({userId: userId, friendId: friendId})
      })
      const res = await fet.json();
  
      console.log(res)
  
      if (res.status === 200) {
        return true
      } else return false;
    } catch (e) {
      console.log("error brother occured!" + e);
      return false;
    }
  }