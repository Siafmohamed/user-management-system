/**
 * ============================================================================
 * USER FORM FEATURE - JavaScript Logic
 * ============================================================================
 *
 * PURPOSE:
 *   This module handles all the logic for the user form feature. It manages
 *   form rendering, validation, submission, and state for both creating new
 *   users and editing existing users.
 *
 * RESPONSIBILITIES:
 *   - Render the form in the DOM
 *   - Handle form input changes and validation
 *   - Validate user input before submission
 *   - Display validation error messages
 *   - Submit form data to the application
 *   - Handle success and error responses
 *   - Reset form after successful submission
 *   - Load existing user data for editing
 *   - Toggle between add and edit modes
 *
 * KEY FUNCTIONS:
 *   - init(): Initialize the form component
 *   - render(): Display the form in the DOM
 *   - show(): Display the form
 *   - hide(): Hide the form
 *   - openAddMode(): Switch to add user mode
 *   - openEditMode(userId): Switch to edit user mode with data
 *   - validateForm(): Validate all form fields
 *   - validateField(fieldName): Validate single field
 *   - displayError(fieldName, message): Show error for field
 *   - clearErrors(): Clear all error messages
 *   - attachEventListeners(): Attach input and submit handlers
 *   - onSubmit(event): Handle form submission
 *   - reset(): Clear all form fields
 *   - populateForm(user): Fill form with user data (for editing)
 *   - getFormData(): Extract all form values
 *
 * FORM FIELDS:
 *   - name: User's full name (validated: required, min 3 chars)
 *   - email: User's email (validated: required, valid email format)
 *   - phone: User's phone (validated: required, valid format)
 *   - role: User's role (validated: required, from predefined list)
 *   - status: User's status (validated: required, Active/Inactive)
 *
 * EVENTS:
 *   - Listens for: 'formSubmit' event
 *   - Dispatches: 'submitUserForm' event with form data
 *
 * DEPENDENCIES:
 *   - features/UserForm/UserForm.css: Styling
 *   - utils/validation.js: Validation functions
 *   - utils/helpers.js: Utility functions
 *
 * STATE:
 *   - mode: 'add' or 'edit'
 *   - editingUserId: ID of user being edited (null if adding)
 *   - formData: Current form values
 *   - errors: Current validation errors
 *
 * NOTE: This module handles form UI and validation. Actual data saving
 * happens in app.js. Keep form logic separate from data logic.
 * ============================================================================
 */

