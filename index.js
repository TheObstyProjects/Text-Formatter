function upper() {
    document.getElementById('txtarea').value = txtarea.value.toUpperCase();
    showAlert("Text changed to Uppercase!");
}

function lower() {
    document.getElementById('txtarea').value = txtarea.value.toLowerCase();
    showAlert("Text changed to Lowercase!");
}

function capitalize() {
    const words = document.getElementById('txtarea').value.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    document.getElementById('txtarea').value = words.join(" ");
    showAlert("Text changed to Capitalize");
}

function cpytxt() {
    // Select the text field
    let txtarea = document.getElementById('txtarea');
    txtarea.select();
    
     // Copy the text inside the text field
    // navigator.clipboard.writeText(txtarea.value);
    showAlert("Text copied to clipboard!");
};

function showAlert(alrmsg) {
    document.getElementById('alert').innerHTML = alrmsg;
    document.getElementById('alert').style.display = 'block';
    
    setTimeout(()=> {
        document.getElementById('alert').style.display = 'none';
    },1000);
};
