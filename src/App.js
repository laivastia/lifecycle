function App() {
  window.onload = function () {
    if (window.Notification) {
      Notification.requestPermission();
    }
  };

  const calculate = () => {
    setTimeout(function () {
      notify();
    }, 5000);
  };

  function notify() {
    if (Notification.permission !== "granted") {
      alert("notification is disabled");
    } else {
      var notification = new Notification("Notification title", {
        icon: "http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",
        body: "Notification text",
      });

      notification.onclick = function () {
        window.open("/");
      };
    }
  }

  // function notifyMe() {
  //   // Let's check if the browser supports notifications
  //   if (!("Notification" in window)) {
  //     alert("This browser does not support desktop notification");
  //   }
  // }

  return <button onClick={calculate}>calculate</button>;
}

export default App;
