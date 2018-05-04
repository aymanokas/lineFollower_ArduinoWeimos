import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  configUrl = 'http://192.168.43.244:3000/api/gettest';
  capt:any = [];
  msg :any = [];
  numTDD:any = 0;
  numAV:any= 0;
  numTD:any = 0;
  numTGG:any = 0;
  numTG:any = 0;
  constructor(private http: HttpClient){
    
    setInterval( 
      ()=>{
        this.http.get(this.configUrl).subscribe(data =>  {
          this.capt = data
      console.log(this.capt = data)

      if(this.capt[1] == 1 && this.capt[2] == 1){
  let i = this.msg.length;
  if (this.msg[i-1] != "Avancer()"){
    this.msg.push("Avancer()")
    this.numAV++;
  }
      } else if (this.capt[3] == 1 && this.capt[2] == 1 ){
        let i = this.msg.length;
        if (this.msg[i-1] != "Tg()"){
          this.msg.push("Tg()")
          this.numTG++;
        }
      }
      else if (this.capt[3] == 1 ){
        let i = this.msg.length;
        if (this.msg[i-1] != "Tgg()"){
          this.msg.push("Tgg()")
          this.numTGG++;
        }
      }  else if (this.capt[0] == 1 && this.capt[1] == 1 ){
        let i = this.msg.length;
        if (this.msg[i-1] != "Td()"){
          this.msg.push("Td()")
          this.numTD++;
        }
      }else if (this.capt[0] == 1){
        let i = this.msg.length;
        if (this.msg[i-1] != "Tdd()"){
          this.msg.push("Tdd()")
          this.numTDD++;
        }
      }
      
    }) }, 15);
  }




getD(){
  
  this.http.get(this.configUrl).subscribe((data) =>  {
    console.log(data)
  });

}

test(){
  console.log("test")
}


}
