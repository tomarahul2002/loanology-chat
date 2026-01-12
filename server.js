require("dotenv").config();
const express = require("express");

const app = express();

app.get("/api/token", async (req, res) => {
  try {
    const response = await fetch(
      "https://directline.botframework.com/v3/directline/tokens/generate",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.DIRECT_LINE_SECRET}`
        }
      }
    );

    const data = await response.json();
    res.json({ token: data.token });

  } catch (error) {
    console.error("Token generation failed:", error);
    res.status(500).json({ error: "Failed to generate token" });
  }
});

// serve frontend
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
