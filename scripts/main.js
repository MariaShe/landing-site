//Объявление массива, состоящего из объектов

const designes = [
    {
      city: 'Rostov-on-Don<br>LCD admiral',
      apartmentArea: '81 m2',
      repairTime: '3.5 months',
      img: '../img/slider-script/admiral-image.jpg'
    },
    {
      city: 'Sochi<br>Thieves',
      apartmentArea: '105 m2',
      repairTime: '4 months',
      img: '../img/slider-script/sochi-image.jpg'
      },
    {
      city: 'Rostov-on-Don<br>Patriotic',
      apartmentArea: '93 m2',
      repairTime: '3 months',
      img: '../img/slider-script/patriotic-image.jpg'
      }
  ]

//Объявление переменных

  const city = document.querySelector('.city-js');
  const apartmentArea = document.querySelector('.apartment-js');
  const repairTime = document.querySelector('.time-js');
  const img = document.querySelector('.slide-js');
  const circlesContainer = document.querySelector('.circles-container-js');
  const dots = document.querySelector('.dot');
  const links = document.querySelectorAll(".link-projects-js");
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

//Объявление текущего слайда
  
  const setDesign = (index) => {
    city.innerHTML = designes[index].city;
    apartmentArea.innerHTML = designes[index].apartmentArea;
    repairTime.innerHTML = designes[index].repairTime;
    img.style.backgroundImage = `url('${designes[index].img}')`;
    links[index].classList.add('active-link');
    // dots[index].classList.add('active-dot');// Здесь возникает ошибка
  }
  
  //Функции переключения слайдов по стрелкам
  let currentIndex = 0
  
  prev.addEventListener('click', () => {
    if (currentIndex === 0) {
      currentIndex = designes.length;
    }

      setDesign(currentIndex - 1);
      currentIndex --;
  })

  next.addEventListener('click', () => {
    if (currentIndex === designes.length - 1) {
      currentIndex = -1;
    }

      setDesign(currentIndex + 1);
      currentIndex ++;
  })
