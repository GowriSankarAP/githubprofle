import { Component, OnInit } from '@angular/core';
import { GetprofileService } from '../getprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : any = {};
  displayUser = false;
  userRepositories : any = [];

  constructor(public profileservice : GetprofileService) {
    
   }

  ngOnInit() {
  }

  getRepositories() {
    this.profileservice.getRepositories(this.user.repos_url).subscribe( response => {
      console.log(response);
      this.userRepositories = response;
    });
  }

  getProfileData(userName) {
    this.profileservice.getProfileData(userName)
      .subscribe( response => {
        console.log(response);
        this.user = response;
        this.displayUser = true;        

        //this.user.email = 'test@gmail.com';
      });
  }

  onClickSubmit(data) {
    this.userRepositories = [];
    this.getProfileData(data.username);       
    //alert("Entered Email id : " + data.username);
 }

}
