function skillsMember() {
  var skills = document.getElementById("skills");
  var skillsMember = document.getElementById("skillsMember");
  var member = document.getElementById("member");
  var memberMember = document.getElementById("memberMember");
  var about = document.getElementById("about");
  var aboutMember = document.getElementById("aboutMember");
  var contact = document.getElementById("contact");
  var contactMember = document.getElementById("contactMember");
  var footer = document.getElementById("footer");
  var footerMember = document.getElementById("footerMember");
  var skillsMember = document.getElementById("skillsMember");
  if (skillsMember.style.display === "none") {
    skillsMember.style.display = "block";
    memberMember.style.display = "none";
    aboutMember.style.display = "none";
    contactMember.style.display = "none";
    footerMember.style.display = "none";
  }
}