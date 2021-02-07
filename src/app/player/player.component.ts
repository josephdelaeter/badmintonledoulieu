import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../../services/joueurs.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public lastname = " "
  public firstname = " "

  constructor(private jou: JoueursService) { }

  ngOnInit(): void {
  }

  add() {
    this.jou.postNewPlayer(this.lastname)
  }

}
