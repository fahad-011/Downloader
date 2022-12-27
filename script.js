const fileInput = document.querySelector("input"),
button = document.querySelector("button");

button.addEventListener("click", e => {
    fetchFile(fileInput.value);
})

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file =>{
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = "filename";
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    })
}