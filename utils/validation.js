const VALID_ROLES = ['admin', 'user', 'moderator'];

function validateRequired(fieldName, value) {
  if (!value || value.toString().trim() === '') {
    return { field: fieldName, message: `${fieldName} is required` };
  }
  return true;
}

function validateName(name) {
  const requiredCheck = validateRequired('name', name);
  if (requiredCheck !== true) {
    return requiredCheck;
  }
  
  if (name.length < 3) {
    return { field: 'name', message: 'Name must be at least 3 characters long' };
  }
  
  if (!/^[a-zA-Z\s\-'\.]+$/.test(name)) {
    return { field: 'name', message: 'Name can only contain letters, spaces, hyphens, apostrophes, and periods' };
  }
  
  return true;
}

function validateEmail(email) {
  const requiredCheck = validateRequired('email', email);
  if (requiredCheck !== true) {
    return requiredCheck;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { field: 'email', message: 'Please enter a valid email address' };
  }
  
  return true;
}

function validateRole(role) {
  const requiredCheck = validateRequired('role', role);
  if (requiredCheck !== true) {
    return requiredCheck;
  }
  
  if (!VALID_ROLES.includes(role.toLowerCase())) {
    return { field: 'role', message: `Role must be one of: ${VALID_ROLES.join(', ')}` };
  }
  
  return true;
}

function validateUserData(user) {
  const errors = [];
  
  const nameValidation = validateName(user.name);
  if (nameValidation !== true) {
    errors.push(nameValidation);
  }
  
  const emailValidation = validateEmail(user.email);
  if (emailValidation !== true) {
    errors.push(emailValidation);
  }
  
  const phoneValidation = validatePhone(user.phone);
  if (phoneValidation !== true) {
    errors.push(phoneValidation);
  }
  
  const roleValidation = validateRole(user.role);
  if (roleValidation !== true) {
    errors.push(roleValidation);
  }
  
  return errors;
}

function getValidationErrors(user) {
  return validateUserData(user);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    validateName,
    validateEmail,
    validatePhone,
    validateRole,
    validateUserData,
    validateRequired,
    getValidationErrors,
    VALID_ROLES
  };
}
