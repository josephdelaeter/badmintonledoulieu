import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/services/joueurs.service';
import { MatchsService } from 'src/services/matchs.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {

  public selectedPlayerOne = '';
  public selectedPlayerTwo = '';

  public score1jrs1 = '0';
  public score2jrs1 = '0';
  public score3jrs1 = '0';

  public score1jrs2 = '0';
  public score2jrs2 = '0';
  public score3jrs2 = '0';

  public scoreManche1 = '';
  public scoreManche2 = '';
  public scoreManche3 = '';

  players;
  options;

  constructor(private jou: JoueursService, private mat: MatchsService) {}

  ngOnInit(): void {
    this.getList();
  }


  getList() {
    this.jou.getList().subscribe(
      (data) => {
        this.players = data,
        this.options = this.players
      },
      (err) => {
        console.error(err);
      }
    );
  }

  onClick() {
    this.scoreManche1 = this.score1jrs1 + ':' + this.score1jrs2;
    this.scoreManche2 = this.score2jrs1 + ':' + this.score2jrs2;
    this.scoreManche3 = this.score3jrs1 + ':' + this.score3jrs2;
    
    console.log(
      this.selectedPlayerOne,
      this.selectedPlayerTwo,
      this.scoreManche1,
      this.scoreManche2,
      this.scoreManche3
    );
    this.mat.postNewMatch(
      this.selectedPlayerOne,
      this.selectedPlayerTwo,
      this.scoreManche1,
      this.scoreManche2,
      this.scoreManche3
    );
    this.jou.updateMatch(
      this.selectedPlayerOne,
      this.selectedPlayerTwo,
      this.scoreManche1,
      this.scoreManche2,
      this.scoreManche3
    );
  }

}
