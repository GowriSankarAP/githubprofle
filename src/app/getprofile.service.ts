import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetprofileService {

  constructor(private http:Http) { }

  getProfileData(userName) {
    return this.http.get('https://api.github.com/users/'+userName)
      .pipe( map( (res : any) => res.json() ) );
  }

  getRepositories(repo_url) {
    return this.http.get(repo_url).pipe(map((res:any) => res.json()));
  }
}
