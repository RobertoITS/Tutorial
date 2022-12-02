import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  switchers = [] //Creamos una lista

  ngAfterViewInit() {
    this.switchers = Array.from(document.querySelectorAll('.switcher')) //les pasamos los componentes con la clase
    s(this.switchers)
  }
}

function s(switchers: Element[]){
  switchers.forEach((item) => { //Recorremos la lista
    item.addEventListener("click",  () => { //El evento del click
      switchers.forEach((item) =>
        item.parentElement!!.classList.remove("is-active") //A los items le eliminamos la clase
      );
      item.parentElement!!.classList.add("is-active"); //Al seleccionado se la agregamos
    });
  });
}
