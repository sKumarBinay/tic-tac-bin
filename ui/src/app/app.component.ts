import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-toc';
  ngOnInit () {
    const btn = document.querySelector('#btn')
    const playerInput:any = document.querySelector('#my-name')
    let player = 'player'
    let data
    playerInput.addEventListener('change', () => {
        player = playerInput.value
         data = {
        profile: `${player}`,
        lastMove: '9'
    }
    })
    

    btn.addEventListener('click', async () => {
        const show = await fetch('/clicked', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const print = await show.json()
const h3:any = document.querySelector('#welcome-message')
        h3.innerText = `welcome ${print.profile}`
        console.log(print)
    })
  }
}
