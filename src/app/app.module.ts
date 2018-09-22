import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CardSummaryProjectComponent } from './card-summary-project/card-summary-project.component';
import { FormNewProjectComponent } from './form-new-project/form-new-project.component';
import { FormNewTaskComponent } from './form-new-task/form-new-task.component';
import { ModalShowComponent } from './modal-show/modal-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    AsideNavComponent,
    ProjectListComponent,
    CardSummaryProjectComponent,
    FormNewProjectComponent,
    FormNewTaskComponent,
    ModalShowComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
