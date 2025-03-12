export default async function getUserFriends(userId, callbackFunciton) {
    let arrayOfFriends = [];
    try {
    const fet = await fetch("http://localhost/verant_apis/getUserFriendIds.php", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({userId: userId})
    })
    const res = await fet.json();
    console.log(res)
    if (res.status === 200) {
        if (res.friendIds.length > 0) {
            Array.from(res.friendIds).forEach(element => {
                arrayOfFriends.push(element);
              });
        }
        callbackFunciton(arrayOfFriends);
    } else return false;
  } catch (e) {
    console.error("An error occurred while fetching user friends: " + e);
    return false;
  };

}