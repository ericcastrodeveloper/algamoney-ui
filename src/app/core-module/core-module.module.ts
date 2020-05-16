import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import { MenubarModule } from 'primeng/primeng';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
