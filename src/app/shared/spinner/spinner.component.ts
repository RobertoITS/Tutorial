import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  ngAfterViewInit(){
    let loaderel = document.querySelector<HTMLElement>(".loaderelement")

    window.addEventListener("load", function() {
      loaderel!!.style.display = "none"
    })
  }
}
