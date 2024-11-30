const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend'))); // Point to the frontend folder

// Route to fetch checklist data
app.get('/api/checklist/:applicationId', async (req, res) => {
  const applicationId = req.params.applicationId;

  try {
    // Fetch application data from the provided API URL
    const response = await axios.get(`http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/${applicationId}`);
    const applicationData = response.data;

    // Checklist Evaluation Logic
    const checklist = [
      {
        name: 'Valuation Fee Paid',
        passed: applicationData.isValuationFeePaid,
      },
      {
        name: 'UK Resident',
        passed: applicationData.isUkResident,
      },
      {
        name: 'Risk Rating Medium',
        passed: applicationData.riskRating === 'Medium',
      },
      {
        name: 'LTV Below 60%',
        passed: (applicationData.loanRequired / applicationData.purchasePrice) * 100 < 60,
      },
    ];

    // Send checklist results to frontend
    res.json(checklist);
  } catch (error) {
    console.error('Error fetching application data:', error);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
});

// Serve the HTML file from the frontend folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html')); // Update path to frontend
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
