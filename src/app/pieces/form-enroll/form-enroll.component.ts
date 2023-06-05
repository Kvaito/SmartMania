import {Component, OnInit} from '@angular/core';
import axios from "axios";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-form-enroll',
  templateUrl: './form-enroll.component.html',
  styleUrls: ['./form-enroll.component.scss']
})
export class FormEnrollComponent implements OnInit {

  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
  }
  message:string=''
  note = {
    name:'',
    phone: '',
    model: '',
    service: ''
  }

  createNote() {
    const TOKEN = '6145203328:AAE4XeBa1zhya928juftRkMxnfqzHAd8Yo8'
    const CHAT_ID = '-1001972121988'
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
    let message = 'Запись ' + this.productService.generateId()+'\n\n'
    message+='Выбранная услуга '+this.note.name+'\n\n'
    message+='Номер телефона '+this.note.phone+'\n\n'
    message+='Модель телефона '+this.note.model+'\n'
    axios.post(
      URL_API, {
        chat_id:CHAT_ID,
        parse_mode:'html',
        text:message
      }
    ).then(()=>{
      this.message='Вы успешно записаны!'
    })
  }

}
