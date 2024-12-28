document
  .getElementById("phoneNumber")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

function sendMessage() {
  var phoneNumber = document.getElementById("phoneNumber").value;
  if (phoneNumber) {
    var url =
      "https://wa.me/+88" +
      phoneNumber +
      "?text=Assalamu Alaikum, Your AeroTrip agent application is approved. Please check your mail for password setup instruction and further details. For daily special group fare updates, please join our WhatsApp group: https://chat.whatsapp.com/HorwF3nkRfX2QE4mQjhK2M " +
      "Address: G-Nat Tower( Lift-5), 116/117 DIT Extension Road, Fakirapool, Dhaka-1000 Hotline: 09644677977";
    window.open(url, "_blank");
  } else {
    alert("Please enter a phone number");
  }
}
