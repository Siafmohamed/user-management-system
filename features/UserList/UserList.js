import { attachUserFormEvents } from "../UserForm/UserForm.js";
import { attachSearchFunctionality } from "../SearchBar/SearchBar.js";
import { attachSpecialtyFilter } from "../FilterDropdown/FilterDropdown.js";

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#userTable tbody");
  const searchInput = document.getElementById("searchInput");
  const specialtyFilter = document.getElementById("specialtyFilter");
  
  let users = JSON.parse(localStorage.getItem('users')) || [
    {name: "basem", email: "basem@gmail.com", age: 20, specialty: "backend"},
    {name: "shahd", email: "siiougi@gmail.com", age: 27, specialty: "data analyst"},
    {name: "mohamed", email: "mo@gmail.com", age: 21, specialty: "cyber security"},
    {name: "Cristiano Ronaldo", email: "CR7@gmail.com", age: 41, specialty: "Best football player"}
  ];
  
  function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
  }

  function populateSpecialtyFilter() {
    while (specialtyFilter.options.length > 1) {
      specialtyFilter.remove(1);
    }
    
    const specialties = [...new Set(users.map(user => user.specialty))];
    specialties.forEach(spec => {
      const option = document.createElement("option");
      option.value = spec;
      option.textContent = spec;
      specialtyFilter.appendChild(option);
    });
  }

  function displayUsers(userArray = users) {
    if (userArray.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='6'>No users available</td></tr>";
      return;
    }

    tableBody.innerHTML = "";
    userArray.forEach((user, index) => {
      tableBody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.age}</td>
          <td>${user.specialty}</td>
          <td>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
          </td>
        </tr>
      `;
    });
  }

  attachUserFormEvents(tableBody, users, displayUsers, saveUsersToLocalStorage);

  attachSearchFunctionality(searchInput, users, displayUsers);
  
  populateSpecialtyFilter();
  
  function wrappedDisplayUsers(userArray = users) {
    displayUsers(userArray);
    populateSpecialtyFilter(); 
  }
  
  specialtyFilter.addEventListener("change", function(e) {
    const selectedSpecialty = e.target.value;

    if (selectedSpecialty === "") {
      displayUsers(); 
      return;
    }

    const filteredUsers = users.filter(user => user.specialty === selectedSpecialty);
    displayUsers(filteredUsers);
  });

  displayUsers();
});
