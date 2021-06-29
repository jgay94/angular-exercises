import { Component, OnInit } from '@angular/core';
import { UserInfoService } from "../user-info.service";

@Component({
  selector: 'app-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.css']
})
export class UserInfoDisplayComponent implements OnInit {
  isLoading: boolean = true;
  info: any = {};
  
  constructor(
    private userInfo: UserInfoService,
  ) { }

  ngOnInit(): void {
    this.userInfo.loadData()
      .subscribe(data => {
        console.log(data.results[0]);
        this.info = data.results[0];
        this.isLoading = false;
      })
  }

}