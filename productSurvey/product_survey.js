function submitFeedback() {
    // Получаем значения из полей формы
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Отображаем данные на странице
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Показываем блок с результатами
    document.getElementById('userInfo').style.display = 'block';

    // Показываем сообщение об успешной отправке
    alert('Thank you for your valuable feedback');
}

const submitButton = document.getElementById('submitBtn');

// Добавляем обработчик на клик по кнопке
submitButton.onclick = submitFeedback;

// Добавляем обработчик на нажатие клавиши Enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
