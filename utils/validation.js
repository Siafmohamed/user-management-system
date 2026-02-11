

// Predefined roles for validation
const VALID_ROLES = ['admin', 'user', 'moderator'];

/**
 * Validates a required field
 * @param {string} fieldName - Name of the field for error reporting
 * @param {*} value - Value to validate
 * @returns {Object|boolean} - Returns true if valid, or error object if invalid
 */
function validateRequired(fieldName, value) {
  if (!value || value.toString().trim() === '') {
    return { field: fieldName, message: `${fieldName} is required` };
  }
  return true;
}

/**
 * Validates a user name
 * @param {string} name - Name to validate
 * @returns {Object|boolean} - Returns true if valid, or error object if invalid
 */
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

/**
 * Validates an email address
 * @param {string} email - Email to validate
 * @returns {Object|boolean} - Returns true if valid, or error object if invalid
 */
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

/**
 * Validates a phone number
 * @param {string} phone - Phone number to validate
 * @returns {Object|boolean} - Returns true if valid, or error object if invalid
 */
function validatePhone(phone) {
  const requiredCheck = validateRequired('phone', phone);
  if (requiredCheck !== true) {
    return requiredCheck;
  }
  
  // Remove common formatting characters to check raw digits
  const cleanPhone = phone.replace(/[\s\-\.\(\)]/g, '');
  
  if (cleanPhone.length < 10 || cleanPhone.length > 15) {
    return { field: 'phone', message: 'Phone number must be between 10 and 15 digits' };
  }
  
  if (!/^\+?[0-9\s\-\.\(\)]+$/.test(phone)) {
    return { field: 'phone', message: 'Phone number can only contain digits, spaces, hyphens, parentheses, and dots' };
  }
  
  return true;
}

/**
 * Validates a role
 * @param {string} role - Role to validate
 * @returns {Object|boolean} - Returns true if valid, or error object if invalid
 */
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

/**
 * Validates a complete user object
 * @param {Object} user - User object to validate
 * @returns {Array} - Array of validation errors
 */
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

/**
 * Gets all validation errors for a user
 * @param {Object} user - User object to validate
 * @returns {Array} - Array of validation errors
 */
function getValidationErrors(user) {
  return validateUserData(user);
}

// Export functions for use in other modules
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
