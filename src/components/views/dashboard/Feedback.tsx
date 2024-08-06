import React from "react";
import { Box, Avatar, Typography, Paper, Rating } from "@mui/material";

interface Feedback {
  name: string;
  avatarUrl: string;
  rating: number;
  feedback: string;
}

const feedbacks: Feedback[] = [
  {
    name: "Jenny Wilson",
    avatarUrl: "https://via.placeholder.com/40",
    rating: 4,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    avatarUrl: "https://via.placeholder.com/40",
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    avatarUrl: "https://via.placeholder.com/40",
    rating: 4,
    feedback: "Normally wings are wings, but theirs are lean meaty and tender.",
  },
  {
    name: "Devon Lane",
    avatarUrl: "https://via.placeholder.com/40",
    rating: 4,
    feedback: "Normally wings are wings, but theirs are lean meaty and tender.",
  },
];

const CustomerFeedback: React.FC = () => {
  return (
    <Box
      sx={{
        maxHeight: 470,
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: 5,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: 4,
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#555",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
        },
      }}
    >
      <Typography variant="h5" color="white" gutterBottom>
        Customer's Feedback
      </Typography>
      {feedbacks.map((feedback, index) => (
        <Paper
          key={index}
          sx={{
            display: "flex",
            padding: 2,
            marginBottom: 2,
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <Avatar
            src={feedback.avatarUrl}
            alt={feedback.name}
            sx={{ marginRight: 2 }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {feedback.name}
            </Typography>
            <Rating value={feedback.rating} readOnly />
            <Typography variant="body2">{feedback.feedback}</Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default CustomerFeedback;
