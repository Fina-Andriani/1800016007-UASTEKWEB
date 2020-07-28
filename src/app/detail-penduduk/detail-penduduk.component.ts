import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detail-penduduk',
  templateUrl: './detail-penduduk.component.html',
  styleUrls: ['./detail-penduduk.component.css']
})
export class DetailPendudukComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<DetailPendudukComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any
  ) {}
  ngOnInit() {
  }
}