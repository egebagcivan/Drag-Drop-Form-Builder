async function test() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  document.getElementById("btnLogin").addEventListener("click", (ev) => {
    let features =
      "menubar=yes,location=yes,resizable=no,scrollbars=yes,status=no,height=500,width=400";
    let url = `https://www.jotform.com//platform/oauth.php?registrationType=oauth&client_id=Wordpress&access_type=full&auth_type=login&popup=1&ref=${encodeURIComponent(
      window.location.origin
    )}`;
    var other = window.open(url, "_blank", features);
  });
}
test();

window.addEventListener(
  "message",
  (event) => {
    console.log(event.data);
    if (event.data.type == "allowAuth") {
      console.log(window.location);
      other.close();
      window.close();
      window.location =
        window.location + "&accessToken=" + event.data.data.accessToken;
    }
  },
  "*"
);
