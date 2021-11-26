
const superbowlWin = (Array) => {
    const obj = Array.find((record) => record.result === "W");
    if (obj !== undefined) {
        return obj.year;
    } else {
        return undefined;
    }  
};