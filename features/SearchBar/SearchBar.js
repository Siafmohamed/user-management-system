/**
 * ============================================================================
 * SEARCH BAR FEATURE - JavaScript Logic
 * ============================================================================
 *
 * PURPOSE:
 *   This module handles all search functionality for the user management
 *   system. It provides real-time search, filtering, and suggestions as
 *   users type in the search field.
 *
 * RESPONSIBILITIES:
 *   - Render the search bar component
 *   - Handle search input and perform searches
 *   - Filter users based on search query
 *   - Display search results or suggestions
 *   - Debounce search requests for performance
 *   - Clear search results
 *   - Handle keyboard interactions
 *   - Communicate search results to other components
 *
 * KEY FUNCTIONS:
 *   - init(): Initialize the search component
 *   - render(): Display the search bar
 *   - attachEventListeners(): Attach input and button handlers
 *   - onSearchInput(event): Handle input change event
 *   - performSearch(query): Execute search with given query
 *   - filterUsers(query, users): Filter users by search criteria
 *   - displayResults(results): Show search results
 *   - clearSearch(): Reset search field and results
 *   - onKeyDown(event): Handle keyboard shortcuts
 *   - debounce(func, delay): Debounce search for performance
 *
 * SEARCH CRITERIA:
 *   - User Name (full text match)
 *   - Email Address (starts with match)
 *   - Phone Number (contains match)
 *   - Role (exact match or dropdown)
 *
 * EVENTS:
 *   - Listens for: 'allUsersData' event for source data
 *   - Dispatches: 'searchResults' event with filtered users
 *
 * DEPENDENCIES:
 *   - features/SearchBar/SearchBar.css: Styling
 *   - utils/helpers.js: Utility functions
 *   - data/users.js: User data source
 *
 * STATE:
 *   - currentQuery: Current search query string
 *   - allUsers: All available users (source data)
 *   - searchResults: Current search results
 *   - isSearching: Search is in progress flag
 *   - debounceTimer: Timer for debounced search
 *
 * KEYBOARD SHORTCUTS:
 *   - Escape: Clear search
 *   - Enter: Execute search (if button used)
 *
 * PERFORMANCE NOTES:
 *   - Search is debounced to reduce calculations
 *   - Minimum 2 characters required for search
 *   - Results update in real-time as user types
 *
 * NOTE: Keep search logic separate from filtering. Search finds matches,
 * filter applies additional criteria. Always work with copy of data.
 * ============================================================================
 */


