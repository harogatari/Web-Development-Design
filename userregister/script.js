document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('register-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Burada kayıt işlemini gerçekleştirebilirsiniz

    // Örnek olarak bir API'ye kayıt isteği gönderme işlemi yapabilirsiniz
    // fetch('https://example.com/register', {
    //   method: 'POST',
    //   body: JSON.stringify({ name: name, email: email, password: password }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));

    form.reset();
  });
});