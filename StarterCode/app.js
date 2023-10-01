const url = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?range=all&api_key=wSroYb1Nzb846uwXfAFIFFoUaMRbV1MADtU32Khi&country=US&fuel_type_code=all";

// Make a GET request using the Fetch API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Now you can work with the data
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });





// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

// dataPromise.then(data => {
//     var selector =d3.select("#selDataset");

//     var fuel_stations = data.fuel_stations;

//     sampleNames.forEach(sample => {
//         selector
//             .append("option")
//             .text(sample)
//             .property("value", sample);
//     });

//     var initialSample = sampleNames[0];

//     buildMetadata(initialSample, data);
//     buildCharts(initialSample, data);
// });
// function optionChanged(newSample) {
//     // Update the information and charts for the new sample
//     dataPromise.then(data => {
//         buildMetadata(newSample, data);
//         buildCharts(newSample, data);
//     });
// }

// function buildMetadata(sample, data) {
//     // Get the metadata for all samples
//     var metadata = data.metadata;

//     // Filter the metadata to only include the selected sample
//     var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var selectedSample = metadataArray[0];
//     var PANEL = d3.select("#sample-metadata");

// }

// PANEL.html("");

