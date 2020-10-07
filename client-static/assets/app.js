document.addEventListener("DOMContentLoaded", function(_event) {
  const logContainer = document.getElementById("LogContainer");
  let socket = null
  let counter = 0

  const put = (message) => {
    let messageItem = document.createElement("p");
    let prompt = document.createElement("span");

    prompt.innerText = `${counter}) >`
    messageItem.innerText = message;

    messageItem.prepend(prompt)

    logContainer.prepend(messageItem);
    counter++;
  }

  const clear = () => {
    while(logContainer.firstChild) logContainer.removeChild(logContainer.firstChild);
    if ( socket ) socket.disconnect();

    socket = null;
    counter = 0;
  }

  const connect = () => {
    clear()

    const host = document.getElementById("socket-host").value;
    const port = document.getElementById("socket-port").value;

    socket = new Phoenix.Socket(`ws://${host}:${port}/socket`);

    socket.connect();

    let channel = socket.channel("room:device", {})

    channel.on("new_msg", payload => {
      put(`payload : ${JSON.stringify(payload)}`)
    })

    channel.join()
      .receive("ok", resp => { put(`Joined successfully ${JSON.stringify(resp)}`) })
      .receive("error", resp => {put(`Unable to join ${resp}`) })
  }

  document.getElementById("connect-btn")
          .addEventListener("click", connect);
});
