import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  vetor = ['Gabriely Morais', 'Amanda Morais', 'Shirley Maria', 'Lily Maria'];
  
  vetor2=[
   { foto: 'https://avatars.githubusercontent.com/u/105436281?v=4',nome: 'Gabriely Morais', telefone: '5614541', matricula: 12485},
   { foto: 'https://avatars.githubusercontent.com/u/105436946?v=4', nome: 'Amanda Morais ', telefone: '5614541', matricula: 75942},
   { foto: 'https://avatars.githubusercontent.com/u/2178796?v=4',nome: 'Gabriel Tavares', telefone: '5614541', matricula: 31608},
   { foto: 'https://avatars.githubusercontent.com/u/105436281?v=4',nome: 'Lily Maria', telefone: '5614541', matricula: 65472},


  ]

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Adicionar',
      message: "Insira os dados a seguir",
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome do aluno'
        },
        {
          name: 'matricula',
          placeholder: 'Matricula do aluno'
        },
        {
          name: 'telefone',
          placeholder: 'Telefone do aluno'
        },
        {
          name: 'foto',
          placeholder: 'URL da foto do aluno'
        },
      ],

      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('cancelado ');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('clicado:', data.title);
            this.vetor.push(data.title)


            let a = { foto: '',nome: data.title, telefone: data.telefone, matricula: data.matricula}

            this.vetor2.push(data.title)

          }
        }
      ]
    });
    prompt.present();
  }

  excluir(item){
    console.log('excluir',item);

    for (let i = 0; i < this.vetor2.length; i++) {
      const element = this.vetor2[i];

      if(element.nome == item.nome){
        console.log('achei',i, element.nome);
        this.vetor2.splice(i, 1); 
      }
      
    }

  }

  showConfirm(item) {
    const confirm = this.alertCtrl.create({
      title: 'Excluir',
      message: 'Tem certeza que deseja excluir? ',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
            this.excluir(item)
          }
        }
      ]
    });
    confirm.present();
  }

}
