import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurfService } from 'src/app/services/turf.service';
import { Turf } from 'src/app/models/turf.model';

@Component({
  selector: 'app-adminviewturf',
  templateUrl: './adminviewturf.component.html',
  styleUrls: ['./adminviewturf.component.css']
})
export class AdminviewturfComponent implements OnInit {
  turfs: Turf[] = [];
  searchTerm: string = '';
  filteredTurfs: Turf[] = [];

  constructor(private turfService: TurfService, private router: Router) {}

  ngOnInit(): void {
    this.loadTurfs();
  }

  loadTurfs(): void {
    this.turfService.getAllTurfs().subscribe(data => {
      this.turfs = data;
      this.filteredTurfs = data;
    });
  }

  searchTurfs(): void {
    this.filteredTurfs = this.turfs.filter(turf =>
      turf.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      turf.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  editTurf(turfId: number): void {
    this.router.navigate(['/adminviewturf/edit', turfId]);
  }

  deleteTurf(turfId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this turf?');
    if (confirmDelete) {
      this.turfService.deleteTurf(turfId).subscribe(() => {
        alert('Turf deleted successfully.');
        this.loadTurfs();
      });
    }
  }
}
