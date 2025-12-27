# Movie Discovery App

This is a React-based movie discovery application that lets users browse popular movies, search for specific films, and maintain a personal favorites list. Built as a learning project to demonstrate modern React patterns, API integration, and state management.

## What This App Does

### Movie Browsing

- **Home Page**: Displays a grid of currently popular movies fetched from The Movie Database (TMDB) API
- **Movie Cards**: Each movie shows a poster image, title, and release year
- **Loading States**: Shows a "Loading..." message while fetching data from the API

### Search Functionality

- **Search Bar**: Users can type movie titles to search the TMDB database
- **Real-time Results**: Search results replace the popular movies grid immediately
- **Empty Search Handling**: Prevents searches for empty queries

### Favorites System

- **Heart Button**: Click the heart icon on any movie card to add/remove from favorites
- **Visual Feedback**: Heart turns red when a movie is favorited
- **Persistent Storage**: Favorites are saved to browser's localStorage and persist between sessions
- **Context Management**: Uses React Context API to manage favorites state across components

### Technical Implementation

#### State Management

The app uses React's Context API (`MovieContext`) to manage the favorites list globally:

- `addFavorites(movie)`: Adds a complete movie object to favorites
- `removeFavorites(movieId)`: Removes movie by ID using array filter
- `isFavorite(movieId)`: Checks if a movie is in favorites using array.some()

#### API Integration

- Fetches popular movies on app load
- Searches movies by query string
- Uses TMDB's v3 API with proper error handling
- API key stored securely in environment variables

#### Component Architecture

- **MovieCard**: Reusable component that displays movie info and favorite toggle
- **Home**: Main page handling search, loading states, and movie grid
- **MovieContext**: Provider component wrapping the app for state management

#### Styling

- Custom CSS with responsive grid layout
- Hover effects on movie cards
- Active states for favorite buttons
- Clean, modern design focused on movie posters

## Tech Stack

- **React 19**: Latest version with modern hooks and features
- **Vite**: Fast build tool and dev server
- **TMDB API**: Free movie database API
- **CSS**: Custom styling with responsive design
- **localStorage**: Browser storage for favorites persistence

## Getting Started

### Prerequisites

- Node.js 16+
- TMDB API key (free at tmdb.org)

### Installation

1. Clone and enter directory:

   ```bash
   git clone <repo-url>
   cd "React Movie Tutorial/frontend"
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Get TMDB API key and create `.env`:

   ```
   VITE_API_KEY=your_api_key_here
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## How It Works

### App Flow

1. **Initial Load**: Fetches popular movies from TMDB API
2. **User Interaction**:
   - Browse movie grid
   - Click heart to favorite/unfavorite
   - Type in search bar to find specific movies
3. **State Updates**: Favorites immediately update UI and localStorage

### Key Code Patterns

- **Async Data Fetching**: Uses async/await with try/catch for API calls
- **Conditional Rendering**: Loading states and error handling in JSX
- **Event Handling**: Form submission and button clicks with preventDefault
- **Array Methods**: map() for rendering, filter() for removing favorites

### Data Structure

Movies from TMDB include:

- `id`: Unique movie identifier
- `title`: Movie title
- `poster_path`: Image path for posters
- `release_date`: Release year
- `overview`: Movie description (not displayed in current UI)

## Development Notes

This project demonstrates:

- Modern React with hooks (useState, useEffect, useContext)
- API integration with error handling
- State management without external libraries
- Responsive CSS Grid layout
- Environment variable usage
- Component composition and reusability

## Future Enhancements

Potential features to add:

- Movie detail pages with full descriptions
- User authentication for cloud-synced favorites
- Movie categories/genres filtering
- Pagination for large result sets
- Movie trailer integration
- Dark/light theme toggle

## API Documentation

Uses TMDB API endpoints:

- `GET /movie/popular` - Popular movies
- `GET /search/movie` - Search movies by query

Rate limited to 500 requests/day for free accounts.
