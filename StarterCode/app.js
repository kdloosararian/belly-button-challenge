// // d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function (data) {
//     // console.log(data);


// d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
//   .then(data => {
//     // Store the data for later use
//     processData(data);
//   })
//   .catch(error => {
//     console.error("Error loading data:", error);
//   });

// function processData(data) {
//   // Store the data and perform initial operations here
// }

// <><label for="sample-dropdown">Select a Sample:</label><select id="sample-dropdown"></select></>


// function populateDropdown(data) {
//     const dropdown = d3.select("#sample-dropdown");
  
//     // Extract sample IDs from the data
//     const sampleIds = data.names;
  
//     // Populate the dropdown with options
//     sampleIds.forEach(sampleId => {
//       dropdown.append("option").attr("value", sampleId).text(sampleId);
//     });
//   }
  
//   // Call the populateDropdown function after loading the data
//   processData(data);

  
//   function createBarChart(sampleData) {
//     // Create the bar chart here using Plotly.js
//   }

  
//   function createBubbleChart(sampleData) {
//     // Create the bubble chart here using Plotly.js
//   }

//   function displaySampleMetadata(metadata) {
//     // Display the metadata key-value pairs on the page
//   }

//   function updateAllChartsAndMetadata(selectedSample) {
//     // Update the bar chart
//     // Update the bubble chart
//     // Update the sample metadata
//   }

// const dropdown = document.getElementById("sample-dropdown");

// dropdown.addEventListener("change", function () {
//   const selectedSample = dropdown.value;
//   updateAllChartsAndMetadata(selectedSample);
// });

// // Initial setup
// populateDropdown(data);
// updateAllChartsAndMetadata(data.names[0]);


// Load data from the JSON URL
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
  .then(data => {
    // Call the functions that depend on the data
    processData(data);
    populateDropdown(data);
    updateAllChartsAndMetadata(data.names[0]); // Initialize with the first sample
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });

// Define a variable to store the data
let globalData;

// Function to process the data
function processData(data) {
  // Store the data for later use
  globalData = data;
}

// Function to populate the dropdown with sample IDs
function populateDropdown(data) {
  const dropdown = d3.select("#sample-dropdown");

  // Extract sample IDs from the data
  const sampleIds = data.names;

  // Populate the dropdown with options
  sampleIds.forEach(sampleId => {
    dropdown.append("option").attr("value", sampleId).text(sampleId);
  });

  // Add an event listener to the dropdown for sample selection
  dropdown.on("change", function () {
    const selectedSample = dropdown.property("value");
    updateAllChartsAndMetadata(selectedSample);
  });
}

// Function to create the bar chart
function createBarChart(sampleData) {
  // Create the bar chart here using Plotly.js
    const trace = {
      x: sampleData.sample_values.slice(0, 10).reverse(),
      y: sampleData.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
      text: sampleData.otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    };
  
    const layout = {
      title: "Top 10 OTUs",
      xaxis: { title: "Sample Values" }
    };
  
    Plotly.newPlot("bar-chart", [trace], layout); // Make sure to specify the correct div ID
  }


// Function to create the bubble chart
function createBubbleChart(sampleData) {
        const trace = {
          x: sampleData.otu_ids,
          y: sampleData.sample_values,
          text: sampleData.otu_labels,
          mode: 'markers',
          marker: {
            size: sampleData.sample_values,
            color: sampleData.otu_ids,
            colorscale: 'Earth' // You can choose a different colorscale if desired
          }
        };
      
        const layout = {
          title: 'Bubble Chart for Samples',
          xaxis: { title: 'OTU ID' },
          yaxis: { title: 'Sample Values' }
        };
      
        Plotly.newPlot('bubble-chart', [trace], layout);
      }
      

// Function to display sample metadata
function displaySampleMetadata(metadata) {

    const layout= {
title: 'Demographic Info'
    }}
  // Display the metadata key-value pairs on the page
  // You need to implement the code to display metadata here


// Function to update all charts and metadata
function updateAllChartsAndMetadata(selectedSample) {
  if (!globalData) {
    console.error("Data not loaded yet.");
    return;
  }

  // Find the selected sample data
  const selectedData = globalData.samples.find(sample => sample.id === selectedSample);

  // Call functions to create/update charts and display metadata
  createBarChart(selectedData);
  createBubbleChart(selectedData);
  displaySampleMetadata(selectedData);
}
