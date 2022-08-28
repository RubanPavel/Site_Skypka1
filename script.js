var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    fixStepIndicator(n);
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Назад";
  } else {
    document.getElementById("nextBtn").innerHTML = "Назад";
    const post = document.getElementById("nextBtn");
    post[n].setAttribute("value", "Send");
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm() && currentTab !== 1) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("product-form").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function lastPrev(n) {
  if (currentTab === 0) return false;
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  //if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab - n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("product-form").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
      if (y[i].type === "file" || y[i].name === "product-quality-description")
        valid = true;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("number-circle")[currentTab].className +=
      " finish";
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("number-circle");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }

  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }

  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function updateTextInput(val) {
  document.getElementById("textInput").value = val;
}

// currency
(function (BYN) {
  BYN.fn.currencyInput = function () {
    this.each(function () {
      var wrapper = $("<div class='currency-input' />");
      $(this).wrap(wrapper);
      $(this).before("<span class='currency-symbol'>BYN</span>");
      $(this).change(function () {
        var min = parseFloat($(this).attr("min"));
        var max = parseFloat($(this).attr("max"));
        var value = this.valueAsNumber;
        if (value < min) value = min;
        else if (value > max) value = max;
        $(this).val(value.toFixed(2));
      });
    });
  };
})(jQuery);

$(document).ready(function () {
  $("input.currency").currencyInput();
});

const contentBlocks = document.querySelectorAll(".content");
const selectBlock = document.querySelector(".choose");

hideBlocks(contentBlocks);
contentBlocks[0].classList.remove("visually-hidden");

selectBlock.addEventListener("change", function () {
  const idNum = this.value.split("-");
  hideBlocks(contentBlocks);
  document
    .querySelector("#info-" + idNum[1])
    .classList.remove("visually-hidden");
});

function hideBlocks(blocks) {
  for (let block of blocks) {
    block.classList.add("visually-hidden");
  }
}
function closeForm() {
  document.querySelector(".question-form").className += " hide";
}

function openBar() {
  const isOpen = document
    .getElementsByClassName("round-block")[0]
    .classList.contains("message-block");
  if (!isOpen) {
    document
      .getElementsByClassName("round-block")[0]
      .classList.remove("cross-block");
    document
      .getElementsByClassName("round-block")[0]
      .classList.add("message-block");

    document.getElementsByClassName("Pictograms")[0].classList.remove("hide");
    document.getElementsByClassName("Pictograms")[0].classList.add("show");
  } else {
    document
      .getElementsByClassName("round-block")[0]
      .classList.remove("message-block");
    document
      .getElementsByClassName("round-block")[0]
      .classList.add("cross-block");

    document.getElementsByClassName("Pictograms")[0].classList.remove("show");
    document.getElementsByClassName("Pictograms")[0].classList.add("hide");
  }
}

