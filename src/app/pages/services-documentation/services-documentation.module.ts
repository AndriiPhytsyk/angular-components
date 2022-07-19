import { NgModule } from '@angular/core';
import { ServicesDocumentationRoutingModule } from './services-documentation.routing.module';
import { LocalStorageService } from '../../services/local-storage.service';
import { UserService } from '../../services/user.service';

@NgModule({
  declarations: [],
  imports: [ServicesDocumentationRoutingModule],
  providers: [
    LocalStorageService,
    UserService,
    { provide: 'LocalStorage', useValue: window.localStorage }
  ]
})
export class ServicesDocumentationModule {}
