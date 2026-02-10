/**
 * ============================================================================
 * FILTER DROPDOWN FEATURE - JavaScript Logic
 * ============================================================================
 *
 * PURPOSE:
 *   This module provides filtering functionality for the user management
 *   system. It allows users to filter displayed results by specific criteria
 *   using dropdown menus and filter options.
 *
 * RESPONSIBILITIES:
 *   - Render the filter dropdown component UI
 *   - Handle filter selection and changes
 *   - Apply filters to user data
 *   - Update displayed results based on active filters
 *   - Manage filter state (which filters are active)
 *   - Communicate filter changes to other components
 *   - Coordinate with search functionality
 *   - Apply multiple filters simultaneously (AND logic)
 *
 * KEY FUNCTIONS:
 *   - init(): Initialize the filter component
 *   - render(): Display the filter dropdown UI
 *   - attachEventListeners(): Attach change handlers to filter elements
 *   - onFilterChange(event): Handle filter selection changes
 *   - applyFilters(users): Apply all active filters to user list
 *   - filterByRole(users, role): Filter users by their role
 *   - filterByStatus(users, status): Filter users by their status
 *   - filterByDepartment(users, department): Filter users by department
 *   - getActiveFilters(): Get currently selected filter values
 *   - clearFilters(): Reset all filters to default state
 *   - updateFilterOptions(): Update available filter options dynamically
 *
 * FILTER TYPES AVAILABLE:
 *   - Role (Admin, Manager, User, Guest)
 *   - Status (Active, Inactive, Pending)
 *   - Department (Engineering, Sales, HR, Marketing, Support)
 *
 * EVENTS:
 *   - Listens for: 'allUsersData' event for source data
 *   - Dispatches: 'filterApplied' event with filtered users
 *   - Dispatches: 'filterChanged' event with filter state
 *
 * DEPENDENCIES:
 *   - features/FilterDropdown/FilterDropdown.css: Styling
 *   - utils/helpers.js: Utility functions for DOM manipulation
 *   - data/users.js: User data source
 *
 * STATE:
 *   - activeFilters: Object containing currently selected filter values
 *     Example: { role: 'Admin', status: 'Active', department: 'Engineering' }
 *   - allUsers: Complete list of users (source data)
 *   - filteredUsers: Currently displayed users after filters applied
 *   - filterOptions: Available options for each filter type
 *
 * FILTER LOGIC:
 *   - Filters use AND logic (all selected filters must match)
 *   - Multiple values for same filter use OR logic (if implemented)
 *   - Empty/null filter values are treated as "no filter" for that type
 *   - Search and filter work together:
 *     Search results are filtered, or filters are applied to search results
 *
 * PERFORMANCE NOTES:
 *   - Filters are applied immediately on selection change
 *   - Use debouncing if combining with real-time updates
 *   - Cache filter options if they rarely change
 *
 * UI CONSIDERATIONS:
 *   - Show feedback when filters are active (badges, reset button)
 *   - Disable filter options that would return no results (optional)
 *   - Display count of matching results
 *   - Provide "Reset Filters" button for clearing all selections
 *
 * NOTE: Keep filter logic separate from search logic. Filters narrow down
 * a dataset by category, while search finds text matches. Always work with
 * a copy of data to avoid mutations. Coordinate with SearchBar component.
 * ============================================================================
 */
