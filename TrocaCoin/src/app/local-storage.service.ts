import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage
  constructor() {
    this.storage = window.localStorage
   }
   set(key: string, value: any): boolean{
    if(this.storage){
      this.storage.setItem(key,JSON.stringify(value))
    return true;
    }
    return false
    
   }
   get(key: string, value: any){
    if(this.storage){
      this.storage.setItem(key,JSON.stringify(value))
    return JSON.parse;
    }
    return null
   }
   remove(key: string, value: any): boolean{
    if(this.storage){
      this.storage.setItem(key,JSON.stringify(value))
    return true;
    }
    return false
    
   }
}
