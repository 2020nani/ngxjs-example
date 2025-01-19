import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { TaskState } from './shared/store/task.state';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './shared/components/task/task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TaskComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgxsModule.forRoot([TaskState])  // Configura o NgxsModule aqui
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
