window.addEventListener("DOMContentLoaded", function() {
    fetch('lambda_info.json')
      .then(response => response.json())
      .then(lambda_info => {
        const tableBody = document.getElementById("myTableBody");
        lambda_info.forEach(item => {
          const row = document.createElement("tr");
          const serviceCell = document.createElement("td");
          const stgddCell = document.createElement("td");
          const stgdlCell = document.createElement("td");
          const prodddCell = document.createElement("td");
          const proddlCell = document.createElement("td");
  
          serviceCell.textContent = item.service;
          stgddCell.textContent = item.stgdd;
          stgdlCell.textContent = item.stgdl;
          prodddCell.textContent = item.proddd;
          proddlCell.textContent = item.proddl;

          row.appendChild(serviceCell);
          row.appendChild(stgddCell);
          row.appendChild(stgdlCell);
          row.appendChild(prodddCell);
          row.appendChild(proddlCell);
  
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  