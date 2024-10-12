function showSpinnerWithTimeout() {
    // Show the spinner
    document.getElementById('spinner').style.display = 'block';
  
    // Simulate a delay with setTimeout (e.g., 3 seconds)
    setTimeout(function() {
      // Hide the spinner after the timeout
      document.getElementById('spinner').style.display = 'none';
  
      // Optionally, execute other code after timeout
      console.log('Timeout completed, spinner hidden.');
    }, 3000); // 3000 milliseconds = 3 seconds
  }
  
  // Call the function to display spinner and trigger timeout
  showSpinnerWithTimeout();
  