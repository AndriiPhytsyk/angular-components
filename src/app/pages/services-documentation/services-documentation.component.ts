import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../services/snackbar.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../services/models/user.model';

@Component({
  selector: 'app-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrls: ['./services-documentation.component.scss']
})
export class ServicesDocumentationComponent implements OnInit {
  public state: { [key: string]: any } = {};
  public user = new User();
  public userIdExample = new User();

  constructor(
    private snackbarService: SnackbarService,
    private localStorageService: LocalStorageService,
    public route: ActivatedRoute,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params.id),
        mergeMap(id => this.userService.getUserById(id))
      )
      .subscribe({
        next: value => {
          console.log(value.email);
          this.userIdExample = value;
        }
      });

    this.localStorageService.state$.subscribe(data => {
      this.state = data;
    });
  }

  callSnackbar() {
    this.snackbarService.callSnackbar('Snackbar Example!!');
  }

  public updateState(): void {
    this.localStorageService.setState('hello', 'darkness my old friend');
  }
}
