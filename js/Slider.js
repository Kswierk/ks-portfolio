// SLIDER

const reviews = [{
        name: "Damian Cichy",
        text: "Mateusz to Profesjonalista na każdym szczeblu prowadzonego treningu.Zajęcia grupowe w jego wydaniu, na Szkoleniu Kamili Rowińskiej, to zastrzyk mega pozytywnej energii i poprawa kondycji fizycznej. Mateusz to Specjalista pierwszej klasy w prowadzeniu indywidualnym; fachowa pomoc w zakresie badań, diety i ćwiczeń oraz fantastyczna motywacja."
    },
    {
        name: "Rafał Andrzej",
        text: "„Treningi z Mateuszem są jak musztra w wojsku. Każda minuta w 1 godzinie jest wykorzystana w 100%. Dzięki temu mogłam stwierdzić ile litrów wody jest w ludzkim ciele, ile skrajnych emocji kłębi się w głowie oraz ile słowny na kondycję psychiczną i fizyczną, na podstawie których układa trening i dostosowuje wysiłek do możliwości klienta. Jak dla mnie to facet na 6 z plusem!”"
    },
    {
        name: "Andrzej Duda",
        text: "„Treningi z Mateuszem są jak musztra w wojsku. Każda minuta w 1 godzinie jest wykorzystana w 100%. Dzięki temu mogłam stwierdzić ile litrów wody jest w ludzkim ciele, ile skrajnych emocji kłębi się w głowie oraz ile słowny na kondycję psychiczną i fizyczną, na podstawie których układa trening i dostosowuje wysiłek do możliwości klienta. Jak dla mnie to facet na 6 z plusem!”"
    },
    {
        name: "Michał Sosna",
        text: "fekty. Jeszcze trochę a moje wymiary będą idealne. Bez niego bym sobie nie poradziła, zawdzięczam mu bardzo dużo. Mateusz jest pozytywnie zakręconym, przemiłym człowiekiem. Na pewno będziecie zadowoleni trenując z nim. Pozytywna atmosfera zarówno, jak i ciężka praca. Ja jestem bardzo zadowolona z efektów i z tej znajomości!"
    }
];

// query selectors

const btnPrev = document.querySelector('.slider-button-prev');
const btnNext = document.querySelector('.slider-button-next');
const storyTxt = document.querySelector('.story-text');
const storyAuthor = document.querySelector('.story-author');

//class Slider

class Slider {
    constructor(review) {
        this.review = review;
        this.txt = null;
        this.auth = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.index = 0;
        this.storiesArray = 0;


        this.uiSelectors = {
            text: '[data-slide-txt]',
            author: '[data-slide-author]',
            buttonPrev: '[data-button-prev]',
            buttonNext: '[data-button-next]',
        };
    };


    initializeSlider() {
        this.txt = document.querySelector(this.uiSelectors.text);
        this.auth = document.querySelector(this.uiSelectors.author);
        this.prevBtn = document.querySelector(this.uiSelectors.buttonPrev);
        this.nextBtn = document.querySelector(this.uiSelectors.buttonNext);

        this.storiesArray = this.review && this.review.length;

        this.setSlide(0);
        this.disableButtons();
        this.addListeners();
    };

    addListeners() {
        this.prevBtn.addEventListener('click', () =>
            this.setSlide(--this.index),
        );
        this.nextBtn.addEventListener('click', () => this.setSlide(++this.index));
    };

    disableButtons() {
        this.index === 0 ?
            this.prevBtn.classList.add('disabled-btn') :
            this.prevBtn.classList.remove('disabled-btn');
        this.index === this.storiesArray - 1 ? this.nextBtn.classList.add('disabled-btn') :
            this.nextBtn.classList.remove('disabled-btn');
    }

    setSlide(index) {
        this.disableButtons();
        this.txt.textContent = this.review[index].text;
        this.auth.textContent = this.review[index].name;
    };
}

const slider = new Slider(reviews);

slider.initializeSlider();