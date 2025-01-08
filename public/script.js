document.getElementById('searchForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const jobTitle = document.getElementById('jobTitle').value;
  const location = document.getElementById('location').value;
  
  // Fetch job listings from the backend
  const response = await fetch(`/search?title=${jobTitle}&location=${location}`);
  const jobs = await response.json();
  
  // Display the results
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  jobs.forEach(job => {
      const jobDiv = document.createElement('div');
      jobDiv.classList.add('job');
      jobDiv.innerHTML = `
          <h2>${job.title}</h2>
          <p>${job.company}</p>
          <p>${job.location}</p>
          <a href="${job.url}" target="_blank">View Job</a>
      `;
      resultsDiv.appendChild(jobDiv);
  });
});