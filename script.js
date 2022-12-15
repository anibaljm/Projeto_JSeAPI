  const contenido = document.getElementById('api');
    fetch("https://api.github.com/users/anibaljm/repos")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var cont = 0;
        for (cont = 0; cont < data.length; cont++) {
          contenido.innerHTML += `
			 <div class="card">
             <br></br>
				<a href="${data[cont].html_url}" target="blank_"> ${data[cont].name} </a>
			 </div>
			 `;
    }
  });
  
  const form = document.getElementById('form');
  const campos = document.querySelectorAll('.required');
  const spans = document.querySelectorAll('.span-required');
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate,
    emailValidate
  });

  function setError (index) {
    campos[index].style.border = '3px solid #e63636';
    spans[index].style.display = 'block';
  }
  function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
  }
  
  function nameValidate() {  
    if (campos[0].value.length < 3) {
        setError(0)
    }
    else 
    {
        removeError(0)
    }
  }

  function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {

      setError(1);

    } 
    
    else {

      removeError(1);

    }
  }