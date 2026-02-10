/**
 * ============================================================================
 * USER LIST FEATURE - JavaScript Logic
 * ============================================================================
 *
 * PURPOSE:
 *   This module handles all the logic for the user list feature. It manages
 *   rendering users, handling user actions (edit, delete, view), and updating
 *   the list when data changes.
 *
 * RESPONSIBILITIES:
 *   - Render the list of users in the DOM
 *   - Handle user row rendering and updates
 *   - Attach event listeners to action buttons
 *   - Filter and sort users
 *   - Handle delete user confirmations
 *   - Refresh list when data changes
 *   - Show/hide empty state message
 *
 * KEY FUNCTIONS:
 *   - init(): Initialize the user list component
 *   - render(users): Render user list with provided data
 *   - renderUserRow(user): Render a single user row
 *   - attachEventListeners(): Attach click handlers to buttons
 *   - onEditClick(userId): Handle edit button click
 *   - onDeleteClick(userId): Handle delete button click
 *   - onViewClick(userId): Handle view button click
 *   - updateList(): Refresh list with current data
 *   - showEmptyState(): Display message when no users
 *   - hideEmptyState(): Hide empty state message
 *
 * EVENTS:
 *   - Listens for: 'userListRefresh' - refresh the entire list
 *   - Dispatches: 'editUser', 'deleteUser', 'viewUser' events
 *
 * DEPENDENCIES:
 *   - data/users.js: Get user data
 *   - features/UserList/UserList.css: Styling
 *   - utils/helpers.js: Utility functions
 *
 * STATE:
 *   - users: Array of user objects
 *   - selectedSort: Current sort column
 *   - sortDirection: Sort order (asc/desc)
 *
 * NOTE: This module only handles displaying and interacting with the list.
 * Actual data modifications happen in app.js and users.js.
 * ============================================================================
 */


