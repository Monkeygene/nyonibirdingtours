function closeNav() {
  let navbarCollapse = document.getElementById("navbarNav");
  let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: true
  });
}
