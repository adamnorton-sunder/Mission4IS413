//$("#submitBtn").click(function () {
//    alert('Test')
//}))



document.getElementById('submitBtn').addEventListener('click', function () {

    asgn = +document.getElementById('asgn').value;
    group = +document.getElementById('group').value;
    quiz = +document.getElementById('quiz').value;
    mid = +document.getElementById('mid').value;
    fin = +document.getElementById('fin').value;
    intex = +document.getElementById('intex').value;

    let grade = (0.5 * asgn) + (0.1 * group) + (0.1 * quiz) + (0.1 * mid) + (0.1 * fin) + (0.1 * intex);
    let letter = '';

    if (grade >= 94) {
        letter = 'A'
    }
    else if (grade < 94 && grade >= 90) {
        letter = 'A-'
    }
    else if (grade < 90 && grade >= 87) {
        letter = 'B+'
    }
    else if (grade < 87 && grade >= 84) {
        letter = 'B'
    }
    else if (grade < 84 && grade >= 80) {
        letter = 'B-'
    }
    else {
        letter = 'Bad grade ://';
    }

    alert(grade);
    alert(letter);

})