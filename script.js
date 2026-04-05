// ! Массив с премьерами

const premieres = [
  {
    name: "Аватар 3",
    poster: "img/films/avatar3.jpg",
    date: "2025-12-19"
  },
  {
    name: "Барби",
    poster: "img/films/barbie.webp",
    date: "2026-09-19"
  },
  {
    name: "Человек-паук: Паутина вселенных",
    poster: "img/films/spiderman.jpg",
    date: "2026-11-02"
  },
  {
    name: "Чебурашка",
    poster: "img/films/cheburashka.jpg",
    date: "2025-01-01"
  }
];

// ! Массив с кинотекой

const films = [
  {
    name: "Зверополис",
    poster: "img/films/zootopia.webp",
    rating: 10,
    genre: "Мультфильм",
    favourite: true,
    date: "2026-11-02"
  },
  {
    name: "Кто я",
    poster: "img/films/whoami.jpg",
    rating: 7,
    genre: "Фильм",
    favourite: false,
    date: "2014-09-25"
  },
  {
    name: "Бывает и хуже",
    poster: "img/films/themiddle.webp",
    rating: 9,
    genre: "Сериал",
    favourite: true,
    date: "2009-09-30"
  },
  {
    name: "Я на перемотке!",
    poster: "img/films/more/roll.jpeg",
    rating: 3,
    genre: "Фильм",
    favourite: false,
    date: "2022-04-14"
  },
  {
    name: "Бэймакс!",
    poster: "img/films/more/baymax.webp",
    rating: 6,
    genre: "Мультфильм",
    favourite: false,
    date: "2014-10-23"
  },
  {
    name: "Как я встретил вашу маму",
    poster: "img/films/more/mother.webp",
    rating: 7,
    genre: "Сериал",
    favourite: true,
    date: "2005-09-19"
  },
  {
    name: "Валли",
    poster: "img/films/more/walle.webp",
    rating: 9,
    genre: "Мультфильм",
    favourite: false,
    date: "2008-06-27"
  },
  {
    name: "Трудности ассимиляции",
    poster: "img/films/more/fresh.webp",
    rating: 8,
    genre: "Сериал",
    favourite: false,
    date: "2017-09-13"
  },
  {
    name: "Молодой человек",
    poster: "img/films/more/young.webp",
    rating: 7,
    genre: "Фильм",
    favourite: false,
    date: "2022-01-20"
  },
  {
    name: "Неисправимый Рон",
    poster: "img/films/more/ron.webp",
    rating: 10,
    genre: "Мультфильм",
    favourite: true,
    date: "2021-10-15"
  },
  {
    name: "Клаус",
    poster: "img/films/more/klaus.webp",
    rating: 10,
    genre: "Мультфильм",
    favourite: false,
    date: "2019-11-08"
  },
  {
    name: "Ральф против интернета",
    poster: "img/films/more/ralph.webp",
    rating: 2,
    genre: "Мультфильм",
    favourite: false,
    date: "2018-11-21"
  },
  {
    name: "Отель «Гранд Будапешт»",
    poster: "img/films/more/hotel.webp",
    rating: 1,
    genre: "Фильм",
    favourite: false,
    date: "2014-03-06"
  },
  {
    name: "Друзья",
    poster: "img/films/more/friends.webp",
    rating: 6,
    genre: "Сериал",
    favourite: false,
    date: "1994-09-22"
  },
  {
    name: "Голдберги",
    poster: "img/films/more/goldbergs.webp",
    rating: 5,
    genre: "Сериал",
    favourite: false,
    date: "2013-09-24"
  },
  {
    name: "Побег",
    poster: "img/films/more/prisonbreak.webp",
    rating: 9,
    genre: "Сериал",
    favourite: true,
    date: "2005-08-29"
  },
  {
    name: "В метре друг от друга",
    poster: "img/films/more/apart.webp",
    rating: 6,
    genre: "Фильм",
    favourite: true,
    date: "2019-03-15"
  },
  {
    name: "Чудо",
    poster: "img/films/more/wonder.webp",
    rating: 3,
    genre: "Фильм",
    favourite: false,
    date: "2017-11-17"
  },
  {
    name: "Малыш на драйве",
    poster: "img/films/more/driver.webp",
    rating: 9,
    genre: "Фильм",
    favourite: true,
    date: "2017-06-28"
  },
  {
    name: "С любовью, Рози",
    poster: "img/films/more/rosie.webp",
    rating: 7,
    genre: "Фильм",
    favourite: true,
    date: "2014-10-22"
  },
];

