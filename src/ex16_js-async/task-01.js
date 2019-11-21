function myFetch(url, method) {
  let xhr = new XMLHttpRequest();
  if ( (method === undefined) || (method ===`GET`) ) {
    xhr.open(`GET`, url)
    xhr.send();
    xhr.onloadGet = function() {
      if(xhr.status !== 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      } return xhr.responseText;
    }
  }
  if (method === `POST`) {
    xhr.open(`POST`, url)
    xhr.send([body]);
    xhr.onloadPost = function() {
      if(xhr.status !== 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      } return xhr.responseText;
    }   
  }
}