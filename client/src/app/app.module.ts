import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './routes';
import { RegisterComponent} from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    LoginComponent,
    FavouriteListComponent,
    SearchComponent,
    RegisterComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
