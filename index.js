const txtarea = document.getElementById('txtarea');
const output = document.getElementById('output');

function input() {
    output.innerHTML = txtarea.value;
}

function upper() {
    output.innerHTML = txtarea.value.toUpperCase();
}

function lower() {
    output.innerHTML = txtarea.value.toLowerCase();
}

function capitalize() {
    const words = txtarea.value.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    output.innerHTML = words.join(" ");
}

function cpytxt() {
    // Select the text field
    txtarea.select();
    txtarea.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(txtarea.value);
  
    // Alert the copied text
    alert("Copied the text: " + txtarea.value);
}
