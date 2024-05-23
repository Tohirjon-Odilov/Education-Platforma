import { Component } from '@angular/core';
import { CrudService } from '../../../../services/CRUDs/crud.service';
import { Coupon } from '../../../../models/coupon';

@Component({
  selector: 'app-coupon-update',
  templateUrl: './coupon-update.component.html',
  styleUrls: ['./coupon-update.component.scss'] // Use styleUrls instead of styleUrl
})
export class CouponUpdateComponent {
  Id = '';
  couponCode = '';
  discount = 0;

  constructor(private crudService: CrudService) { }

  submit() {
    // Pass the newCoupon object to updateCoupon method
    // debugger;
    this.crudService.updateCoupon(this.Id, this.couponCode, this.discount).subscribe(res => {
      console.log(res);
      if (res.isSuccess) {
        alert('Successful');
      } else {
        alert('Unsuccessful');
      }
    });
  }
}
