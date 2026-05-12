const generateBtn = document.getElementById("generate-btn");
const qrContainer = document.getElementById("qr-container");
const downloadBtn = document.getElementById("download-btn");
const savedUrl = document.getElementById("saved-url");

generateBtn.addEventListener("click", function () {
  const input = document.getElementById("qr-input").value.trim();

  qrContainer.innerHTML = "";
  downloadBtn.style.display = "none";
  savedUrl.textContent = "";

  if (!input) {
    alert("Please enter a URL");
    return;
  }

  new QRCode(qrContainer, {
    text: input,
    width: 220,
    height: 220,
  });

  savedUrl.textContent = `Saved URL: ${input}`;

  setTimeout(() => {
    const img = qrContainer.querySelector("img");

    if (img) {
      downloadBtn.href = img.src;
      downloadBtn.style.display = "inline-block";
    }
  }, 300);
});
