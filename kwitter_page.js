//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");

console.log("User Name: "+  user_name);
console.log("Room Name: "+  room_name);

function send(){

      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0
      });
      document.getElementById("msg").value ="";      
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>&nbsp;Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      
      window.location="index.html";
      
      
      }
      