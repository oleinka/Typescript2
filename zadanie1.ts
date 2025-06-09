// Tworzymy nowy element <p>
const paragraph: HTMLParagraphElement = document.createElement('p');

// Ustawiamy zawartość tekstową
paragraph.textContent = 'Hello';

// Dodajemy do body dokumentu
document.body.appendChild(paragraph);