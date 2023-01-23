const dropZone = document.getElementById("drop-zone");

// Listen for file drops on the drop zone
dropZone.addEventListener("drop", handleDrop);
dropZone.addEventListener("dragover", handleDragOver);

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();

  // Get the files that were dropped
  const files = e.dataTransfer.files;

  // Create a new FormData object
  const formData = new FormData();

  // Add the files to the FormData object
  for (let i = 0; i < files.length; i++) {
    formData.append("file", files[i]);
  }

  // Send the files to the server
  fetch("http://localhost:4000/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((response) => {
      alert(response);
    });
}
