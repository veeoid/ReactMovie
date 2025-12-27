# Movie App

A modern React application for browsing and discovering movies using The Movie Database (TMDB) API.

## Features

- **Browse Popular Movies**: View a curated list of popular movies on the home page
- **Search Functionality**: Search for movies by title
- **Favorites System**: Add and remove movies from your favorites list
- **Persistent Storage**: Favorites are saved to localStorage
- **Responsive Design**: Works on desktop and mobile devices
- **Fast Loading**: Built with Vite for optimal performance

## Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: CSS modules
- **State Management**: React Context API
- **API**: The Movie Database (TMDB) API
- **Routing**: React Router (if implemented)
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- TMDB API key (get one at [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api))

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:

   ```
   VITE_API_KEY=your_tmdb_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx          # Individual movie card component
│   └── ...
├── contexts/
│   └── MovieContext.jsx       # Context for favorites management
├── pages/
│   ├── Home.jsx               # Main page with movie grid
│   └── Favorites.jsx          # Favorites page
├── services/
│   └── api.js                 # TMDB API integration
├── css/
│   ├── Home.css
│   ├── MovieCard.css
│   └── ...
├── App.jsx
├── main.jsx
└── index.css
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Usage

This app uses The Movie Database API. Make sure to:

1. Sign up for a free API key at TMDB
2. Add it to your `.env` file as `VITE_API_KEY`
3. Respect TMDB's rate limits and terms of service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please check TMDB's terms of service for API usage.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [React](https://reactjs.org/) for the UI framework
- [Vite](https://vitejs.dev/) for the build tool
