
function showGrades() {
    const lesson1 = document.getElementById("lesson1").value;
    const lesson2 = document.getElementById("lesson2").value;
    const lesson3 = document.getElementById("lesson3").value;
    const score1 = document.getElementById("score1").value;
    const score2 = document.getElementById("score2").value;
    const score3 = document.getElementById("score3").value;

    const grades = document.getElementById("grades");
    grades.innerHTML = 
    `<ul>
          <li>${lesson1}: ${score1}</li>
          <li>${lesson2}: ${score2}</li>
          <li>${lesson3}: ${score3}</li>
    </ul>`;

    const average =
        (parseInt(score1) + parseInt(score2) + parseInt(score3)) / 3;
    const averageDisplay = document.getElementById("average");
    averageDisplay.innerHTML = `میانگین: ${Math.floor(average)}`;
}