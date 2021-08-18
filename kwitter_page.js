var firebaseConfig = {
      apiKey: "AIzaSyCoMELURbGB7Fxrv9MjTqcF8yvYJwoxO1E",
      authDomain: "switter-the-swettest.firebaseapp.com",
      databaseURL: "https://switter-the-swettest-default-rtdb.firebaseio.com",
      projectId: "switter-the-swettest",
      storageBucket: "switter-the-swettest.appspot.com",
      messagingSenderId: "350133518585",
      appId: "1:350133518585:web:e86bf4fa606a5c9a866228"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  
//YOUR FIREBASE LINKS
room_name = localStorage.getItem("room_name" )
user_name = localStorage.getItem("user_name" )
function Send()
{
Msg = document.getElementById("Msg").value
firebase.database().ref(room_name).push({
    name : user_name,
    Msg : Msg,
    like : 0
});

document.getElementById("Msg").value = " ";

}






function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
like = message_data['like'];
Msg = message_data['Msg'];
name = message_data['name'];
name_tag = "<h4>"+ name + "<img src='Saveas.png' class='user_tick'> </h4>"
message_tag = "<h4 class= 'message_h4'>" + Msg + "</h4>"
button_tag = "<button class='btn btn-info' id=" + firebase_message_id + "value = "+ like + " onclick = 'update_likes(this.id)'>"
span_tag = "<span class= 'glyphicon glyphicon-thumbs-up '> like: " + like + "</span></button><hr>" 




row = name_tag +message_tag+button_tag+span_tag
document.getElementById("output").innerHTML += row; 






//End code
      } });  }); }
getData();
