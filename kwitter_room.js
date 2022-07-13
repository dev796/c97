
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA71HGnrlJyZdAKdUHFyt0eeT_rZ_-csOY",
      authDomain: "kwitter-86a5e.firebaseapp.com",
      databaseURL: "https://kwitter-86a5e-default-rtdb.firebaseio.com",
      projectId: "kwitter-86a5e",
      storageBucket: "kwitter-86a5e.appspot.com",
      messagingSenderId: "1005874558064",
      appId: "1:1005874558064:web:0b71fadd98eac2769470b5"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:" adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room name" ,name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}