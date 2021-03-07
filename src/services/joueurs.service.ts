import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {
  postId;
  constructor(private http: HttpClient) {
  }

  getList():Observable<any> {
    return this.http.get(`${environment.api_base_url}/player`);
  }

  deletePlayer(id: string) {
    const test = `${environment.api_base_url}/posts/` + id
    return this.http.delete(test, { responseType: 'text' })
  }

  postNewPlayer(lastNameAndFirstName: string) {

    const split = lastNameAndFirstName.split(" ")
    const lastName = split[0]
    const firstName = split[1]

    return this.http.post<any>(`${environment.api_base_url}/player`,
      {
        "lastName": lastName,
        "firstName": firstName,
        "nbMatch": 0,
        "nbWin": 0,
        "nbLoose": 0,
        "nbPoint": 0,
        "pointFor": 0,
        "pointAgainst": 0,
        "pointDifference": 0
      }).subscribe(data => {
        this.postId = data.id
      })
  }

  updateMatch(playerOne: string, playerTwo: string, scoreOne: string, scoreTwo: string, scoreThree: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'body'
    };
    return this.http.post<any>(`${environment.api_base_url}/player/` + playerOne + "/" + playerTwo + "/" + scoreOne + "/" + scoreTwo + "/" + scoreThree, httpOptions).subscribe()
  }
}
