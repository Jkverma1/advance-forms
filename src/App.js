import React, { useState, useEffect } from "react";
import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import GoogleFontLoader from "react-google-font-loader";
import { theme } from "theme";
import AppRoutes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {loading ? <CircularProgress /> : <MainApp data={data} />}
    </Box>
  );
}
export default App;

function MainApp({ data }) {
  return (
    <ThemeProvider theme={theme}>
      <GoogleFontLoader
        fonts={[{ font: "Montserrat", weights: [400, 500, 600, 700] }]}
      />
      <Router>
        <div className="App">
          <AppRoutes data={data} />
        </div>
      </Router>
    </ThemeProvider>
  );
}
