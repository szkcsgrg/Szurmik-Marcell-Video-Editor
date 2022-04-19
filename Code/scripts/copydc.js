function copy(){
     let link = "KorsoTea#3244";
    navigator.clipboard.writeText(link).then(() => {
        alert("Successfully copied.");
      })
}
