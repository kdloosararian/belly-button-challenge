// d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function (data) {
    // console.log(data);


d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
  .then(data => {
    // Store the data for later use
    processData(data);
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });

function processData(data) {
  // Store the data and perform initial operations here
}

<><label for="sample-dropdown">Select a Sample:</label><select id="sample-dropdown"></select></>


function populateDropdown(data) {
    const dropdown = d3.select("#sample-dropdown");
  
    // Extract sample IDs from the data
    const sampleIds = data.names;
  
    // Populate the dropdown with options
    sampleIds.forEach(sampleId => {
      dropdown.append("option").attr("value", sampleId).text(sampleId);
    });
  }
  
  // Call the populateDropdown function after loading the data
  processData(data);

  
  function createBarChart(sampleData) {
    // Create the bar chart here using Plotly.js
  }

  
  function createBubbleChart(sampleData) {
    // Create the bubble chart here using Plotly.js
  }

  function displaySampleMetadata(metadata) {
    // Display the metadata key-value pairs on the page
  }

  function updateAllChartsAndMetadata(selectedSample) {
    // Update the bar chart
    // Update the bubble chart
    // Update the sample metadata
  }

const dropdown = document.getElementById("sample-dropdown");

dropdown.addEventListener("change", function () {
  const selectedSample = dropdown.value;
  updateAllChartsAndMetadata(selectedSample);
});

// Initial setup
populateDropdown(data);
updateAllChartsAndMetadata(data.names[0]);


