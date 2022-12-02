import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { UpsComponent } from './ups.../ups....component';
import { LoadingComponent } from './loading/loading.component';
import { TextExampleComponent } from './text-example/text-example.component';
import { BlobComponent } from './blob/blob.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    LoginComponent,
    CardComponent,
    UpsComponent,
    LoadingComponent,
    TextExampleComponent,
    BlobComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    CardComponent,
    UpsComponent,
    LoadingComponent,
    TextExampleComponent,
    BlobComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
