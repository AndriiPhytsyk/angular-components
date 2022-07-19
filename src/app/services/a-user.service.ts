import { Observable } from 'rxjs';
import { User } from './models/user.model';

export abstract class AUserService {
  public abstract getUserById(id: number): Observable<User>;
}
