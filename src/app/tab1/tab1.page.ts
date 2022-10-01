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
  resultado = '';
  conta = '';

  async limpar(){
    this.valor1 = '';
    this.valor2 = '';
    this.resultado = '';
    this.conta = '';
  }

  async somar(){
    this.resultado = (parseFloat(this.valor1) + parseFloat(this.valor2)).toString();
    this.conta = 'Soma';
  }

  async subtracao(){
    this.resultado = (parseFloat(this.valor1) - parseFloat(this.valor2)).toString();
    this.conta = 'Subtração';
  }

  async multiplicacao(){
    this.resultado = (parseFloat(this.valor1) * parseFloat(this.valor2)).toString();
    this.conta = 'Multiplicação';
  }

  async divisao(){
    this.resultado = (parseFloat(this.valor1) / parseFloat(this.valor2)).toString();
    this.conta = 'Divisão';
  }

  maior(){
    if(this.valor1 > this.valor2)
    {
     return this.valor1;
    }
    else if(this.valor1 < this.valor2)
    {
     return this.valor2;
    }
    else
    {
     return 'Os números são iguais';
    }
  }

  menor(){
    if(this.valor1 < this.valor2)
    {
     return this.valor1;
    }
    else if(this.valor1 > this.valor2)
    {
     return this.valor2;
    }
    else
    {
     return 'Os números são iguais';
    }
  }

  async mostrarAlert() {

    const alert = await this.alertController.create({
      header: 'Alert',
      message: `Valor 1: ${this.valor1} <br> Valor 2: ${this.valor2} <br> Resultado: ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();

  }
  async mostrarMaior() {

    const alert =  this.alertController.create({
      header: 'Maior',
      message: this.maior(),
      buttons: ['OK'],
    });
        (await alert).present();
  }

  async mostrarMenor() {

    const alert =  this.alertController.create({
      header: 'Menor',
      message: this.menor(),
      buttons: ['OK'],
    });
        (await alert).present();
  }



}
