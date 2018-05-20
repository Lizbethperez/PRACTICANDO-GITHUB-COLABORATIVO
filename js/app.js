var section=document.getElementById('area-trabajo')
var newDiv=document.createElement('div');
var newLink=document.createElement('a');
newLink.textContent="Añadir una Lista...";
newLink.setAttribute('href','#');
newDiv.appendChild(newLink);
section.appendChild(newDiv);
