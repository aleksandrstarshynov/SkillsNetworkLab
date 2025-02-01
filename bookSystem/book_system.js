// Массив для хранения списка книг
let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value.trim();
    const authorName = document.getElementById('authorName').value.trim();
    const bookDescription = document.getElementById('bookDescription').value.trim();
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // Проверка на заполненность всех полей
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber) && pagesNumber > 0) {
        // Создаем объект книги
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        // Добавляем книгу в массив
        books.push(book);

        // Отображаем список книг
        showBooks();

        // Очищаем поля ввода
        clearInputs();
    } else {
        alert('Please fill in all fields correctly. Number of pages must be a positive number.');
    }
}

function showBooks() {
    const booksContainer = document.getElementById('books');

    // Проверяем, есть ли книги
    if (books.length === 0) {
        booksContainer.innerHTML = '<p>No books added yet.</p>';
        return;
    }

    // Формируем HTML-код списка книг
    const booksHTML = books.map((book, index) => `
        <div class="book-card">
            <h2>Book ${index + 1}</h2>
            <p><strong>Book Name:</strong> ${book.name}</p>
            <p><strong>Author Name:</strong> ${book.authorName}</p>
            <p><strong>Description:</strong> ${book.bookDescription}</p>
            <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        </div>
    `).join('');

    booksContainer.innerHTML = booksHTML;
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
