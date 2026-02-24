
var tweetInput = document.getElementById("tweetInput");
var charLabel = document.getElementById("charLabel");
var tweetBtn = document.getElementById("tweetBtn");

var MAX_CHARS = 160;

function updateCounter() {
  var text = tweetInput.value;
  var remaining = MAX_CHARS - text.length;

  if (remaining >= 0) {
    charLabel.textContent = remaining + " characters remaining";
    tweetBtn.disabled = (text.length === 0);
  } else {
    charLabel.textContent = "Too long! Max is 160 characters.";
    tweetBtn.disabled = true;
  }
}

function tryTweet() {

  updateCounter();

  if (!tweetBtn.disabled) {
    alert("tweet sent (not really, this is just front-end)");
    tweetInput.value = "";
    updateCounter();
  }
}

tweetInput.addEventListener("input", updateCounter);

updateCounter();

tweetBtn.addEventListener("click", tryTweet);