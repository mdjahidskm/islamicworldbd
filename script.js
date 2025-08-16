// ওয়েবসাইট খোলার সাথে সাথে সালাম দেখাবে
window.onload = function() {
  alert("🌙 আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ 🌸");
}

// শিরোনামের রং পরিবর্তন
function changeColor() {
  const colors = ["#e74c3c", "#27ae60", "#2980b9", "#8e44ad", "#f39c12"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("title").style.color = randomColor;
  document.getElementById("title").style.textShadow = "2px 2px 5px #555";
}

// সময় দেখানোর ফাংশন
function showTime() {
  const now = new Date();
  document.getElementById("time").innerHTML =
    "🕒 বর্তমান সময়: " + now.toLocaleTimeString();
  document.getElementById("time").style.color = "#2c3e50";
  document.getElementById("time").style.fontWeight = "bold";
  document.getElementById("time").style.textShadow = "1px 1px 3px #aaa";
}

// 1. বাটন ক্লিক করলে মেসেজ
function showMessage() {
  alert("📢 আসসালামু আলাইকুম ওয়ারাহমাতুল্লাহ");
}

// 2. ইউজারের নাম জিজ্ঞেস করে ওয়েলকাম মেসেজ
function askName() {
  let name = prompt("👤 আপনার নাম লিখুন:");
  if (name) {
    alert("🌸 স্বাগতম, " + name + " ভাই/আপু! 🌙");
  }
}

// 3. কনটেন্ট পরিবর্তন
function changeText() {
  document.getElementById("change").innerHTML = "🌙 আলহামদুলিল্লাহ, টেক্সট পরিবর্তন হয়েছে! ✨";
  document.getElementById("change").style.color = "#d35400";
  document.getElementById("change").style.fontWeight = "bold";
  document.getElementById("change").style.textShadow = "1px 1px 2px #555";
}

function changeImage() {
  document.getElementById("myImg").src = "https://via.placeholder.com/250x150?text=🌟+নতুন+ছবি";
  document.getElementById("myImg").style.border = "3px solid #2980b9";
  document.getElementById("myImg").style.borderRadius = "12px";
}

function showHidden() {
  let hidden = document.getElementById("hiddenText");
  hidden.style.display = "block";
  hidden.style.color = "#16a085";
  hidden.style.fontWeight = "bold";
  hidden.style.fontSize = "16px";
  hidden.innerHTML = "🔒 এখন এটি প্রকাশিত হয়েছে!";
}

// 4. ফর্ম ভ্যালিডেশন
function validateForm() {
  let user = document.forms["loginForm"]["username"].value;
  let pass = document.forms["loginForm"]["password"].value;
  if (user == "" || pass == "") {
    alert("⚠️ সব ঘর পূরণ করুন!");
    return false;
  }
  return true;
}

// 5. রিয়েল টাইম ঘড়ি ও আজকের তারিখ
function showClock() {
  let now = new Date();
  document.getElementById("clock").innerHTML = "🕰️ " + now.toLocaleTimeString();
  document.getElementById("clock").style.color = "#c0392b";
  document.getElementById("clock").style.fontWeight = "bold";
}
setInterval(showClock, 1000);

function showDate() {
  let today = new Date();
  document.getElementById("date").innerHTML = "📅 আজকের তারিখ: " + today.toLocaleDateString("bn-BD");
  document.getElementById("date").style.color = "#2980b9";
  document.getElementById("date").style.fontWeight = "bold";
}
showDate();

// 6. টেক্সট ফেইড ইন/আউট
function fadeText() {
  let text = document.getElementById("fadeText");
  text.style.transition = "opacity 2s";
  text.style.opacity = (text.style.opacity == 0 ? 1 : 0);
  text.style.color = "#8e44ad";
  text.style.fontWeight = "bold";
}

// 7. ইমেজ স্লাইডার
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    slides[i].style.borderRadius = "10px";
    slides[i].style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // ২ সেকেন্ড পর পরিবর্তন হবে
}
showSlides();

// 8. স্ক্রল স্মুথ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 9. কুরআন API (আল-কাহফ আয়াত ১)
fetch("https://api.alquran.cloud/v1/ayah/18:1")
  .then(res => res.json())
  .then(data => {
    let quran = document.getElementById("quranAyah");
    quran.innerHTML = "📖 " + data.data.text + " 🌙";
    quran.style.color = "#27ae60";
    quran.style.fontWeight = "bold";
    quran.style.fontSize = "16px";
    quran.style.textShadow = "1px 1px 2px #555";
  });
