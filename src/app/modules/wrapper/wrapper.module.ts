import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { HomeModule }     from '../home/home.module';
import { TaskModule }     from '../task/task.module';
import { HeaderModule } from '../../theme/header/header.module';

import { WrapperComponent }     from './wrapper.component';
import { SideBarComponent }     from '../../theme/sidebar/sideBar.component';
import { WrapperRouting }     from './wrapper.routes';
 
@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    TaskModule,
    WrapperRouting,
    HeaderModule
  ],
  declarations: [
    WrapperComponent,
    SideBarComponent
  ],
  bootstrap: [ WrapperComponent ]
})

export class WrapperModule {}
