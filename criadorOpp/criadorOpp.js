import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class TCClwc extends LightningElement {
   

    
handleSuccess(event) {
    this.showToast();
}

showToast() {
    const event = new ShowToastEvent({
        title: 'Registro Realizado',
        message:
            'Obrigado!',
    });
    this.dispatchEvent(event);
}

handleReset() {
    //seleciona todos os elementos lightning-input-field
    const inputFields = this.template.querySelectorAll(
        'lightning-input-field'
    );

    //se possuir dados, para cada campo aplicar o reset
    if (inputFields) {
        inputFields.forEach(field => {
            field.reset();
        });
    }
}

}
