window.addEventListener("DOMContentLoaded", function() {
    fetch('lambda_info.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.getElementById("myTableBody");
        data.forEach(item => {
          const row = document.createElement("tr");
          const serviceCell = document.createElement("td");
          const ddCell = document.createElement("td");
          const dlCell = document.createElement("td");
          const psCell = document.createElement("td");
  
          serviceCell.textContent = item.functionName;
          ddCell.textContent = item.lastModified;
          dlCell.textContent = item.description;
          psCell.textContent = item.packageSize;


          row.appendChild(serviceCell);
          row.appendChild(ddCell);
          row.appendChild(dlCell);
          row.appendChild(psCell);
  
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  