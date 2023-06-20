async function submit() {
    var inputPrompt = document.getElementById('input-prompt');
    var submitButton = document.getElementById('submit-button');
    submitButton.disabled = true;
    submitButton.innerHTML = 'Fetching response...';

    try {
        // make API call
        inputPrompt.value = "";
    }
    catch (error) {
        console.log(error);
    }
    finally{
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send prompt';
    }
}

function setOutputTextbox(text){
    var outputTextbox = document.getElementById('output-textbox');
    outputTextbox.value = text;
}
