import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})

export class SobreComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      res => console.log(res['id'], res)
    );

    this.activatedRoute.queryParams.subscribe(
      res => console.log(res)
    );

    setInterval( () => {
      this.router.navigate(['']);
      //Navigate to another URL, but, takes more time to load
      //this.router.navigateByUrl('');
    }, 10000)
  }
}
