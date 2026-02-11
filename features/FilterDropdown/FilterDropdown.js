export function attachSpecialtyFilter(filterSelect, users, displayUsers) {
  filterSelect.addEventListener("change", function(e) {
    const selectedSpecialty = e.target.value;

    if (selectedSpecialty === "") {
      displayUsers(); 
      return;
    }

    const filteredUsers = users.filter(user => user.specialty === selectedSpecialty);
    displayUsers(filteredUsers);
  });
}
