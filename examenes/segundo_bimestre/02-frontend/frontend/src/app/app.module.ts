import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CrudComputerComponent } from './components/crud-computer/crud-computer.component';
import { CrudUserComponent } from './components/crud-user/crud-user.component';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {ComputerService} from "./services/computer.service";
@NgModule({
  declarations: [
    AppComponent,
    CrudComputerComponent,
    CrudUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DropdownModule,
    SliderModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputNumberModule,
    FormsModule,
    ButtonModule,
    CalendarModule,
    ConfirmDialogModule,
    RadioButtonModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    TableModule,
    ToolbarModule,
    FileUploadModule,
    ToastModule,
    MultiSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    UserService,
    ComputerService,
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
