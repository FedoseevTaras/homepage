function toggle(index, elem) {
  const elements = document.getElementsByClassName('sobi-cmo__description');
  elements[index].classList.toggle('vissible');
  elem.classList.toggle('rotate');
}
