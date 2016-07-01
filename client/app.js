var httpRequest = new XMLHttpRequest();
var button = document.getElementById('button')
var bucket = document.getElementById('bucket')
var button2 = document.getElementById('button2')
var bucket2 = document.getElementById('bucket2')

button.addEventListener("click", function(event) {
httpRequest.onreadystatechange = function(){
if(httpRequest.readyState === 4){
  if(httpRequest.status < 400){
    var object = JSON.parse(httpRequest.responseText)
    for (var i = 0; i < object.users.length; i++) {
      option = document.createElement("li")
      bucket.appendChild(option)
      option.innerHTML = object.users[i].first_name + " " + object.users[i].last_name;
          }
        }
      }
    }

    httpRequest.open('GET', 'http://localhost:3000/users')
        httpRequest.send();
    })



button2.addEventListener("click", function(event) {
httpRequest.onreadystatechange = function(){
  if(httpRequest.readyState === 4){
    if(httpRequest.status < 400){
      var object2 = JSON.parse(httpRequest.responseText)
      for (var i = 0; i < object2.users.length; i++) {
        console.log(object2.users[i].user_data)
        option2 = document.createElement("li")
        bucket2.appendChild(option2)
        option2.innerHTML = object2.users[i].user_data.first_name + " " + object2.users[i].user_data.last_name;
            }
          }
        }
      }

      httpRequest.open('GET', 'http://localhost:3000/')
      httpRequest.send();
      })
