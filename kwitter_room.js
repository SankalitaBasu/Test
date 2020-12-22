
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA7x3RBKNQaoAueLYe6yAzcJTtz5utj2WQ",
      authDomain: "kwitter-f66d4.firebaseapp.com",
      databaseURL: "https://kwitter-f66d4.firebaseio.com",
      projectId: "kwitter-f66d4",
      storageBucket: "kwitter-f66d4.appspot.com",
      messagingSenderId: "746155062552",
      appId: "1:746155062552:web:b6184cc2614bab09b31a6d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"



});

localStorage.setItem("room_name",room_name);

console.log("Room Name: "+ room_name);
window.location="kwitter_page.html";





}
function getData(){
      firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
Room_names=childKey;
console.log("room name- "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      });
});
}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


function logOut(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

window.location="index.html";


}



