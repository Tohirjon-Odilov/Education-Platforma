import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-coupon-get-all',
  templateUrl: './coupon-get-all.component.html',
  styleUrl: './coupon-get-all.component.scss'
})
export class CouponGetAllComponent implements OnInit {

  allCoupons: any;
  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    this.crudService.GetAllCoupons().subscribe(res => {
      this.allCoupons = res
      
    })

    console.log(this.allCoupons)
  }

}
