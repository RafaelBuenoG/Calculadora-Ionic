import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  valor1 = '';
  valor2 = '';
  soma = this.valor1 + this.valor2;
  subtracao = '';
  multiplicacao = '';
  divisao = '';


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: `Valor 1: ${this.valor1} <br> Valor 2: ${this.valor2} <br> Resultado: ${this.soma}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
