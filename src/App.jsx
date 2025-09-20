import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Alert, Stack, Skeleton } from "@mui/material";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 API call function
  const fetchWeather = async (params = {}) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.post("http://localhost:8080/api/weather", params);
      setWeather(response.data.data);
    } catch (err) {
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 On mount → call API without params
  useEffect(() => {
    fetchWeather(); // empty call
  }, []);

  // 🔹 On search → call with city
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather({ city });
  };

  return (
    <Container sx={{ width: "90%", mx: "auto", py: 5 }}>
      <WeatherForm city={city} setCity={setCity} onSubmit={handleSubmit} />

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      {/* Skeleton Loader */}
      {loading && (
        <Stack spacing={2} sx={{ maxWidth: 1200, mx: "auto" }}>
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="rectangular" height={80} />
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="rounded" height={80} />
        </Stack>
      )}

      {/* Show weather only when loaded */}
      {!loading && weather && <WeatherCard weather={weather} />}
    </Container>
  );
}

export default App;
  