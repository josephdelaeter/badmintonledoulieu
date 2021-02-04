import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JoueursService {
  postId;
  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get(`${environment.api_base_url}/player`);
  }

  deletePlayer(id: string) {
    console.log('clic')
    const test = `${environment.api_base_url}/posts/` + id
    return this.http.delete(test, { responseType: 'text' })
  }

  postNewPlayer(lastNameAndFirstName: string) {

    const split = lastNameAndFirstName.split(' ')
    const lastName = split[0]
    const firstName = split[1]

    return this.http.post<any>(`${environment.api_base_url}/posts`,
      {
        "nom": lastName,
        "prenom": firstName,
        "nbMatch": 0,
        "nbVictoire": 0,
        "nbDefaite": 0,
        "nbPoint": 0,
        "pointPour": 0,
        "pointContre": 0,
        "differencePoints": 0
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
console.log(playerOne + playerTwo + scoreOne)
    return this.http.post<any>(`${environment.api_base_url}/player/` + playerOne + "/" + playerTwo + "/" + scoreOne + "/" + scoreTwo + "/" + scoreThree, httpOptions).subscribe()
  }

}
