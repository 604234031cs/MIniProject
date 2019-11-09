import { Http } from '@angular/http';
import { CategoryPage } from './../category/category';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the InsertRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert-room',
  templateUrl: 'insert-room.html',
})
export class InsertRoomPage {
  result:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public http:Http
    ,public loadingCtrl : LoadingController) {
    this.result.roomname="";
    this.result.price="";
    this.result.category="";
    this.result.type="";
    this.result.tell="";
    this.result.facilities="";
    this.result.address="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertRoomPage');
  }

  insertroom(){
    if( this.result.roomname !="" &&  this.result.price!=""&&  this.result.category!=""&&  this.result.type!=""
      &&  this.result.tell!=""&&  this.result.facilities!=""&&  this.result.address!=""){
    console.log("ชื่อห้องเช่า",this.result.roomname);
    console.log("ราคา THB",this.result.price);
    console.log("ประเภทห้องเช่า",this.result.category);
    console.log("จำกัดเพศผู้เช่า",this.result.type);
    console.log("เบอร์ติดต่อ",this.result.tell);
    console.log("สิ่งอำนวยความสะดวก",this.result.facilities);
    console.log("ที่อยู่",this.result.address);

    let url = 'http://localhost/database/insertroom.php';
    let datapost = JSON.stringify({
      name: this.result.roomname,
      price: this.result.price,
      Category:this.result.category,
      type:this.result.type,
      tell:this.result.tell,
      facilities:this.result.facilities,
      address:this.result.addresss
    });
    this.http.post(url,datapost)
   let loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 3000
   });
   loader.present();
   this.navCtrl.setRoot(InsertRoomPage);
      }else {
        let alert = this.alertCtrl.create({
          message: 'กรุณากรอกข้อมูลให้ครบ',
          buttons: [
            {
              text: 'OK',
              role: 'OK',
            }
          ]
        });
        alert.present();
      }
    }
  }


