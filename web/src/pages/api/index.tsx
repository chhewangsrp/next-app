const API_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080/api' // Use localhost for development
        : process.env.NEXT_PUBLIC_API_URL; // Use environment variable for production

export default API_URL;