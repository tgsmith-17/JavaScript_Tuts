// alert("This might be a little hard on the eyes\nDo you wish to proceed?")
// At 1:43:10 on tutorial

let testUser = "bouchard";

let getUser = prompt("Enter Username:");

if(getUser != testUser) {
    alert("ACCESS DENIED");
    window.location.assign("https://dood.al/pinktrombone/");
}
