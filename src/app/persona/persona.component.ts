import {Component}      from '@angular/core';
import {PersonaService} from './persona.service';
@Component({
    selector    : 'persona',
    templateUrl : './persona.component.html',
    providers    : [PersonaService]
})

export class PersonaComponent {
    public title:string = 'persona';
    public flg_mostrar_tabla:boolean;
    public personas;
    public nombre:string;
    public apellido:string;
    public edad:string;
    public color:string;
    public index;
    constructor(private _personaService : PersonaService) {
        this.personas = [
            { nombre: 'Alejandra', apellido: 'Quiroga', edad: 25 },
            { nombre: 'Jason', apellido: 'Ajax', edad: 33 },
            { nombre: 'Mauricio', apellido: 'Katze', edad: 58 },
            { nombre: 'José Luis', apellido: 'Rodríguez', edad: 74 },
            { nombre: 'Arya', apellido: 'Stark', edad: 9 }
        ];
        this.flg_mostrar_tabla = true;
        this.nombre = null;
        this.color  ='red';
        this.index  = null;
    }

    ngOnInit() {
        this.recibirListado();
    }

    activarDesactivar(flg) {
        this.flg_mostrar_tabla = flg;
    }

    capturarValores(pers,index) {
        this.nombre   = pers.nombre;
        this.apellido = pers.apellido;
        this.edad     = pers.edad;
        this.index    = index;
    }

    editarDatos() {
        if(this.index == null) {
            return;
        }
       this.personas[this.index] = {nombre: this.nombre, apellido: this.apellido, edad: this.edad };
    }

    recibirListado() {
        this._personaService.getListaOnline().subscribe(
            result => {
                console.log(result);
            },
            error => {
                console.log(<any>error);
            }
         );
    }

}