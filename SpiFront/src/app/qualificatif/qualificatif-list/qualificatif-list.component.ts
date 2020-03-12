import {Component, Inject, OnInit} from '@angular/core';
import {QualificatifService} from '../../qualificatif.service';
import {Observable} from 'rxjs';
import {Qualificatif} from '../../Qualificatif';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-qualificatif-list',
  templateUrl: './qualificatif-list.component.html',
  styleUrls: ['./qualificatif-list.component.css']
})
export class QualificatifListComponent implements OnInit {
  qualificatifs: Observable<Qualificatif[]>;
  qualificatif: Qualificatif;
  constructor(private qualificatifService: QualificatifService, private router: Router, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.qualificatifs = this.qualificatifService.getQualificatifsList();
  }
  showDeleteDialog(qualificatif: Qualificatif): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: qualificatif
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadData();
    });
  }
  showUpdateDialog(qualificatif: Qualificatif): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '500px',
      data: qualificatif,
  });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadData();
    });
  }
  showCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadData();
    });
  }
}
@Component({
  selector: 'app-delete-dialog',
  templateUrl: 'delete-dialog.component.html',
})
export class DeleteDialogComponent {
  errorDelete: string;
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Qualificatif,
    private qualificatifService: QualificatifService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  delete(): void {
    this.qualificatifService.deleteQualificatif(this.data)
      .subscribe(
        result => {
          console.log('data', this.data);
        },
        reponse => { this.errorDelete = reponse.error.message;
           if(!this.errorDelete.small().includes('undefined')) alert(this.errorDelete);
        }
      );
  }
}

@Component({
  selector: 'app-update-dialog',
  templateUrl: 'update-dialog.component.html',
})
export class UpdateDialogComponent{
  errorDelete: string;
  newMax: string = this.data.maximal;
  newMin: string = this.data.minimal;
  newQualificatif: Qualificatif;
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Qualificatif,
              private qualificatifService: QualificatifService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  update(): void {
    this.newQualificatif= new Qualificatif(this.newMax, this.newMin);
    this.newQualificatif.idQualificatif= this.data.idQualificatif;
    console.log(this.newQualificatif);
    this.qualificatifService.updateQualificatif(this.newQualificatif)
      .subscribe(
        result => {
          console.log('data  ', this.newQualificatif);
        },
        reponse => { this.errorDelete = reponse.error.message;
          alert(this.errorDelete);
        }
      );
  }
}

@Component({
  selector: 'app-create-dialog',
  templateUrl: 'create-dialog.component.html',
})
export class CreateDialogComponent{
  errorDelete: string;
  newMax: string;
  newMin: string;
  newQualificatif: Qualificatif;
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              private qualificatifService: QualificatifService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  create(): void {
    this.newQualificatif= new Qualificatif(this.newMax, this.newMin);
    console.log(this.newQualificatif);
    this.qualificatifService.createQualificatif(this.newQualificatif)
      .subscribe(
        result => {
          console.log('data  ', this.newQualificatif);
        },
        reponse => { this.errorDelete = reponse.error.message;
          alert(this.errorDelete);
        }
      );
  }
}
