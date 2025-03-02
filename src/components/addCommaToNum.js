export default function addCommaToNum(number) {
    const gotNum = String(number).split(""); 
    let num = [];
    let count = 0;
    if (gotNum.length > 3) {
        for (let i = (gotNum.length - 1); i >= 0; i--) {
            if (count === 3) {
                num.unshift(gotNum[i] + ",")
                count = 1
            } else {
                num.unshift(gotNum[i])
                count += 1
            }
        }
        
    } else num = gotNum;
    return num.join("");
}