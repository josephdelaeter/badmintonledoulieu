import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { JoueursService } from 'src/services/joueurs.service';
import { MatchsService } from 'src/services/matchs.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  public valueInput1 = ""
  public valueInput2 = ""

  public score1jrs1 = ""
  public score2jrs1 = ""
  public score3jrs1 = ""

  public score1jrs2 = ""
  public score2jrs2 = ""
  public score3jrs2 = ""

  public scoreManche1 = ""
  public scoreManche2 = ""
  public scoreManche3 = ""

  myControl = new FormControl();
  options = [];
  joueurs;
  filteredOptions: Observable<string[]>;

  constructor(private jou: JoueursService,private mat:MatchsService) { }

  ngOnInit(): void {
    this.getList()

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getList() {
    this.jou.getList().subscribe(
      (data) => {
        this.joueurs = data
        this.options = this.joueurs.map((obj) => {
          return obj.nom + " " + obj.prenom;
        })
        console.log(this.options)
      },
      (err) => {
        console.error(err)
      }
    )
  }

  onClick() {
  this.scoreManche1 = this.score1jrs1 + ":" + this.score1jrs2
  this.scoreManche2= this.score2jrs1  + ":" + this.score2jrs2
  this.scoreManche3= this.score3jrs1  + ":" + this.score3jrs2

   this.mat.postNewMatch(this.valueInput1,this.valueInput2,this.scoreManche1,this.scoreManche2,this.scoreManche3)
   this.jou.updateMatch(this.valueInput1,this.valueInput2,this.scoreManche1,this.scoreManche2,this.scoreManche3)
  }
}
