import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'] // ✅ fixed property name
})
export class ErrorComponent implements OnInit {
  errorCode: string = 'Unknown';

  constructor(private router: Router, private route: ActivatedRoute) {} // ✅ Inject ActivatedRoute

  ngOnInit(): void {
    this.errorCode = this.route.snapshot.paramMap.get('code') || 'Unknown'; // ✅ Access route param
  }
}
