import { books } from './data.js';

const ChangeBook = (_ => {
    //cache the DOM
    const $month = document.querySelector('.hero__month');
    const $book = document.querySelector('.hero__book');
    const $previous = document.querySelector('.hero__bttn-previous');
    const $next = document.querySelector('.hero__bttn-next');
    const $author = document.querySelector('.hero__author')

    // set current book
    let date = new Date();
    let currentBook = date.getMonth();

    //load current book
    const init = _ => {
        showBook(currentBook);
        listeners();
    }

    // listeners
    const listeners = _ => {
        //previous book
        $previous.addEventListener("click", _ => {
            currentBook--;
            if (currentBook <= 0) {
                currentBook = 11;
            }
            showBook(currentBook);
        })
        // next book
        $next.addEventListener("click", _ => {
            currentBook++;
            if (currentBook >= books.length) {
                currentBook = 0;
            }
            showBook(currentBook);
        })
    }

    //set changes
    const showBook = e => {
        const book = books[e];
        $book.style.backgroundImage = book.url;
        $month.innerHTML = book.month;
        $author.style.backgroundImage = book.author;
    }

    return {
        init
    }
})();

export default ChangeBook;