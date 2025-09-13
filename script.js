const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

// Function to count words
function getWordCount(text) {
  if (text.trim() === "") return 0;
  return text.trim().split(/\s+/).length;
}

// Function to count characters
function getCharCount(text) {
  return text.length;
}

// Function to update UI
function updateCounter() {
  let text = textInput.value;

  wordCount.textContent = getWordCount(text);
  charCount.textContent = getCharCount(text);
}

// Event listener
textInput.addEventListener("input", updateCounter);
