import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery List";
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 3
    },
    {
      name: "Eggs",
      quantity: 12
    },
    {
      name: "Juice",
      quantity: 1
    },
  ];
  constructor( public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }
  removeItem(item, index) {
    console.log("Removing Item -", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item -' + index + "...",
      duration: 3000
    });
   

   this.items.splice(index, 1);

  }
  addItem() {
    console.log("Adding Item");
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter Grocery Item',
      buttons: ['Save'],
      inputs: [
        {
          placeholder: 'Item',
        },
        {
          type: 'number',
          placeholder: 'Quantity',
          min: 1,
          max: 100,
        },
        
      ],
      
    });

    await alert.present();
  }
}

