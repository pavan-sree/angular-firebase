import { Component } from '@angular/core';
import{Router} from '@angular/router'
import { HeroService } from '../hero.service';
import { student } from './interface/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Student: student[]=[];
  constructor(private router: Router,private hero:HeroService){}
  ngOnInit() {
    this.getDetails();
  }
  getDetails(){
    this.hero.getDetails().subscribe((data:student[])=>{
      this.Student = data;
    })
  }
  addDetail(){
    this.router.navigate(['/addform'])
  }
  editDetail(){
  }
  remDetail(){
  }

}
