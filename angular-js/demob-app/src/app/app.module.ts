import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { DemoformComponent } from './demoform/demoform.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { BookformComponent } from './bookform/bookform.component';
const routes: Routes = [
  // {path:'Dashboard',component:FormComponent},
  // {path:'User',component:UserComponent}
  {path:'',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'books',component:BookCatlogComponent},
  {path:'addbook',component:BookformComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    BookListComponent,
    DemoformComponent,
    FormComponent,
    UserComponent,
    PriceDiscountPipe,
    BookComponent,
    TabComponent,
    BookCatlogComponent,
    HomeComponent,
    NewsComponent,
    MenuComponent,
    BookformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,MatToolbarModule,MatIconModule,
    MatSidenavModule,MatListModule,MatInputModule,
    BrowserAnimationsModule,MatFormFieldModule,
    MatButtonModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }