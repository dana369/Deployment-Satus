window.addEventListener("DOMContentLoaded", function() {
    fetch('lambda_info.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.getElementById("myTableBody");
        data.forEach(item => {
          const row = document.createElement("tr");
          const serviceCell = document.createElement("td");
          const stgddCell = document.createElement("td");
          const stgdlCell = document.createElement("td");
  
          serviceCell.textContent = item.functionName;
          stgddCell.textContent = item.lastModified;
          stgdlCell.textContent = item.description;


          row.appendChild(serviceCell);
          row.appendChild(stgddCell);
          row.appendChild(stgdlCell);
  
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  