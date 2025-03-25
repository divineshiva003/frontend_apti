

function checkAnswer(selectedOption,correct,option,index) {
    const labels = selectedOption.parentNode.parentNode.querySelectorAll('label');
    const btn=document.getElementById(`btn${index+1}`);
    console.log(selectedOption);
    console.log(correct);
    console.log(option);
    
    labels.forEach(label => {
        label.classList.remove('correct', 'wrong');
    });
    if (selectedOption.value === "correct") {
        selectedOption.parentNode.classList.add('correct');
       btn.style.opacity="0";
    } else {
        selectedOption.parentNode.classList.add('wrong');
        btn.innerText=option;
        btn.style.opacity="1";

       
}
}