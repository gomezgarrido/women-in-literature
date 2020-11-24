var img = document.createElement('img');
img.src = '../img/typing.gif';
var src = document.getElementById('answerImg');

document.getElementById('form1').onsubmit = function () {
  personality = parseInt(
    document.querySelector('input[name = "personality"]:checked').value
  );

  place = parseInt(
    document.querySelector('input[name = "place"]:checked').value
  );

  season = parseInt(
    document.querySelector('input[name = "season"]:checked').value
  );

  genre = parseInt(
    document.querySelector('input[name = "genre"]:checked').value
  );

  color = parseInt(
    document.querySelector('input[name = "color"]:checked').value
  );

  book = parseInt(
    document.querySelector('input[name = "book"]:checked').value
  );

  total = personality + place + season + genre + color + book;

  if (total < 10) {
    document.getElementById('answer').innerHTML = 'You are Rupi Kaur!';
    document.getElementById('answer2').innerHTML = 'Famous for her debut book "Milk and Honey" and her second book "The Sun and Her Flowers".';
    src.appendChild(img);
  }

  if (total >= 10 && total < 14) {
    document.getElementById('answer').innerHTML = 'You are Mary Shelley!';
    document.getElementById('answer2').innerHTML = 'Famous for "Frankenstein" and "The Last Man".';
    src.appendChild(img);
  }

  if (total >= 14) {
    document.getElementById('answer').innerHTML = 'You are Gillian Flynn!';
    document.getElementById('answer2').innerHTML = 'Famous for "Sharp Objects", "Dark Places", and "Gone Girl".';
    src.appendChild(img);
  }

  return false;
};