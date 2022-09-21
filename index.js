function upper() {
    document.getElementById('txtarea').value = txtarea.value.toUpperCase();
}

function lower() {
    document.getElementById('txtarea').value = txtarea.value.toLowerCase();
}

function capitalize() {
    const words = document.getElementById('txtarea').value.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    document.getElementById('txtarea').value = words.join(" ");
}

function cpytxt() {
    // Select the text field
    let txtarea = document.getElementById('txtarea');
    txtarea.select();
    
     // Copy the text inside the text field
    // navigator.clipboard.writeText(txtarea.value);
    showAlert("Text changed to Uppercase!");
};

function showAlert(alrmsg) {
    console.log(alrmsg);
    document.getElementById('alert').value = alrmsg;
    document.getElementById('alert').style.display = 'block';
    
    setTimeout(()=> {
        document.getElementById('alert').style.display = 'none';
    },1000);
};
