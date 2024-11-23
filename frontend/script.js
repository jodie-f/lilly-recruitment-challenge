const apiURL = 'http://localhost:8000/medicines'
// const apiURL = 'http://0.0.0.0:8000'

// Fetching data from backend
function fetchData(){
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok! Status: ${response.status}');
            }
            return response.json();
        })
        .then(data => {
            displayData(data.medicines);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        })
}

function displayData(medicines) {
    const content = document.getElementById('medicine-table-content');
    content.innerHTML = '';

    medicines.forEach(medicine => {
        // creating new table row
        const row = document.createElement('tr');

        // creating new cell for medicine
        const medicineCell = document.createElement('td');
        medicineCell.textContent = medicine.name || 'Missing Name';
        row.appendChild(medicineCell);

        // styling class for missing medicine names
        if (medicine.name ==='') {
            medicineCell.classList.add('missing-value');
        }

        // creating price cell
        const priceCell = document.createElement('td');
        priceCell.textContent = medicine.price !== null ? `£${medicine.price.toFixed(2)}` : 'N/A';
        row.appendChild(priceCell);

        // styling class for missing medicine prices
        if (medicine.price === null) {
            priceCell.classList.add('missing-value');
        }

        content.appendChild(row);
    });
}

window.onload = fetchData;