document.getElementById("check-btn").addEventListener("click", function() {
    const newCharacter = document.getElementById("character-input").value.charAt(0);

    if (newCharacter.toLowerCase() === 'a' || 
        newCharacter.toLowerCase() === 'e' || 
        newCharacter.toLowerCase() === 'i' || 
        newCharacter.toLowerCase() === 'o' || 
        newCharacter.toLowerCase() === 'u') {

        document.getElementById("result").textContent = `${newCharacter} is a Vowel!`;
    } else if ((newCharacter >= 'a' && newCharacter <= 'z') || (newCharacter >= 'A' && newCharacter <= 'Z')) {
        document.getElementById("result").textContent = `${newCharacter} is a Consonant.`;
    } else {
        document.getElementById("result").textContent = "Invalid input, please enter a valid alphabet.";
    }
});


