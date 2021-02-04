import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchsService {

    //postId;
    constructor(private http: HttpClient) {
    }
  
    getListMatchs() {
      return this.http.get(`${environment.api_base_url}/match`)
    }
  
    deleteMatch(id: string) {
      const URI_MATCH = `${environment.api_base_url}/match/` + id
      return this.http.delete(URI_MATCH, { responseType: 'text' })
   }
  
    postNewMatch(joueurUn:string,joueurDeux:string,manche1:string,manche2:string,manche3:string) {
      

      return this.http.post<any>(`${environment.api_base_url}/match`,
        {
        "Joueur1" : joueurUn,
        "Joueur2" : joueurDeux,
        "Score1" : manche1,
        "Score2" : manche2,
        "Score3" : manche3,
        "Result" : ""
        }).subscribe()
    } 
  }