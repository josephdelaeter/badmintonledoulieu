import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/services/joueurs.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public joueurs;
  public inputValue: any;

  constructor(private jou: JoueursService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.jou.getList().subscribe(
      (data) => {
        this.joueurs = data
        console.log(this.joueurs)
      },
      (err) => {
        console.error(err)
      })
  }

}
