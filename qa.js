document.getElementById('qa-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let question = document.getElementById('question').value;
  
  // প্রশ্ন লোকালি সেভ (localStorage এ)
  let qaList = JSON.parse(localStorage.getItem('qaList')) || [];
  qaList.push({question: question, answer: null});
  localStorage.setItem('qaList', JSON.stringify(qaList));
  
  // UI আপডেট
  displayQA();
  document.getElementById('question').value = '';
});

function displayQA() {
  let qaList = JSON.parse(localStorage.getItem('qaList')) || [];
  let qaListDiv = document.getElementById('qa-list');
  qaListDiv.innerHTML = '';
  
  qaList.forEach((item, index) => {
    let qDiv = document.createElement('div');
    qDiv.innerHTML = `<strong>প্রশ্ন:</strong> ${item.question} <br>
                      <strong>উত্তর:</strong> ${item.answer ? item.answer : "এখনো উত্তর দেওয়া হয়নি"}`;
    qaListDiv.appendChild(qDiv);
  });
}

displayQA();