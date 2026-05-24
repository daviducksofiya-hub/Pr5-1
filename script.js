function makeCards(){
 const name=prompt("Ім'я","Софія")||"Софія";
 const job=prompt("Посада","Веб-розробниця")||"Веб-розробниця";
 const phone=prompt("Телефон","+380 XX XXX XX XX")||"+380 XX XXX XX XX";
 let card='<div class="card"><h3>'+name+'</h3><p>'+job+'</p><strong>'+phone+'</strong></div>';
 let html='<table>';
 for(let r=0;r<12;r++){html+='<tr>';for(let c=0;c<3;c++)html+='<td>'+card+'</td>';html+='</tr>'}
 document.getElementById('cards').innerHTML=html+'</table>';
}
