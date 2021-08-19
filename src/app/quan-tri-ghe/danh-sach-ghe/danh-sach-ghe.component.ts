import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.css']
})
export class DanhSachGheComponent implements OnInit {

  DanhSachGhe:typeDS[]=[
      {SoGhe:1, tenGhe: "số 1", gia:100, trangThai:false},
      {SoGhe:2, tenGhe: "số 2", gia:100, trangThai:false},
      {SoGhe:3, tenGhe: "số 3", gia:100, trangThai:false},
      {SoGhe:4, tenGhe: "số 4", gia:100, trangThai:false},
      {SoGhe:5, tenGhe: "số 5", gia:100, trangThai:false},
      {SoGhe:6, tenGhe: "số 6", gia:100, trangThai:false},
      {SoGhe:7, tenGhe: "số 7", gia:100, trangThai:false},
      {SoGhe:8, tenGhe: "số 8", gia:100, trangThai:false},
      {SoGhe:9, tenGhe: "số 9", gia:100, trangThai:false},
      {SoGhe:10, tenGhe: "số 10", gia:100, trangThai:false},
      {SoGhe:11, tenGhe: "số 11", gia:100, trangThai:false},
      {SoGhe:12, tenGhe: "số 12", gia:100, trangThai:false},
      {SoGhe:13, tenGhe: "số 13", gia:100, trangThai:false},
      {SoGhe:14, tenGhe: "số 14", gia:100, trangThai:false},
      {SoGhe:15, tenGhe: "số 15", gia:100, trangThai:false},
      {SoGhe:16, tenGhe: "số 16", gia:100, trangThai:false},
      {SoGhe:17, tenGhe: "số 17", gia:100, trangThai:false},
      {SoGhe:18, tenGhe: "số 18", gia:100, trangThai:false},
      {SoGhe:19, tenGhe: "số 19", gia:100, trangThai:false},
      {SoGhe:20, tenGhe: "số 20", gia:100, trangThai:false},
      {SoGhe:21, tenGhe: "số 21", gia:100, trangThai:false},
      {SoGhe:22, tenGhe: "số 22", gia:100, trangThai:false},
      {SoGhe:23, tenGhe: "số 23", gia:100, trangThai:false},
      {SoGhe:24, tenGhe: "số 24", gia:100, trangThai:false},
      {SoGhe:25, tenGhe: "số 25", gia:100, trangThai:false},
      {SoGhe:26, tenGhe: "số 26", gia:100, trangThai:false},
      {SoGhe:27, tenGhe: "số 27", gia:100, trangThai:false},
      {SoGhe:28, tenGhe: "số 28", gia:100, trangThai:true},
      {SoGhe:29, tenGhe: "số 29", gia:100, trangThai:false},
      {SoGhe:30, tenGhe: "số 30", gia:100, trangThai:false},
      {SoGhe:31, tenGhe: "số 31", gia:100, trangThai:false},
      {SoGhe:32, tenGhe: "số 32", gia:100, trangThai:false},
      {SoGhe:33, tenGhe: "số 33", gia:100, trangThai:false},
      {SoGhe:34, tenGhe: "số 34", gia:100, trangThai:false},
  ]

  soGheDaDat:number=0;
  soGheConLai:number=0;
  DanhSachGheDangDat:typeDS[] =[];

  DatGheParent(status:typeDS, ghe: typeDS){
    // console.log(value1);
    // console.log(value2);
    if(status){
      this.soGheDaDat ++;
      this.soGheConLai --;
      this.DanhSachGheDangDat.push(ghe);
    }
    else{
      this.soGheDaDat --;
      this.soGheConLai ++;
      for(let index in this.DanhSachGheDangDat){
        if(this.DanhSachGheDangDat[index].SoGhe === ghe.SoGhe){
          this.DanhSachGheDangDat.splice(parseInt(index),1);
        }
      }
    }
    console.log(this.DanhSachGheDangDat);
    
  }
  constructor() { }

  ngOnInit(){
    for(let ghe of this.DanhSachGhe){
      if(!ghe.trangThai){
        this.soGheConLai ++;
      }
    };
    // this.soGheConLai = this.DanhSachGhe.length;
  }
  ThemGhe(gheDuocThem){
    this.DanhSachGhe.push(gheDuocThem);
  }
}
interface typeDS{
  SoGhe:number;
  tenGhe:string;
  gia:number;
  trangThai:boolean;
}