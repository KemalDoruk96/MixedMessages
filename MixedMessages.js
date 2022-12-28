const existRandomNumber = (num) => {
    
    return Math.floor(Math.random() * num);
  }
const getOneOfwords = about => {  
const ataturkWords = {
       aboutPeace: ['Peace at Home, Peace in the World', 'Unless a nation s life faces peril, war is murder.','Sovereignty is not given, it is taken.'],
       aboutHumanity : ['Everything we see in the world is the creative work of women.', '“Human kind is made up of two sexes, women and men. Is it possible that a mass is improved by the improvement of only one part and the other part is ignored? Is it possible that if half of a mass is tied to earth with chains and the other half can soar into skies?”','Teachers are the one and only people who save nations.'],
       aboutSience : ['The future is in the skies.','Our true mentor in life is science.','Science is the most reliable guide in life.','he biggest battle is the war against ignorance.']
}
// Store the 'wisdom' in an array
let wordList = [];

  for(let about in ataturkWords){
    
    let optionID = existRandomNumber(ataturkWords[about].length)
     
    switch(about) {
        case 'aboutPeace':
            return `A Ataturk word that is given you about Piece: "${ataturkWords[about][optionID]}".` ;
        case 'aboutHumanity':
            return `A Ataturk word that is given you about humanity: "${ataturkWords[about][optionID]}".` ;
        case 'aboutSience':
            return `A Ataturk word that is given you about Sience: "${ataturkWords[about][optionID]}".` ;
        default:
            return 'There is no choice';
      }



}
}

function showChoice(word) {
    
    
    console.log(getOneOfwords(word.toLowerCase()));
  }
 
showChoice('aboutsience');  
  
