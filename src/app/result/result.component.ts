import { Component, OnInit } from '@angular/core';
import { MatchsService } from 'src/services/matchs.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public matchs;
  public inputValue: any;

  constructor(private mat: MatchsService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.mat.getListMatchs().subscribe(
      (data) => {
        this.matchs = data
        console.log(this.matchs)
      },
      (err) => {
        console.error(err)
      })
  }

}
