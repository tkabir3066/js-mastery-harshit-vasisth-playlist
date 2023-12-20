// xhr using Promise
const url = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.response;
        resolve(response);
      } else {
        reject(new Error("Something went wrong.."));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Something error in network"));
    };
    xhr.send();
  });
}

sendRequest("GET", url)
  .then((response) => {
    const data = JSON.parse(response);
    return data;
  })
  .then((data) => {
    const id = data[3].id;
    return id;
  })
  .then((id) => {
    const url2 = `${url}/${id}`;
    return sendRequest("GET", url2);
  })
  .then((newResponse) => {
    const data = JSON.parse(newResponse);
    return data;
  })
  .then((data) => {
    console.log(data.title);
  })
  .catch((error) => {
    console.log(error);
  });
