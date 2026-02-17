function accordionClick(section) {
  //   console.log("Open");
  //   console.log(section);
    //FETCH REFERENCE TO ALL SECTIONS
  let sections = document.getElementsByClassName("accordion-section");
  //   console.log(sections);

  // sections[section - 1].style.display = "block";

  //   console.log(sections[section].style.display);
//LOOP THROUGH SECTIONS AND HIDE ALL
  for (i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  //MAKE SELECTED SECTIONS VISIBLE
  if (sections[section - 1].style.display == "block") {
    sections[section - 1].style.display = "none";
  } else {
    sections[section - 1].style.display = "block";
  }
}
