import React from "react";
import { Container, Typography, Stack, Button } from "@mui/material";
export default function TermsAndPolicy({ Accept, Decline }) {
  return (
    <Container>
      <ol>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
        <li>
          <Typography sx={{ textTransform: "capitalize", marginTop: 3 }}>
            lajdkajd lkejakwejr wekjrlqwkejr kewjrlkqjwekr kajsfkajdfk
            kwjerkjakeei lorem
          </Typography>
        </li>
      </ol>

      <Stack
        direction="row"
        spacing={3}
        sx={{ textAlign: "end", alignItems: "end" }}
      >
        <Button
          variant="outlined"
          sx={{
            px: 2,
            border: "1px solid black",
            color: "black",
            "&:hover": { border: "1px solid black" },
          }}
          onClick={Decline}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            px: 2,
            backgroundColor: "bar.main",
            "&:hover": { backgroundColor: "#de3400" },
          }}
          onClick={Accept}
        >
          Accept
        </Button>
      </Stack>
    </Container>
  );
}
