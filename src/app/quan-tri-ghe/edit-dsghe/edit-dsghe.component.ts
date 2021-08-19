
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';

@Component({
  selector: 'app-edit-dsghe',
  templateUrl: './edit-dsghe.component.html',
  styleUrls: ['./edit-dsghe.component.css']
})
export class EditDSGheComponent implements OnInit {
  @ViewChild('title') titleHeading!:ElementRef;
  @ViewChild(DanhSachGheComponent) DSGheCom;
  themGheParent(...thamSo:any[]){
    
    let gheDuocThem = {
      tenGhe: thamSo[0], 
      SoGhe:thamSo[1], 
      gia:thamSo[2],
      trangThai:false,
    }
    if(thamSo[3] == 'false'){
      gheDuocThem.trangThai=false;
    }
    else if(thamSo[3] == 'true'){
      gheDuocThem.trangThai=true;
    }
    console.log(gheDuocThem);
    this.DSGheCom.ThemGhe(gheDuocThem);
    this.titleHeading.nativeElement.innerHTML = "đã thêm";
    this.titleHeading.nativeElement.style.color = "red";
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
interface typeDS{
  SoGhe:number;
  tenGhe:string;
  gia:number;
  trangThai:boolean;
}