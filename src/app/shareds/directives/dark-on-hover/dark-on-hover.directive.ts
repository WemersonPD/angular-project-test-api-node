import { Directive, ElementRef, HostListener, Renderer2, Input} from '@angular/core';
import { filter } from 'rxjs/operators';

@Directive({
  // Servirá para apenas passar como diretiva em uma tag, como <a appDarkOnHover>link</a>
  // Fica entre colchetes devido ele ser uma propriedade.
  selector: '[appDarkOnHover]',
})
export class DarOnHoverDirective {

  @Input() brightness = '70%'

  constructor(
    // Para pegar o elementoque está usando a diretiva e poder manipulalo.
    private el: ElementRef,
    // Para poder alterar a dom do elemento fácilmente
    private render: Renderer2
    ){

  }

  // Como manipulação em javaScriot, uma vez que já pegamos o elemento pela injeção de dependncia no construtor da classe, agora só manipulamos o mesmo pela DOM
  @HostListener('mouseover') //1 Quando acontecer este evento no elemento especificado
  darkOn(){ //2 Ira ser chamado está função
    // Usando o modulo renderer2 do angular para modificar a dom
    // O this.el.nativeElement (está pegando o elemento que tem o atributo) usa o ElementRef também do angular
    // Está sendo feito um filtro no estilo do elemento deixando ele 70% mais escuro.
    // O valor de mais escuro ou mais claro pode ser passado na propria propriedade
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`)
  }

  @HostListener('mouseleave') //3 A mesma coisa pra aqui.
  darkOff(){
    // Mesma coisa do outro, só que aqui ele devolve a cor padrão.
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)')
  }
}
