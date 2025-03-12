export default async function addUserToStateTable(userId) {
    try {
        const fet = await fetch("http://localhost/verant_apis/addUserToStatusTable.php", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({userId: userId})
        })
        const res = await fet.json();
    
        if (res.status === 200) {
          return true
        } else return false;
      } catch (e) {
        console.log("error connecting to addUserToStatusTable: " + e);
        return false;
      }
};