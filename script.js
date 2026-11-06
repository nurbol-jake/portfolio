// Показываем число, которое выбрал ползунок
var slider = document.getElementById("rating-slider");
var ratingValue = document.getElementById("rating-value");

slider.addEventListener("input", function () {
  ratingValue.textContent = slider.value;
});

// Отправка формы: показываем благодарность с оценкой
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var thanks = document.getElementById("thanks");

  if (name === "" || phone === "") {
    thanks.textContent = "Заполните имя и номер.";
    return;
  }

  thanks.textContent =
    "Спасибо, " + name + "! Ваш номер: " + phone + ". Ваша оценка сайта: " + slider.value + "/10";
  this.reset();
});
