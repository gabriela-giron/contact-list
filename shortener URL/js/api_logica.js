function logica_fetch() {
  let url_largo = document.getElementById("url-normal").value;

  console.log(typeof(url_largo));

    //url de donde yo quiero hacer la peticion de datos (fetch)
    const url_rebrandly = "https://api.rebrandly.com/v1/links";

    const parametros_request = {
      "title": "spotify",
      "destination": `${url_largo}`,
      //"destination": "https://open.spotify.com/intl-es/track/5q86iSKkBtOoNkdgEDY5WV?si=790c1063fd63400c",
      "domain": {
          "id": "8f104cc5b6ee4a4ba7897b06ac2ddcfb"
      }
    };
    
    const headers_request = {
      "Content-Type": "application/json",
      "apikey": "d4c484c8ef0b4f319f0d2c6e600518c3"
    };

    const send_request = {
       method: "POST",
       headers: headers_request,
       body: JSON.stringify(parametros_request)
    };

    //send de los datos
    const request_rebrandly = fetch(url_rebrandly,send_request);

    //MANEJO DE LA RESPUESTA

    request_rebrandly //por buenas practicas para hacer que el codigo se lea mejor se coloca el .then en otra linea
    //el then es como el evaluate de respuesta de dvm, evalua codigos de error y si no hay nada malo, devuelve los datos
      .then((response) => {
        if (!response.ok) {
           throw new Error("Hubo un error inesperado");
        }
        return response.json();
      })
      .then((data) => {
        //datos recibidos de la respuesta
        //data es un gran json y cada parametro del json se puede llamar colocando el nombre completo de lo retornado + el nombre del campo
        console.log(data);
        const url_peque = data.shortUrl;
        var text_area = document.querySelector("#result");
        text_area.value = url_peque;

        var link = document.querySelector("#link");

        if (link) {
          link.href = url_peque;
          link.textContent = url_peque;
        }
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      });
}

function logica_refresh() {
location.reload();
document.getElementById("url-normal").value = '';
document.getElementById("result").value = '';
}