
var author;
var title;
var category;

let list =['author','title','category']
list = [
  ['Guillaume Debré',' L\'affaire Lafayette','roman historique'],
  ['Michael Ende','L\'Histoire sans fin','fantasy'],
  ['Giacomo Casanova','Histoire de ma vie','autobiographie'],
  ['Gérald Messadié','La conspiration Jeanne d\'Arc','roman historique'],
  ['Marie Cardinal','Les mots pour le dire','autobiographie'],
  ['J.R.R. Tolkien','Le Seigneur des anneaux','fantasy'],
  ['Hervé Bazin','Vipère au poing','autobiographie'],
  ['Andrzej Sapkowski','Le Sorceleur','fantasy'],
  ['George R. R. Martin','Le Trône de fer','fantasy']];




  function ha(category){
  let newl= [];
  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list.length; j++) {
        if (list[i][2] === category){
          newl.push(list[i]);

        }

  }

    document.getElementById('author').innerHTML+= list[i][0] +'<br>';
    document.getElementById('title').innerHTML+= list[i][1] +'<br>';
    document.getElementById('category').innerHTML+= list[i][2] +'<br>';
}


}