// ! Добавление на страницу премьеры

const slider = document.querySelector(".slider"),
  slidesField = slider.querySelector(".slider__inner");// переместили константы, так как сначала нужно организовать в html слайдеры, а потом искать по необходимым классам - нужное.


premieres.forEach((item, index) => { // перебираем массив с премьерами и добавляем их в html

  slidesField.innerHTML += `<div class="slider__item" data-slider-item="${index}">
                <img src="${item.poster}" alt="" class="slider__preview">

                <div class="slider__text">
                  <h3 class="slider__title">${item.name}</h3>
                  <div class="timer">

                  </div>
                </div>
              </div>`

  setClock(item, index); // функция установки таймера до премьеры. Вызываем ее чтобы не было задержки.

  setInterval(setClock, 1000, item, index);
});

function setClock(item, index) {

  const timer = slider.querySelector(`[data-slider-item="${index}"] .timer`);

  const t = Date.parse(item.date) - Date.now(), // вычисляем сколько в мс осталось до премьеры
    days = Math.floor(t / 1000 / 60 / 60 / 24);

  if (t > 0 && days < 205) {
    const seconds = Math.floor((t / 1000) % 60), // секунды, которые не поместились в минуты
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / 1000 / 60 / 60) % 24);

    timer.innerHTML = `<p class="timer__desc">До премьеры осталось:</p>
                    <div class="timer__row">
                      <div class="timer__item">
                        <span class="timer__count">${getZero(days)}</span>
                        дней
                      </div>
                      <div class="timer__item">
                        <span class="timer__count">${getZero(hours)}</span>
                        часов
                      </div>
                      <div class="timer__item">
                        <span class="timer__count">${getZero(minutes)}</span>
                        минут
                      </div>
                      <div class="timer__item">
                        <span class="timer__count">${getZero(seconds)}</span>
                        секунд
                      </div>
                    </div>`
  } else if (t <= 0) {
    timer.innerHTML = `<p class="timer__desc">Премьера состоялась ${convertDate(item.date)} <button class="timer__link">Оценить</button>
                    </p>`;
  } else {
    timer.innerHTML = `<p class="timer__desc">Премьера состоится ${convertDate(item.date)}</p>`;
  }

  function getZero(num) { // добавление 0 перед цифрой, если нужно
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  function convertDate(date) { // из формата yyyy--mm--dd в dd.mm.yyyy
    date = date.split("-");
    const year = date[0];

    date[0] = date[2];
    date[2] = year;

    return date.join(".");
  };

};


//! приветствие пользователя

const helloSelector = document.querySelector("#hello"),
  nameSelector = document.querySelector("#name"),
  date = new Date,
  hoursNow = date.getHours();

if (hoursNow >= 6 && hoursNow <= 11) {
  helloSelector.textContent = "Доброе утро";
} else if (hoursNow >= 12 && hoursNow <= 15) {
  helloSelector.textContent = "Добрый день";
} else if (hoursNow >= 16 && hoursNow <= 22) {
  helloSelector.textContent = "Добрый вечер";
} else {
  helloSelector.textContent = "Доброй ночи";
}
nameSelector.addEventListener("click", () => {

  let newName;

  do {
    newName = prompt("Введите ваше имя:");
    if (newName == null) return; // Если нажали отмена -> выходим из цикла

  } while (!newName.trim() || newName.length > 15); //строка из пробелов или пустая строка или символов > 15 -> продолжаем цикл

  if (userName != newName) {
    userName = newName;
    localStorage.setItem("name", userName.trim().replace(/\s+/g, ' '));
    nameSelector.textContent = userName.trim().replace(/\s+/g, ' ');
  }

});

