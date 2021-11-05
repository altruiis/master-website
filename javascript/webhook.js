function sendMessage() {
  var toSend = document.getElementById("messagetbox").value;
     const request = new XMLHttpRequest();
/*request.open("POST", "https://discord.com/api/webhooks/906021929083867156/efqW_8ZPn_fLm3SeE1mdKzaeFiCCWtj-D0t2a-wI2g7RuZw_DWoERNt1mkUPmK-7PQDb");*/
     request.open("POST", "https://discord.com/api/webhooks/906001176754024519/M4nhfkA_VRtyoAGM133i2vxKxg1a1YhQE03Exqmwy6vOXO920uKP170iIxEaCVPnOAyV");
     request.setRequestHeader('Content-type', 'application/json');
     const params = {
       username: "Shoutbox",
       avatar_url: "https://i.imgur.com/D0bRgiJ.jpeg",
       content: toSend
     }
     request.send(JSON.stringify(params));
     chatLog(document.getElementById('messagetbox').value);
     document.getElementById('messagetbox').value = "";
   }

function chatLog(data) {
if(document.getElementById('chatlog').value === "") {
  document.getElementById('chatlog').value = "YOU: " + data;
} else {
  document.getElementById('chatlog').value = document.getElementById('chatlog').value + "\nYOU: " + data;
}
}

function onKeyDown() {
  var keyCode = event.keyCode;
  if(keyCode === 13) {
    sendMessage();
  }
}
