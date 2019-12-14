const btn = document.querySelector('#btn')
const data = {
    profile: 'binay',
    lastMove: '9'
}
btn.addEventListener('click', () => {
    debugger
    postData('/clicked', data, 'POST')
})

function postData (url = '', data = {}, type) {
    return fetch(url, {
      method: type,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: data
    }).then(response => response.json())
  }