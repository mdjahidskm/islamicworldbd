// ওয়েবসাইট খোলার সাথে সাথে সালাম দেখাবে
window.onload = function() {
  alert("আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ");
}

// শিরোনামের রং পরিবর্তন
function changeColor() {
  const colors = ["red", "green", "blue", "purple", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("title").style.color = randomColor;
}

// সময় দেখানোর ফাংশন
function showTime() {
  const now = new Date();
  document.getElementById("time").innerHTML =
    "বর্তমান সময়: " + now.toLocaleTimeString();
  document.getElementById("time").style.color = "darkgreen";
}
