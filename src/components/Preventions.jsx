import React from "react";
import { Box, Typography } from "@mui/material";

function Preventions({ items }) {
  if (!items || items.length === 0) return null;

  // group items into pairs of 2
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push([items[i], items[i + 1] || null]); // second may be null
  }

  return (
    <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 2 }}>
      {rows.map((pair, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* First box */}
          <Box
            sx={{
              bgcolor: "#060c1a",
              borderRadius: "35px",
              width: "48%",
              height: '100px',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginBottom: 0,
                fontWeight: "600",
                fontFamily: "Alan Sans",
                textAlign: "center",
              }}
            >
              {pair[0]}
            </Typography>
          </Box>

          {/* Second box (placeholder if missing) */}
          {pair[1] ? (
            <Box
              sx={{
                bgcolor: "#060c1a",
                borderRadius: "35px",
                width: "48%",
                height: '100px',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  marginBottom: 0,
                  fontWeight: "600",
                  fontFamily: "Alan Sans",
                  textAlign: "center",
                }}
              >
                {pair[1]}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ width: "48%" }} />
          )}
        </Box>
      ))}
    </Box>
  );
}

export default Preventions;
