// Function to fetch Lambda function details
function getLambdaFunctionDetails() {
    AWS.config.update({ region: 'us-east-1' }); // Replace with your desired AWS region
    var lambda = new AWS.Lambda();
    var params = {
      FunctionName: 'quotes-stg' // Replace with your Lambda function name
    };
  
    lambda.getFunction(params, function (err, data) {
      if (err) {
        console.log('Error:', err);
        document.getElementById('function-details').innerHTML = '<p>An error occurred while fetching Lambda function details.</p>';
      } else {
        var description = data.Configuration.Description;
        var lastModified = data.Configuration.LastModified;
  
        // Update the website content with the Lambda function details
        document.getElementById('description').innerHTML = description;
        document.getElementById('last-modified').innerHTML = lastModified;
      }
    });
  }
  
  // Call the function when the page loads
  window.onload = getLambdaFunctionDetails;
  