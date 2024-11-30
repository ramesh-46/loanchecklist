document.getElementById('submitButton').addEventListener('click', () => {
    const applicationId = document.getElementById('applicationIdInput').value;
    const instructionContainer = document.getElementById('instructionContainer');
  
    if (!applicationId) {
      alert('Please enter an application ID');
      return;
    }
  
    // Disable the button to prevent multiple clicks
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;
    submitButton.textContent = "Loading...";
  
    // Show loading animation
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<p>Loading checklist...</p>";
  
    // Remove the instruction container after submitting the ID
    instructionContainer.style.display = 'none';
  
    // Fetch data from backend API
    fetch(`/api/checklist/${applicationId}`)
      .then((response) => response.json())
      .then((data) => {
        resultsDiv.innerHTML = ''; // Clear previous results
  
        if (data.error) {
          resultsDiv.innerHTML = `<p style="color: red;">${data.error}</p>`;
          submitButton.disabled = false;
          submitButton.textContent = "Check Checklist";
          return;
        }
  
        data.forEach(rule => {
          const result = document.createElement('div');
          result.classList.add('checklist-item');
          result.classList.add(rule.passed ? 'passed' : 'failed');
          result.textContent = `${rule.name}: ${rule.passed ? 'Passed' : 'Failed'}`;
          resultsDiv.appendChild(result);
        });
  
        submitButton.disabled = false;
        submitButton.textContent = "Check Checklist";
      })
      .catch((error) => {
        console.error('Error fetching checklist data:', error);
        resultsDiv.innerHTML = `<p style="color: red;">Failed to fetch checklist data. Please try again later.</p>`;
        submitButton.disabled = false;
        submitButton.textContent = "Check Checklist";
      });
  });
