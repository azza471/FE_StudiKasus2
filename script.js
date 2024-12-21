const dataForm = document.getElementById("dataForm");
const dataTable = document.getElementById("dataTable");

let data = [];
let editIndex = -1;

// Function to render table
function renderTable() {
  dataTable.innerHTML = "";
  data.forEach((item, index) => {
    const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>
                    <button class="edit" onclick="editData(${index})">Edit</button>
                    <button class="delete" onclick="deleteData(${index})">Delete</button>
                </td>
            </tr>
        `;
    dataTable.innerHTML += row;
  });
}

// Function to handle form submission
dataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (editIndex === -1) {
    // Add new data
    data.push({ name, email });
  } else {
    // Update existing data
    data[editIndex] = { name, email };
    editIndex = -1;
  }

  dataForm.reset();
  renderTable();
});

// Function to edit data
function editData(index) {
  const item = data[index];
  document.getElementById("name").value = item.name;
  document.getElementById("email").value = item.email;
  editIndex = index;
}

// Function to delete data
function deleteData(index) {
  data.splice(index, 1);
  renderTable();
}

// Initial render
renderTable();
