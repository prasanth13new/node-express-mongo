console.log('Client-side code running');

const button = document.getElementById('myButton');
button.addEventListener('click', function (e) {
  console.log('button was clicked on', new Date());

  fetch('/clicked', { method: 'POST' })
    .then(function (response) {
      if (response.ok) {
        console.log('Click was recorded', new Date());
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function (error) {
      console.log(error);
    });
});
