const apiURL = 'http://localhost:8000/medicines'

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

const content = document.querySelector('#medicine-table-content');
function displayData(medicines) {
    content.innerHTML = '';

    medicines.forEach(medicine => {
        // creating new table row
        const row = document.createElement('tr');

        // creating new cell for medicine
        const medicineCell = document.createElement('td');
        medicineCell.textContent = medicine.name || 'Missing Name';
        row.appendChild(medicineCell);

        // styling class for missing medicine names
        if (medicine.name === '') {
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

// Adding medicine
const nameIn = document.querySelector('#name');
const priceIn = document.querySelector('#price');
const btnAdd = document.querySelector('#add-medicine');

function addMedicine() {
    const name = nameIn.value.trim();
    const price = priceIn.value.trim();
    
    if (name === '') {
        alert('Please enter a medicine name');
        return;
    }
    
    if (price === '') {
        alert('Please enter a price');
        return;
    }
    
    // sending POST request to the backend for creating
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    
    fetch('http://localhost:8000/create' ,{
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // success message
        fetchData();
        dropdownUpdate();
        dropdownDelete();
    })
    .catch(error => {
        console.error(`Error adding medicine: ${error}`);
    })
    
    // clearing inputs
    nameIn.value = '';
    priceIn.value = '';
}

btnAdd.addEventListener('click', addMedicine);

// Update medicine
const btnUpdate = document.querySelector('#update-med');
const updateSelect = document.querySelector('#update-select');
const updatePriceInput = document.querySelector('#update-price');

function dropdownUpdate() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            updateSelect.innerHTML = '<option value="" disabled selected>Medicines</option>'; // clearing the dropdown
            data.medicines.forEach(medicine => {
                const option = document.createElement('option');
                option.value = medicine.name; // medicine name is the value
                option.textContent = medicine.name; // displaying medicine
                updateSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error(`Dropdown error: ${error}`);
        });
}

function updateMedicine() {
    const selected = updateSelect.value;
    const newPrice = updatePriceInput.value.trim();

    // validation
    if (!selected) {
        alert('Please select a medicine to update.');
        return;
    }

    if (newPrice === '' || isNaN(newPrice) || parseFloat(newPrice) <= 0) {
        alert('Please enter a valid price.');
        return;
    }

    // sending request to backend
    fetch('http://localhost:8000/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            name: selected, 
            price: newPrice
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // success message
        fetchData();
        dropdownUpdate();
        dropdownDelete();
    })
    .catch(error => {
        console.error(`Error updating medicine: ${error}`);
    });

    // Clear the input field
    updatePriceInput.value = '';
}
btnUpdate.addEventListener('click', updateMedicine);

// Deleting medicine
const btnDelete = document.querySelector('#delete-med');
const deleteSelect = document.querySelector('#delete-select');

function dropdownDelete() {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        deleteSelect.innerHTML = '<option value="" disabled selected>Medicines</option>'; // clearing the dropdown
        data.medicines.forEach(medicine => {
            const option = document.createElement('option');
            option.value = medicine.name; // medicine name is the value
            option.textContent = medicine.name; // displaying medicine
            deleteSelect.appendChild(option);
        })
    })
    .catch(error => {
        console.error(`Dropdown error: ${error}`);
    })
}

function deleteMedicine() {
    const selected = deleteSelect.value;
    
    if (!selected) {
        alert('Please select a medicine to be deleted');
        return;
    }
    
    // sending request to backend
    fetch('http://localhost:8000/delete', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({name: selected})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // success message
        fetchData();
        dropdownDelete();
        dropdownUpdate();
    })
    .error(error => {
        console.error(`Error deleting medicine: ${error}`);
    })
}

btnDelete.addEventListener('click', deleteMedicine);

window.onload = () => {
    fetchData(); // Fetch and display data on load
    dropdownDelete(); // Sets dropdown menu
    dropdownUpdate();
    document.querySelector("#defaultOpen").click(); // on load "add" tab shows
}; 

function openMenu(evt, tabName) {
    var i, tabContent, tabBtn;

    // hiding content
    tabContent = document.querySelectorAll(".tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";        
    }

    // removing the "active" class from tab btns
    tabBtn = document.querySelectorAll(".tab-btn");
    for (let i = 0; i < tabBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }

    document.querySelector(`#${tabName}`).style.display = "block";
    evt.currentTarget.className += " active";
}