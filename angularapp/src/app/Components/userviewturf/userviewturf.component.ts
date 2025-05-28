import { Component, OnInit } from '@angular/core';
import { TurfService } from '../../services/turf.service';
import { Turf } from '../../models/turf.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userviewturf',
  templateUrl: './userviewturf.component.html',
  styleUrls: ['./userviewturf.component.css']
})
export class UserviewturfComponent implements OnInit {
  turfs: Turf[] = [];

  constructor(private turfService: TurfService, private router: Router) {}

  ngOnInit(): void {
    this.turfService.getAllTurfs().subscribe(data => {
      this.turfs = data;
    });
  }

  bookTurf(turfId: number): void {
    this.router.navigate(['/usermakebooking', turfId]);
  }
}