let userName = localStorage.getItem("name") || "Пользователь";
nameSelector.textContent = userName;

// //!Слайдер простая версия

// const slider = document.querySelector(".slider"),
//       slides = slider.querySelectorAll(".slider__item"),
//       prev = slider.querySelector(".slider__arrow--prev"),
//       next = slider.querySelector(".slider__arrow--next");

// let slideIndex = 0;


// //+1 след слйд, -1 пред слайд

// // changeSlide(-1); // показать пред слайд
// // changeSlide(1); // показать след слайд

// function changeSlide(change){

//   //ищем индекс слайда
//   slideIndex += change;

//   //зацикленность слайдов
//   if (slideIndex >= slides.length){
//     slideIndex = 0;
//   } else if(slideIndex < 0){
//     slideIndex = slides.length - 1;
//   }

//   // делаем все слайды невидимыми
//   slides.forEach(item => item.style.display = "none");

//   // показываем слайд под текущим индексом
//   slides[slideIndex].style.display = "block";
// }

// //по клику переключаем слайды
// prev.addEventListener("click", () => changeSlide(-1));
// next.addEventListener("click", () => changeSlide(1));

// // первый слайд при загрузке страницы
// changeSlide(0);

// // перебираем слайды и делаем 100% ширину, чтобы их было видно во всю ширину контейнера
// slides.forEach(item => item.style.width = "100%");

// ! Слайдер сложн. версия с прокруткой

const slides = slider.querySelectorAll(".slider__item"),
  prev = slider.querySelector(".slider__arrow--prev"),
  next = slider.querySelector(".slider__arrow--next"),
  slidesWindow = slider.querySelector(".slider__wrapper");

let widthSlideWithPx = window.getComputedStyle(slidesWindow).width, // смотрим на элемент и вычисляем какие стили к нему применил браузер. 
  // И ищем ширину. Присваиваем переменной. window - видимая область страницы - это сама вкладка. Этот метод нужен чтобы доставать данные из css файла.
  widthSlide = +widthSlideWithPx.slice(0, widthSlideWithPx.length - 2); //обрезаем надпись px и переводим строку в число.

let slideIndex = 1, // индекс слайда
  offset = -(widthSlide * slideIndex); // на сколько поле будет смещено

slides.forEach(item => item.style.width = "100%");
slidesField.style.width = 100 * slides.length + "%";


window.addEventListener('resize', () => { //исправление багов при изменении ширины страницы

  slidesField.style.transition = "none"; // Убираем анимацию, чтобы слайд не "ехал" во время ресайза

  widthSlideWithPx = window.getComputedStyle(slidesWindow).width;
  widthSlide = +widthSlideWithPx.slice(0, widthSlideWithPx.length - 2);

  offset = -(widthSlide * slideIndex);
  slidesField.style.transform = `translate(${offset}px)`;

  // clearTimeout(slidesField.resizeTimer); // Возвращаем анимацию через микро-паузу после окончания ресайза
  //   slidesField.resizeTimer = setTimeout(() => {
  //       slidesField.style.transition = "0.5s all";
  //   }, 100);

});


next.addEventListener("click", () => { // переход к след слайду

  offset -= widthSlide;
  slideIndex++;
  slidesField.style.transition = "0.5s all"; //добавляем плавное перемещение вручную

  // slidesField.style.transform = `translate(${offset}px)`;
  // showAndHideArrows();

  moveSlides(); // замена закомментированного передвижения

});

prev.addEventListener("click", () => { // переход к пред слайду

  offset += widthSlide;
  slideIndex--;
  slidesField.style.transition = "0.5s all"; //добавляем плавное перемещение вручную

  // slidesField.style.transform = `translate(${offset}px)`;
  // showAndHideArrows();

  moveSlides(); // замена закомментированного передвижения

});

