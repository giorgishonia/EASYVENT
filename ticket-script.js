document.addEventListener('DOMContentLoaded', (event) => {
    let currentVotes = 0;
    const maxVotes = 10;
    const progressBar = document.getElementById('ticket-progress-bar');
    const votesDisplay = document.getElementById('current-votes');
    const percentageDisplay = document.getElementById('percentage'); 
    const voteButton = document.getElementById('voteButton');
    const voteLimitAlert = document.getElementById('voteLimitAlert')
    
    updateVotesDisplay(); 
    
    voteButton.addEventListener('click', () => {
      if (currentVotes < maxVotes) {
        currentVotes++;
        const percentage = (currentVotes / maxVotes) * 100;
        progressBar.style.width = `${percentage}%`;
        votesDisplay.textContent = `${currentVotes} ხმა ${maxVotes}-დან`;
        percentageDisplay.textContent = `${percentage.toFixed(1)}%`; // Display with one decimal place
      } 
      else {
        voteLimitAlert.classList.add('show');
        setTimeout(() => {
          voteLimitAlert.classList.remove('show');
        }, 3000);
      }
    });

    function updateVotesDisplay() {
        const percentage = (currentVotes / maxVotes) * 100;
        progressBar.style.width = `${percentage}%`;
        votesDisplay.textContent = `${currentVotes} ხმა ${maxVotes}-დან`;
        percentageDisplay.textContent = `${percentage.toFixed(1)}%`; 
    }
});
