
export function attachUserFormEvents(tableBody, users, displayUsers, saveUsersToLocalStorage) {
  tableBody.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      const index = e.target.dataset.index;

      const isConfirmed = confirm(`Are you sure you want to delete user "${users[index].name}"?`);

      if (isConfirmed) {
        users.splice(index, 1);  
        displayUsers();          
        saveUsersToLocalStorage(); 
        alert("User deleted successfully!"); 
      } else {
        return;
      }
    }
      if (e.target.classList.contains("edit-btn")) {
        const index = e.target.dataset.index;
        let newName = prompt("Enter new name:", users[index].name);
        let newEmail = prompt("Enter new email:", users[index].email);
        let newAge = prompt("Enter new age:", users[index].age);
        let newSpecialty = prompt("Enter new specialty:", users[index].specialty);

        if (newName && newName.trim() !== "") users[index].name = newName.trim();
        if (newEmail && newEmail.trim() !== "") users[index].email = newEmail.trim();
        if (newAge && !isNaN(newAge)) users[index].age = Number(newAge);
        if (newSpecialty && newSpecialty.trim() !== "") users[index].specialty = newSpecialty.trim();

        displayUsers();
        saveUsersToLocalStorage(); 
      }
    });

    const formContainer = document.getElementById("user-form-section");
    const showFormBtn = document.getElementById("showAddUserFormBtn");

    showFormBtn.addEventListener("click", () => {
      formContainer.style.display = "block"; 
      formContainer.innerHTML = `
        <h3>Add New User</h3>
        <form id="addUserForm">
          <input type="text" id="userName" placeholder="Name" required />
          <input type="email" id="userEmail" placeholder="Email" required />
          <input type="number" id="userAge" placeholder="Age" required min="1" max="120" />
          <input type="text" id="userSpecialty" placeholder="Specialty" required />
          <button type="submit">Add User</button>
        </form>
        <div id="formMessage" style="margin-top:10px;"></div>
      `;

      const addUserForm = document.getElementById("addUserForm");
      const formMessage = document.getElementById("formMessage");

      addUserForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("userName").value.trim();
        const email = document.getElementById("userEmail").value.trim();
        const age = document.getElementById("userAge").value.trim();
        const specialty = document.getElementById("userSpecialty").value.trim();

        const tempUser = { name, email, age, specialty };
        
        const nameValidation = window.validateName ? window.validateName(name) : true;
        const emailValidation = window.validateEmail ? window.validateEmail(email) : true;
        
        const validationErrors = [];
        if (nameValidation !== true) {
          validationErrors.push(nameValidation);
        }
        if (emailValidation !== true) {
          validationErrors.push(emailValidation);
        }
        
        if (!age || isNaN(age) || parseInt(age) <= 0 || parseInt(age) > 120) {
          validationErrors.push({ field: 'age', message: 'Age must be a number between 1 and 120' });
        }
        
        if (!specialty || specialty.trim().length < 2) {
          validationErrors.push({ field: 'specialty', message: 'Specialty must be at least 2 characters long' });
        }

        if (validationErrors.length === 0) {
          users.push({ 
            name: name, 
            email: email, 
            age: parseInt(age), 
            specialty: specialty
          });
          displayUsers();
          saveUsersToLocalStorage(); 

          formMessage.innerHTML = `<span style="color: green;">User "${name}" added successfully!</span>`;
          addUserForm.reset();
          

          setTimeout(() => {
            formContainer.style.display = "none";
          }, 2000);
        } else {
          let errorMessage = "<ul style='color: red;'>";
          validationErrors.forEach(error => {
            errorMessage += `<li>${error.message}</li>`;
          });
          errorMessage += "</ul>";
          formMessage.innerHTML = errorMessage;
        }
      });
    });
  }