function CityChange() {
  let city;
  let number;
  let hreff;
  if (document.getElementById("city").value === "city_1") {
    city = "Homel";
    number = "+375 (25) 180-11-22 ";
    hreff = "tel:+375-25-180-11-22";
  }
  if (document.getElementById("city").value === "city_2") {
    city = "Mahiliow";
    number = "+375 (29) 780-18-18";
    hreff = "tel:+375-29-780-18-18";
  }
  if (document.getElementById("city").value === "city_3") {
    city = "Vitebsk";
    number = "+375 (29) 180 12 12 ";
    hreff = "tel:+375-29-180 12 12";
  }

  //footer
  document.querySelector(".adress-list").innerHTML =
    city === "Homel"
      ? `<div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">

      <div class="main">
          <h6>улица М.Г. Ефремова, 8А</h6>
          <p>р-он "Сельмаш", за остановкой Фадеева, здание Фотоцентра</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Мазурова, 60</h6>
          <p>р-он "Мельников Луг", магазин "Веста"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Ильича, 59а</h6>
          <p>р-он "Белица", ТЦ "Полесье"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. пр-т Речицкий, 61</h6>
          <p>51 мкр-н, торговый дом "Речицкий", вход с улицы, около входа в ресторан</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Карповича, 28, 2 этаж</h6>
          <p>центр города, центральный рынок, ТЦ "Виктория"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Кожара, 1, 1 этаж</h6>
          <p>р-он "Аэродром", рядом с "Океаном"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Свиридова, 13</h6>
          <p>р-он "Волотова", круглое здание "Таблетка"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Ильича, 331</h6>
          <p>р-он "Белица", вход здание завода</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Богдана Хмельницкого, 80</h6>
          <p>5 мкрн (Быховское кольцо)(вход с задней стороны пиццерии Dodopizza)</p>
      </div>
  </div>`
      : city === "Mahiliow"
      ? `<div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Правды, 64а</h6>
          <p>перекресток ул. Правды и  ул. Смоленской, маг. Копеечка</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Чкалова, 50а</h6>
          <p>р-н Юга-7, маг. Веста на бугре</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>проспект строителей, 1</h6>
          <p>ТЦ "Континент", вход через маг. "Копеечка"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>проспект Московский, 86</h6>
          <p>маг. "Санта", возле "McDonalds"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Гончарная, 11</h6>
          <p>ТЦ "РАМ" маг. Корона,роллет 1-4</p>
      </div>
  </div>`
      : `<div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Королева, 37а</h6>
          <p>Юбилейный, ТЦ "Атлант", 2-й этаж</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Крупской, 182</h6>
          <p>8-ой мкрн, в общежитии, в подвале около "AMI-мебель"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Мовчанского, 25/98 </h6>
          <p>ТЦ "Маяк", напротив (через дорогу) от маг."Тройка"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>б-р Непокоренных, 37б</h6>
          <p>ТЦ "Пилот", вход со стороны "Green" и "Burger King"</p>
      </div>
  </div>`;

  //dropdown
  document.querySelector(".dropdown-content").innerHTML =
    city === "Homel"
      ? `<div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
        <h6>улица М.Г. Ефремова, 8А</h6>
        <p>р-он "Сельмаш", за остановкой Фадеева, здание Фотоцентра</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Мазурова, 60</h6>
          <p>р-он "Мельников Луг", магазин "Веста"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Ильича, 59а</h6>
          <p>р-он "Белица", ТЦ "Полесье"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. пр-т Речицкий, 61</h6>
          <p>51 мкр-н, торговый дом "Речицкий", вход с улицы, около входа в ресторан.</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Карповича, 28, 2 этаж</h6>
          <p>центр города, центральный рынок, ТЦ "Виктория"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Кожара, 1, 1 этаж</h6>
          <p>р-он "Аэродром", рядом с "Океаном"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Свиридова, 13</h6>
          <p>р-он "Волотова", круглое здание "Таблетка"</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Ильича, 331</h6>
          <p>р-он "Белица", вход здание завода</p>
      </div>
  </div>
  <div class="adress-item">
      <img src="./assets/map-location-icon.svg" alt="map location">
      <div class="main">
          <h6>ул. Богдана Хмельницкого, 80</h6>
          <p>5 мкрн (Быховское кольцо)(вход с задней стороны пиццерии Dodopizza) </p>
      </div>
  </div>`
      : city === "Mahiliow"
      ? `<div class="adress-item">
                            <img src="./assets/map-location-icon.svg" alt="map location">
                            <div class="main">
                                <h6>ул. Королева, 37а</h6>
                                <p>Юбилейный, ТЦ "Атлант", 2-й этаж</p>
                            </div>
                        </div>
                        
                        <div class="adress-item">
                            <img src="./assets/map-location-icon.svg" alt="map location">
                            <div class="main">
                                <h6>ул. Крупской, 182</h6>
                                <p>8-ой мкрн, в общежитии, в подвале около "AMI-мебель"</p>
                            </div>
                        </div>
                        
                        <div class="adress-item">
                            <img src="./assets/map-location-icon.svg" alt="map location">
                            <div class="main">
                                <h6>ул. Мовчанского, 25/98 </h6>
                                <p>ТЦ "Маяк", напротив (через дорогу) от маг."Тройка"</p>
                            </div>
                        </div>
                        
                        <div class="adress-item">
                            <img src="./assets/map-location-icon.svg" alt="map location">
                            <div class="main">
                                <h6>б-р Непокоренных, 37б</h6>
                                <p>ТЦ "Пилот", вход со стороны "Green" и "Burger King"</p>
                            </div>
                        </div>`
      : `<div class="adress-item">
                            <img src="./assets/map-location-icon.svg" alt="map location">
                            <div class="main">
                                <h6>ул. Правды, 64а</h6>
                                <p>перекресток ул. Правды и  ул. Смоленской, маг. Копеечка</p>
                            </div>
                        </div>
                        
                        <div class="adress-item">
                            <img src="./assets/map-location-icon.svg" alt="map location">
                            <div class="main">
                                <h6>ул. Чкалова, 50а</h6>
                                    <p>р-н Юга-7, маг. Веста на бугре</p>
                            </div>
                        </div>
                        
                        <div class="adress-item">
                            <img src="./assets/map-location-icon.svg" alt="map location">
                            <div class="main">
                                <h6>проспект строителей, 1</h6>
                                    <p>ТЦ "Континент", вход через маг. "Копеечка"</p>
                            </div>
                        </div>
                        
                        <div class="adress-item">
                            <img src="./assets/map-location-icon.svg" alt="map location">
                            <div class="main">
                                <h6>проспект Московский, 86</h6>
                                    <p>маг. "Санта", возле "McDonalds"</p>
                            </div>
                        </div>

                        <div class="adress-item">
                            <img src="./assets/map-location-icon.svg" alt="map location">
                            <div class="main">
                                <h6>ул. Гончарная, 11</h6>
                                    <p>ТЦ "РАМ" маг. Корона,роллет 1-4</p>
                            </div>
                        </div>`;

  //city label
  document.querySelector("#city-label").innerHTML =
    city === "Homel"
      ? "г. Гомель, Беларусь"
      : city === "Mahiliow"
      ? "г. Могилев, Беларусь"
      : "г. Витебск, Беларусь";

  document.querySelector(".yandex-map").innerHTML =
    city === "Homel"
      ? `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a9630cec23fb7f03c153308dc414a6a213ef52f87647d38abb651e193cfa027&amp;source=constructor"
        width="80%" height="720" frameborder="0" llowfullscreen="true" style="position:relative;"></iframe>`
      : city === "Mahiliow"
      ? `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acefdf72284d852b7fd532bb32c6dfe975456f9324e6cb8393c5e207ef7923103&amp;source=constructor"
        width="80%" height="720" frameborder="0" allowfullscreen="true" style="position:relative;"></iframe>`
      : `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A576a0caed3e4073f0fde323bd81478f9d8654c91692300aca4367edfd79bbab5&amp;source=constructor"
        width="80%" height="720" frameborder="0" allowfullscreen="true" style="position:relative;"></iframe>`;

  //number
  for (const item of document.querySelectorAll(".number").values()) {
    item.innerHTML = `<a href=${hreff}>${number}</a>`;
  }
}
