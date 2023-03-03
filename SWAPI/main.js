console.log("hello world");


let btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    axios.get('https://swapi.dev/api/planets/2/')
      .then(response => {
        const residents = response.data.residents;
        console.log(residents);
        const residentPromises = residents.map(residentUrl => axios.get(residentUrl));
        console.log(residentPromises);
        Promise.all(residentPromises)
          .then(residentResponses => {
            residentResponses.forEach(residentResponse => {
              const name = residentResponse.data.name;
              const h2 = document.createElement('h2');
              h2.textContent = name;
              document.body.appendChild(h2);
            });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  });

