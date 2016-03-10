function loadTest() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/ajax/test.txt', false);
      xhr.send();

      if (xhr.status != 200) {
            // обработать ошибку
            alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
            // вывести результат
            alert(xhr.responseText);
      }
}

  function loadAsyncTest() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/ajax/testa.txt', true);
      xhr.send(); // (1)
      xhr.onreadystatechange = function() { // (3)
      
      if (xhr.readyState != 4) return;
            button.innerHTML = 'Готово!';
            if (xhr.status != 200) {
                  // обработать ошибку
                  alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
            } else {
                  // вывести результат
                  alert(xhr.responseText);
            }
      }
      
      button.innerHTML = 'Загружаю...'; //2
      button.disabled = true;
}

function loadPhones() {
      // 1. Создаём новый объект XMLHttpRequest
      var xhr = new XMLHttpRequest();
      // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
      xhr.open('GET', '/ajax/phones.json', true);
      // 3. Отсылаем запрос
      xhr.send();
      xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
            button.innerHTML = 'Готово!';
            // 4. Если код ответа сервера не 200, то это ошибка
            if (xhr.status != 200) {
                  // обработать ошибку
                  alert(xhr.status + ': ' + xhr.statusText);
            } else {
                  // вывести результат
                  alert(xhr.responseText);
            }
      }
      button.innerHTML = 'Загружаю...';
      button.disabled = true;
}
