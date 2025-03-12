export default async function getUserCostume(userId, callbackFunc) {
    try {
        const fet = await fetch("http://localhost/verant_apis/getUserCostume.php", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({userId: userId})
        })
        const res = await fet.json();
        if (res.userCostume) {
            callbackFunc(res.userCostume);
        } else return false;
      } catch (e) {
        console.log("error brother occured!" + e);
        return false;
      };
}