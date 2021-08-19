import { Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  @Input()  itemGhe;
  @Output() emitStatus = new EventEmitter();
  status:boolean = false;
  datGhe(){

    if(this.status){
      this.status=false;
    }
    else{
      this.status=true;
    }
    this.emitStatus.emit(this.status);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
