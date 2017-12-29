import {Injectable}                                from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }                              from 'rxjs/Observable';

@Injectable()
export class PersonaService{
	public url:string;
	constructor(private _http:Http){
		this.url = 'https://jsonplaceholder.typicode.com/posts';
	}

	getListaOnline() {
		// let headers = new Headers({'Content-Type' : 'application/json'});
		return this._http.get(this.url).map(res => res.json());
	}
}