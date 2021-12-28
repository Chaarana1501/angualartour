import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }
  public store(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public retrieve(key: string){
    return localStorage.getItem(key)
  }
  public clear(key:string) {
    localStorage.removeItem(key);
  }
  public clearAll(){
    localStorage.clear();
  }
}
