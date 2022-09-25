// 1) Створити сторінку, що показує нумерований список пісень:
document.addEventListener('DOMContentLoaded', function () {

    var playList = [
        {author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
        {author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
        {author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
        {author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
        {author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
        {author: "AC/DC", song:"BACK IN BLACK"},
        {author: "QUEEN", song:"WE WILL ROCK YOU"},
        {author: "METALLICA", song:"ENTER SANDMAN"}
    ];

    const PLAY_LIST = document.createElement('ul')
    PLAY_LIST.style.listStyle = 'demical'

    for (let i = 0; i < playList.length; i++) {
        const SONG = document.createElement('li')
        SONG.innerText = `Автор: ${playList[i].author}, Трек: ${playList[i].song}`
        PLAY_LIST.append(SONG)
    }

    const HEADING = document.querySelector('h1')

    HEADING.after(PLAY_LIST)

    console.log(PLAY_LIST)

// 2) Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. 
// На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. 
// При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

    const OPEN_BUTTON = document.querySelector('.open_button')
    const WINDOW = document.querySelector('.modal_window');
    const CLOSE_BUTTON = WINDOW.querySelector('.close_button')

    OPEN_BUTTON.addEventListener('click', function() {
        WINDOW.classList.add('modal_window-active');
        OPEN_BUTTON.classList.add('open_button-active')
    });

    CLOSE_BUTTON.addEventListener('click', function() {
        WINDOW.classList.remove('modal_window-active');
        OPEN_BUTTON.classList.remove('open_button-active')
    });


// 3) Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

    const MOVE_BUTTON = document.querySelector('.move-color_button')
    const RED_COLOR = document.querySelector('.first-color');
    const YELLOW_COLOR = document.querySelector('.second-color');
    const GREEN_COLOR = document.querySelector('.third-color');

    
    MOVE_BUTTON.addEventListener('click', function() {
        if (!RED_COLOR.classList.contains('first-color-active')) {
            RED_COLOR.classList.add('first-color-active')

            if (YELLOW_COLOR.classList.contains('second-color-active')
            && !GREEN_COLOR.classList.contains('third-color-active')) {

                RED_COLOR.classList.remove('first-color-active')
                YELLOW_COLOR.classList.remove('second-color-active')
                GREEN_COLOR.classList.add('third-color-active')

            } else if (!YELLOW_COLOR.classList.contains('second-color-active')
            && GREEN_COLOR.classList.contains('third-color-active')) {
                RED_COLOR.classList.add('first-color-active')
                YELLOW_COLOR.classList.remove('second-color-active')
                GREEN_COLOR.classList.remove('third-color-active')
            }

        } else if (RED_COLOR.classList.contains('first-color-active')) {
            RED_COLOR.classList.remove('first-color-active')
            YELLOW_COLOR.classList.add('second-color-active')
            GREEN_COLOR.classList.remove('third-color-active')

        }
    });



})