function showAndHideArrows() { // показ не показ стрелочек

  if (slides.length <= 1) { // кол-во слайдов = 1
    next.style.display = "none";
    prev.style.display = "none";
  } else if (slideIndex === 0) { // первый слайд
    prev.style.display = "none";
    next.style.display = "block";
  } else if (slideIndex === slides.length - 1) { // псслений слайд
    prev.style.display = "block";
    next.style.display = "none";
  } else {
    next.style.display = "block";
    prev.style.display = "block";
  }
}

showAndHideArrows(); // стрелочки при загрузке страницы(показ не показ)

//! индикаторы для слайдера

// <!-- <ol class="slider__indicators">
//             <li class="slider__dot"></li>
//             <li class="slider__dot slider__dot--active"></li>
//             <li class="slider__dot"></li>
//           </ol> -->


const indicators = document.createElement("ol"); // создаем список
indicators.classList.add("slider__indicators"); // добавляем класс

slider.append(indicators); // добавляем этот список в doc

for (let i = 0; i < slides.length; i++) {
  if (slides.length <= 1) break; // если слайдов <= 1, то просто выходим из цикла

  const dot = document.createElement("li");
  dot.classList.add("slider__dot");         // создаем li и добавляем необходимые классы и атрибуты
  dot.setAttribute("data-slide-index", i);

  if (i == slideIndex) dot.classList.add("slider__dot--active"); // если i -> индекс активного слайда, то добавляем соотв. класс

  dot.addEventListener("click", () => {                   // на каждый индикатор вешаем слушатель событий
    slideIndex = +dot.getAttribute("data-slide-index"); // сохраняем индекс в индекс окна к которому перемещаемся

    offset = -(widthSlide * slideIndex); // ширина перемещения слайда

    // slidesField.style.transform = `translate(${offset}px)`; //перемещаемся на нужную ширину
    // showAndHideArrows(); //меняем стрелки

    moveSlides(); // замена закомментированного передвижения

    slidesField.style.transition = "0.5s all"; // добавляем плавное перемещение при клике
  });

  indicators.append(dot); // добавляем каждую точку в проходе цикла в обертку
}

const dots = indicators.querySelectorAll(".slider__dot");

function moveSlides() { // функция перемещения слайдов

  slidesField.style.transform = `translate(${offset}px)`;
  showAndHideArrows();

  dots.forEach(dot => dot.classList.remove("slider__dot--active")); // удаляем все классы активности при передвижении
  dots[slideIndex].classList.add("slider__dot--active"); // добавляем класс активности в текущий слайд следуя из индекса
}


moveSlides();


// ! Добавляем на страницу кинотеку

const filmsSelector = document.querySelector(".films"), // место, с пространством кинотеки
  filmsWrapper = filmsSelector.querySelector(".films__wrapper"); // место, где будут находится фильмы

function addFilmsOnPage(films) {

  if (films.length === 0) {
    filmsWrapper.innerHTML = "<p>Фильмы не найдены</p>" // если список с  фильмами пустойЮ то пишем, что не найдены

  } else { // добавляем код с загрузкой

    filmsWrapper.innerHTML = `<div class="loader loader--style6" title="5"> 
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <rect x="0" y="13" width="4" height="5" fill="#333">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5"
            begin="0s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="10" y="13" width="4" height="5" fill="#333">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5"
            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="13" width="4" height="5" fill="#333">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5"
            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>`

    let filmsText = ""; // переменная в которой будут находится фильмы

    films.forEach(film => {

      const favourite = film.favourite ? "checked" : ""; // если фильм в избранных, то добавляем чекед

      // сам фильм со своими параметрами
      filmsText += ` 
      <div class="film">
        <img src="${film.poster}" alt="" class="film__poster">
          <div class="film__content">
            <div class="film__content-row">
              <div class="rating film__rating">${film.rating}</div>
              <label class="film__favourite favourite">
                <input type="checkbox" name="favourite" class="favourite__checkbox" ${favourite}>
                  <span class="favourite__heart"></span>
              </label>
            </div>
            <div class="film__content-row">
              <h4 class="film__name">${film.name}</h4>
              <div class="film__genre">${film.genre}</div>
            </div>
          </div>
      </div>
      `
    });

    setTimeout(() => filmsWrapper.innerHTML = filmsText, 700); // задержка перед загрузкой фильмов в обертку

  }
}

