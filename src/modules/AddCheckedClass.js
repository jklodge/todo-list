function addCheckedClass(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
}

export default addCheckedClass;
