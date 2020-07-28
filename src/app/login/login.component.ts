import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    public router:Router
  ) { }
  ngOnInit() {}
  data:any={};
  masuk(data)
  {
    if(data.username == 'Finaandriani',data.password == 'penduduk')
    {
      this.router.navigate(['/penduduk']);
    }
    {
      if(data.username == null,data.password== null){
        alert("Username harap di isi!")
      } 
  }
  {
    if(data.username == 'salah'){
      alert("Maaf! Username dan password yang anda masukan tidak valid!")
    }
}
{
  if(data.password == null){
    alert("Password harap di isi!")
  }

}

}
}