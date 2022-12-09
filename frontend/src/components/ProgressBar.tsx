import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

const ProgressBar = (props: LinearProgressProps): JSX.Element => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let localProgress = 0;
    const timer = setInterval(() => {
      if (localProgress <= 100) {
        setProgress(localProgress);
        localProgress += Math.floor(Math.random() * 40);
      } else {
        setProgress(100);
        clearInterval(timer);
      }
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} value={progress} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            progress
          )}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;
