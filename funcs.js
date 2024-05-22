function moveTo(tagName) {

    document.getElementById(tagName).scrollIntoView();

}

function addRecomm() {

    var newName = document.createElement('p');
    var newText = document.createElement('p');
    var newRecomm = document.createElement('div');
    newName.innerHTML = document.getElementById("name").value;
    newText.innerHTML = document.getElementById("text").value;
    newName.className = "recommName";
    newText.className = "recommText";
    newRecomm.className = "recomm";
    newRecomm.appendChild(newText);
    newRecomm.appendChild(newName);
    document.getElementById("recomms").appendChild(newRecomm);
    alert('Thanks for the recommendation!');

}