export function attachSearchFunctionality(searchInput, users, displayUsers) {
  searchInput.addEventListener("input", function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm === "") {
      displayUsers();
      return;
    }

    const filteredUsers = users.filter(user => {
      return (
        user.name.toLowerCase().includes(searchTerm)
      );
    });

    displayUsers(filteredUsers); 
  });
}
