console.log("Hellow World!");

var followButton = document.getElementById("follow-button");
console.log(followButton);

followButton.addEventListener("click", function() {
  var socialMediaDiv = document.getElementById("social-media-section");
  console.log(socialMediaDiv);
  socialMediaDiv.classList.toggle("active");
});