addFilmsOnPage(films); // исполняем функцию



// ! Фильтрация и сортировка фильмов

// сама форма
let formSelector = filmsSelector.querySelector(".films__form");
// инпут, отв за люб фильмы
let favouriteSelector = formSelector.querySelector('input[name="favourites"]');
// инпут, отв за фильмы с высокой оценкой 
let bestSelector = formSelector.querySelector('input[name="best"]');
// список мнпутов, отв за жанры
let genresSelector = formSelector.querySelectorAll('input[name="genre"]');
// инпут отв за сортировку (выпадающий список)
let sortSelector = formSelector.querySelector('select[name="sort"]');


formSelector.addEventListener("change", () => {

  const filters = { genres: [] };

  genresSelector.forEach(item => {
    if (item.checked) filters.genres.push(item.value);

  })

  if (favouriteSelector.checked) filters.favourite = true;
  if (bestSelector.checked) filters.best = true;

  let filteredFilms = filterFilms(films, filters);


  if (sortSelector.value != "Без сортировки") {
    filteredFilms = sortFilms(filteredFilms, sortSelector.value);
  }

  addFilmsOnPage(filteredFilms);
});


// фильтрация

function filterFilms(films, filters) {


  const filteredFilms = [];

  if (filters.favourite && filters.best) {

    films.forEach(film => {

      if (film.favourite && film.rating >= 8) checkGenres(film);

    });
  } else if (filters.favourite) {

    films.forEach(film => {

      if (film.favourite) checkGenres(film);

    });

  } else if (filters.best) {

    films.forEach(film => {

      if (film.rating >= 8) checkGenres(film);

    });
  } else {
    films.forEach(film => checkGenres(film));
  }


  function checkGenres(film) {

    filters.genres.forEach(genre => {
      if (film.genre === genre) filteredFilms.push(film);
    });

  }

  return filteredFilms;

  // для рефакторинга -> filter
}

//сортировка

function sortFilms(films, sort) { // sort

  switch (sort) {
    case "От высокой к низкой":

      films.sort((film1, film2) => film1.rating < film2.rating ? 1 : -1);

      break;

    case "От низкой к высокой":

      films.sort((film1, film2) => film1.rating > film2.rating ? 1 : -1);

      break;

    case "От а до я":

      films.sort((film1, film2) => film1.name > film2.name ? 1 : -1);

      break;

    case "От я до а":

      films.sort((film1, film2) => film1.name < film2.name ? 1 : -1);

      break;

    case "Сначала новые":

      films.sort((film1, film2) => Date.parse(film1.date) < Date.parse(film2.date) ? 1 : -1);

      break;

    case "Сначала старые":

      films.sort((film1, film2) => Date.parse(film1.date) > Date.parse(film2.date) ? 1 : -1);

      break;
  }

  return films;

}

// ! Открытие и закрытие модального окна. Длбавление фильма.

const formWrapper = document.querySelector(".filling-form-wrapper"),
  body = document.querySelector("body"),
  filmsBtnPlus = filmsSelector.querySelector(".films__btn"),
  filmsBtnCross = formWrapper.querySelector(".exit-btn");

// открытие закрытие модального окна

filmsBtnPlus.addEventListener("click", () => {

  formWrapper.classList.remove("none");
  body.style.overflow = "hidden";

});

formWrapper.addEventListener("click", (event) => {

  if (event.target === formWrapper || event.target === filmsBtnCross ) {

    formWrapper.classList.add('none');
    body.style.overflow = '';

  }

});

document.addEventListener('keydown', (event) => {



  if (event.key === 'Escape' && !formWrapper.classList.contains('none')) {
    formWrapper.classList.add('none');
    body.style.overflow = '';

    if (document.activeElement) {
    document.activeElement.blur();
  }

  }

});

// добавление фильма

