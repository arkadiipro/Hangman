
let page = document;
/*let button = document.getElementById("but"); */let attempts = 10;let attempt = null;let words = ["arkadii","love","zlata","and","brat","mark","sun", "moon", "star", "water", "fire", "earth", "air", "house", "tree", "flower", "book", "pen", "desk", "chair", "computer", "phone", "music", "road", "car", "city", "village", "time", "idea", "joy", "sadness", "truth", "lie", "good", "evil", "path", "goal", "dream", "work", "rest", "food", "clothes", "wind", "night", "morning", "evening", "mountain", "river", "forest", "field", "bird", "fish", "stone", "sand", "glass", "iron"];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = []
for(var i = 0; i < word.length ; i++) {
 answerArray[i] = "_"
}
let remainingLetters = word.length;
let p = document.getElementById("word1") 
 function check(){
     if(remainingLetters === 0){
         alert("Слово било " + answerArray.join("") + " Харош бро")
     } else if (attempts !== 0){
         getWord()
     } else {
         alert("У вас 0 попиток, начните заново.")
     }
 }

 /* function getWord(){

     let guess = prompt("Напишіть букву")
     if (guess ===null){
         
     } else if(guess.length !== 1){
         alert("одну букву пж")
     } else {
         attempt = remainingLetters
         for (var j = 0; j < word.length; j++){

             if(word[j] === guess) {
                 answerArray[j] = guess
                 remainingLetters--
             } 
             
         } 
         if (attempt === remainingLetters){
             attempts--
             getChel()
         }
     }
     $("#word1").text(answerArray.join(" "))
     if (remainingLetters === 0) {
         alert("Слово било " + answerArray.join("") + " Харош бро")
     }
 } */
     let canvas = document.getElementById("canvas")
     canvas.style.border = "1px solid red"
     canvas.width = 600 
     canvas.height = 600
     let ctx = canvas.getContext("2d")
     let width = canvas.width;
     if (window.innerWidth < width ) {
      width = window.innerWidth
     }
function getChel(){
  let x = width / 100
     if (attempts === 10){
     } else if (attempts === 9 ){
         ctx.fillRect(18 * x,10 * x,4 * x,30 * x)
     } else if (attempts === 8 ){
         ctx.fillRect(48 * x,10 * x,4 * x,30 * x)
     } else if (attempts === 7 ){
         ctx.fillRect(20 * x,8 * x,30 * x,4 * x)
     } else if (attempts === 6 ){
         ctx.fillRect(20 * x,38 * x,30 * x,4 * x)
     } else if (attempts === 5 ){
         ctx.fillRect(33 * x,40 * x,4 * x,30 * x)
     } else if (attempts === 4 ){
         ctx.lineWidth = 4 * x
         ctx.beginPath()
         ctx.moveTo(35 * x,50 * x)
         ctx.lineTo(10 * x,70 * x)
         ctx.stroke()
     } else if (attempts === 3 ){
         ctx.lineWidth = 4 * x
         ctx.beginPath()
         ctx.moveTo(35 * x,50 * x)
         ctx.lineTo(60 * x,70 * x)
         ctx.stroke()
     } else if (attempts === 2 ){
         ctx.lineWidth = 4 * x
         ctx.beginPath()
         ctx.moveTo(35 * x,70 * x)
         ctx.lineTo(20 * x,90 * x)
         ctx.stroke()
     } else if (attempts === 1 ){
         ctx.lineWidth = 4 * x
         ctx.beginPath()
         ctx.moveTo(35 * x,70 * x)
         ctx.lineTo(50 * x,90 * x)
         ctx.stroke()
     } else if (attempts === 0 ){
       alert ("Слово било " + word +". " + "Ти не угадал бро" )
       $("#but").innerHtml
     }
 }
 page.addEventListener("keydown", function(event) {
     
         attempt = remainingLetters
         for (var j = 0; j < word.length; j++){

             if(word[j] === event.key) {
                 answerArray[j] = event.key;
                 remainingLetters--
             } 
             
         } 
         if (attempt === remainingLetters){
             attempts--
             getChel()
         }

         p.innerText = answerArray.join(" ")
         if (remainingLetters === 0) {
          alert("Слово било " + answerArray.join("") + " Харош бро")
      }
 })