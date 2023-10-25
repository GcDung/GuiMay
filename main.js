
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  

  document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("chasing-text");
    const text = "Chúc các bạn nữ luôn luôn vui vẻ.; Các cậu là điều thật đặc biệt mà thế giới này đã tạo nên.; Vì vậy, hãy luôn rạng rỡ như những bông hoa hướng dương.; Tích cực và rạng rỡ các cậu nhé.";
  
    const sentences = text.split('; '); // Tách văn bản thành các câu
    let sentenceIndex = 0;
    let charIndex = 0;
  
    function displayText() {
      if (sentenceIndex < sentences.length) {
        const sentence = sentences[sentenceIndex];
        if (charIndex < sentence.length) {
          textElement.innerHTML += sentence.charAt(charIndex); // Hiển thị ký tự hiện tại
          charIndex++;
          setTimeout(displayText, 50); // Thời gian trễ giữa các ký tự (50ms trong ví dụ)
        } else {
          // Kết thúc câu và chuyển sang câu tiếp theo
          textElement.innerHTML += "<p></p>";
          sentenceIndex++;
          charIndex = 0;
          setTimeout(displayText, 500); // Thời gian trễ giữa các câu (2 giây trong ví dụ)
        }
      }
    }
  
    displayText();
  });
  