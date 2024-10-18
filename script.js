const desiredAnswers = [5, 5, 5, 5, 5]; // Desired answers for compatibility
const thresholds = {
    trueLove: 80,
    friends: 50,
    runAway: 20
};

function validate(input) {
    const value = parseInt(input.value);
    if (isNaN(value) || value < 1 || value > 5) {
        input.nextElementSibling.textContent = 'Please enter a number between 1 and 5.';
        return false;
    }
    input.nextElementSibling.textContent = '';
    return true;
}

function calculateCompatibility() {
    let totalScore = 0;

    for (let i = 0; i < 5; i++) {
        const input = document.querySelector(`#q${i + 1} input`);
        if (!validate(input)) return; // Validate input

        const userAnswer = parseInt(input.value);
        const compatibilityScore = 100 - Math.abs(userAnswer - desiredAnswers[i]) * 20; // Calculate compatibility score for each question
        totalScore += compatibilityScore;
    }

    const finalScore = Math.round(totalScore / 5); // Average score
    displayResults(finalScore);
}

function displayResults(score) {
    document.getElementById('score').textContent = score;

    let remark = '';
    if (score >= thresholds.trueLove) {
        remark = 'It seems like you two are meant for each other!';
    } else if (score >= thresholds.friends) {
        remark = 'There’s potential for a great friendship!';
    } else {
        remark = 'You might want to reconsider this relationship.';
    }

    document.getElementById('remark').textContent = remark;
    document.getElementById('result').style.display = 'block';
}
