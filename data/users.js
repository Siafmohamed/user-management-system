/**
 * ============================================================================
 * USER DATA MODULE
 * ============================================================================
 *
 * PURPOSE:
 *   This module contains and manages all user data for the application.
 *   It serves as the data source/database layer for the user management system.
 *
 * RESPONSIBILITIES:
 *   - Store initial user data
 *   - Provide methods to access user data
 *   - Manage user database operations (get, add, update, delete)
 *   - Handle data persistence (if needed)
 *
 * DATA STRUCTURE:
 *   Each user object should contain:
 *   - id: Unique identifier (number)
 *   - name: Full name (string)
 *   - email: Email address (string)
 *   - phone: Phone number (string)
 *   - role: User role (string)
 *   - status: Active/Inactive status (string)
 *   - joinDate: Date when user joined (string/date)
 *
 * KEY FUNCTIONS:
 *   - getAllUsers(): Return all users
 *   - getUserById(id): Find a specific user by ID
 *   - addUser(user): Add a new user
 *   - updateUser(id, user): Update user data
 *   - deleteUser(id): Remove a user
 *   - findUsersByFilter(criteria): Search/filter users
 *
 * EXAMPLE USER OBJECT:
 *   {
 *     id: 1,
 *     name: "John Doe",
 *     email: "john@example.com",
 *     phone: "123-456-7890",
 *     role: "Admin",
 *     status: "Active",
 *     joinDate: "2023-01-15"
 *   }
 *
 * NOTE: This module should be the single source of truth for user data.
 * All read/write operations should go through this module.
 * ============================================================================
 */

// Initialize with sample users and export data management functions
