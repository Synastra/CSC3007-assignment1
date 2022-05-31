// api url 
const api_url =  
      "https://api.data.gov.sg/v1/environment/psi"; 
  
// Defining async function 
async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    if (response) { 
        hideloader(); 
    } 
    show(data); 
} 
// Calling that async function 
getapi(api_url); 
  
// Function to hide the loader 
function hideloader() { 
    document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
    
    let tab =  
        `<tr> 
            <th>Metric</th>
            <th>National</th>
            <th>Central</th>
            <th>West</th>
            <th>East</th>
            <th>North</th>
            <th>South</th>
         </tr>`; 
    keys = Object.keys(data.items[0].readings);
    timestamp = data.items[0].update_timestamp;
    // Loop to access all rows  
    keys.forEach(key => {
        tab += `<tr>  
        <td>${[key]}</td>
        <td>${data.items[0].readings[key].national}</td>  
        <td>${data.items[0].readings[key].central}</td>  
        <td>${data.items[0].readings[key].west}</td>  
        <td>${data.items[0].readings[key].east}</td>  
        <td>${data.items[0].readings[key].north}</td>  
        <td>${data.items[0].readings[key].south}</td>             
        </tr>`;         
    })


    // Setting innerHTML as tab variable 
    document.getElementById("table").innerHTML = tab; 
    document.getElementById("timestamp").innerHTML = "LAST UPDATED AT " + timestamp; 
} 