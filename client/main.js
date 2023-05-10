import "./style.css";

const ws = new WebSocket("ws://localhost:3050");

const mForm = document.getElementById("mForm");
const formInput = document.getElementById("formInput");
// submit CTA 
mForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ws.send(formInput.value);
  formInput.value = ""
});

// ws message 
ws.addEventListener("message", (e) => {
  console.log(e.data);
});

// ws close
ws.addEventListener("close", (e) => {
  console.log("Connection closed");
})

// ws on message
ws.onmessage = function(event) {
  console.log('Received message:', event.data);
  // update ul list with event data
  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(event.data));
  ul.appendChild(li);
};


