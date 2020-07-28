import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TambahDataComponent } from '../tambah-data/tambah-data.component';
import { DetailPendudukComponent } from '../detail-penduduk/detail-penduduk.component';
import { DialogKonfirmasiComponent } from '../dialog-konfirmasi/dialog-konfirmasi.component';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-penduduk',
  templateUrl: './penduduk.component.html',
  styleUrls: ['./penduduk.component.css']
})
export class PendudukComponent {
	constructor(
		public dialog:MatDialog,
		public api:ApiService
		){
		  this.getData(); 
		}
		dataPenduduk:any=[];
		getData()
		{
		this.api.baca().subscribe(res=>{
		  this.dataPenduduk=res;
			})
		}
	
		buatData()
		{
		  const dialogRef = this.dialog.open(TambahDataComponent, {
			width: '450px',
			data:null      
		  });
		  dialogRef.afterClosed().subscribe(result => {
			this.getData();     
		  });
		  }
		detailData(item)
		  {
			const dialogRef = this.dialog.open(DetailPendudukComponent, {
			width: '450px', 
			data:item      
			});	
			dialogRef.afterClosed().subscribe(result => {
			  console.log('The dialog was closed');     
			});
		}
		editData(data)
	  {
		const dialogRef = this.dialog.open(TambahDataComponent, {
		  width: '450px',
		  data:data
		});
		dialogRef.afterClosed().subscribe(result => {
		  this.getData();    
		});
	  }
	  konfirmasiHapus(id)
	  {
		const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
		  width: '450px',      
		});
		dialogRef.afterClosed().subscribe(result => {
		  if(result == true)
		  {
			console.log('Menghapus data');
			this.api.hapus(id).subscribe(res=>{
			  this.getData();
			})
		  }   
		});
	  }
	}
