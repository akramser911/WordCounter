

let words = 0, letters = 0;
    
    
document.getElementById("calculateBtn").onclick = function (){
    let nameMe = document.getElementById("inputField").value;
    nameMe = nameMe.toLowerCase();
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " ","@", "&","?", "!", ".", ",", "à", "â","ä" ,"é", "è", "ê","ë", "ï", "î","ô" ,"ö ","ù" ,"û", "ü "," ÿ","ç" ];

           //let nameMe = "why the fuck isnt working ??";
            let words = 1, letters = 0;
            for (let i=0; i < nameMe.length; i++){
                
            if (nameMe[i] == ' ') words++;
           
            for (let j =0; j < alphabet.length; j++) { 
                if (alphabet[j] == nameMe[i]){
                    letters ++;};
        
                }
            }
            document.getElementById('words').innerHTML = words; 
            document.getElementById('letters').innerHTML = letters; 
}



document.getElementById("resetBtn").onclick = function (){
    document.getElementById('words').innerHTML = "Number of words here"; 
    document.getElementById('letters').innerHTML = "Number of letters here";
}