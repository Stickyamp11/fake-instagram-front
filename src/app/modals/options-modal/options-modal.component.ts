import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';
import { CommonModule } from '@angular/common';

enum OptionsEnum{
  DENUNCE,
  STOP_FOLLOW,
  ADD_TO_FAVORITE,
  GO_TO_PUB,
  SHARE,
  COPY_LINK,
  INSERTION_CODE,
  ABOUT_THIS_ACCOUNT,
  CLOSE
}

interface Option{
  title: string,
  actionType: OptionsEnum
}
@Component({
  selector: 'app-options-modal',
  standalone: true,
  imports: [GenericModalComponent, CommonModule],
  templateUrl: './options-modal.component.html',
  styleUrl: './options-modal.component.scss'
})
export class OptionsModalComponent {
  
  @ViewChild(GenericModalComponent) modal!: GenericModalComponent;
  @Output() close = new EventEmitter<void>();

  isVisible = false;
  
  options: Array<Option> = [
    { title: "Denunciar", actionType: OptionsEnum.DENUNCE},
    { title: "Dejar de seguir", actionType: OptionsEnum.STOP_FOLLOW},
    { title: "Añadir a favoritos", actionType: OptionsEnum.ADD_TO_FAVORITE},
    { title: "Ir a la publicación", actionType: OptionsEnum.GO_TO_PUB},
    { title: "Compartir en...", actionType: OptionsEnum.SHARE},
    { title: "Copiar enlace", actionType: OptionsEnum.COPY_LINK},
    { title: "Código de inserción", actionType: OptionsEnum.INSERTION_CODE},
    { title: "Información sobre esta cuenta", actionType: OptionsEnum.ABOUT_THIS_ACCOUNT},
    { title: "Cancelar", actionType: OptionsEnum.CLOSE}
  ];
  constructor(){

  }
  handleOption(option: Option){
    switch(option.actionType){
      case OptionsEnum.CLOSE:
        this.closeModal();
        break;
        
      default:
        console.log("default");
    }
    console.log("clicked", option);
  }
  openModal() {
    this.isVisible = true;
    this.modal.show();
  }

  closeModal() {
    this.isVisible = false;
    this.modal.hide();
  }
  closeThisModal(){
    this.isVisible = false;
  }

}
