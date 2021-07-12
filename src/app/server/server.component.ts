//import { ServerComponent } from './server.component';
// Um component é simplesmente uma typescript class que o Angular é capaz de instanciar para criar objetos com base no projeto que você está criando;
//o decorator @Component não é algo que o typescript conhece
import { Component } from '@angular/core';

//decorator: aqui avisa ao angular que a classe abaixo não é apenas uma classe, mas um component;
@Component({
  selector: 'app-server',
  //Os templates são obrigatórios no component.ts
  //ao inves de inserir um arquivo html, é possível inserir direto o código ou o selector do component que você quer exibir como template.
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = "online";
}


