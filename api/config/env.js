// Verify appropriate env variables are present before starting app

// Make env variable logic testable by wrapping in functions
export function getServerConnection() {
  return {
    port: parseInt(process.env.PORT, 10) || 8000,
    host: '0.0.0.0',
  };
}

