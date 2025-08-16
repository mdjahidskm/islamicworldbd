// ওয়েবসাইট খোলার সাথে সাথে সালাম দেখাবে
window.onload = function() {
  alert("আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ");
  showSlides();  // slider start
  showDate();    // date show
  setInterval(showClock, 1000);  // clock
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

// 1. বাটন ক্লিক করলে মেসেজ
function showMessage() {
  alert("আসসালামু আলাইকুম ওয়ারাহমাতুল্লাহ");
}

// 2. ইউজারের নাম জিজ্ঞেস করে ওয়েলকাম মেসেজ
function askName() {
  let name = prompt("আপনার নাম লিখুন:");
  if (name) { alert("স্বাগতম, " + name + " ভাই/আপু!"); }
}

// 3. কনটেন্ট পরিবর্তন
function changeText() { document.getElementById("change").innerHTML = "🌙 আলহামদুলিল্লাহ, টেক্সট পরিবর্তন হয়েছে!"; }
function changeImage() { document.getElementById("myImg").src = "https://via.placeholder.com/250x150?text=নতুন+ছবি"; }
function showHidden() { document.getElementById("hiddenText").style.display = "block"; }

// 4. ফর্ম ভ্যালিডেশন
function validateForm() {
  let user = document.forms["loginForm"]["username"].value;
  let pass = document.forms["loginForm"]["password"].value;
  if (user == "" || pass == "") { alert("সব ঘর পূরণ করুন!"); return false; }
  return true;
}

// 5. রিয়েল টাইম ঘড়ি ও আজকের তারিখ
function showClock() { document.getElementById("clock").innerHTML = "⏰ " + new Date().toLocaleTimeString(); }
function showDate() { document.getElementById("date").innerHTML = "📅 " + new Date().toLocaleDateString("bn-BD"); }

// 6. টেক্সট ফেইড ইন/আউট
function fadeText() {
  let text = document.getElementById("fadeText");
  text.style.transition = "opacity 2s";
  text.style.opacity = (text.style.opacity == 0 ? 1 : 0);
}

// 7. ইমেজ স্লাইডার
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

// 8. স্ক্রল স্মুথ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// 9. কুরআন API (আল-কাহফ আয়াত ১)
fetch("https://api.alquran.cloud/v1/ayah/18:1")
  .then(res => res.json())
  .then(data => { document.getElementById("quranAyah").innerHTML = "📖 " + data.data.text; });
