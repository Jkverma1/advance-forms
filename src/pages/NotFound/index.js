import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box className="flex justify-center items-center h-screen text-center">
      <Box>
        <Typography variant="h4" gutterBottom className="font-bold mb-4">
          Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom className="mb-2">
          The requested page does not exist.
        </Typography>
        <Typography variant="body1">
          Go back to{" "}
          <Link to="/" className="text-blue-500">
            Home
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
