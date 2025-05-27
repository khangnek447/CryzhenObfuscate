function sendToBackend() {
    const input = document.getElementById("input").value.trim();
    const captcha = document.getElementById("captcha").value.trim();
    const output = document.getElementById("output");
  
    if (captcha !== "CRYZHEN") {
      alert("❌ Mã xác minh sai!");
      return;
    }
  
    if (!input) {
      alert("⚠️ Vui lòng nhập script!");
      return;
    }
  
    fetch("backend/obfuscate.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "code=" + encodeURIComponent(input)
    })
    .then(res => res.text())
    .then(data => {
      output.textContent = data;
    })
    .catch(err => {
      output.textContent = "Lỗi khi kết nối đến máy chủ.";
    });
  }
  
  function copyOutput() {
    const text = document.getElementById("output").textContent;
    navigator.clipboard.writeText(text).then(() => alert("Đã copy kết quả!"));
  }
  