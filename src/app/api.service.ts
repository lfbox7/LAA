import { Injectable } from '@angular/core';
import { Client } from "@petfinder/petfinder-js";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

const client = new Client({apiKey: "MreeZBU8nfEU6g8h8MBxZIJ5hyzudGud1TYU3gJ2Ase5M7RfyD", secret: "fsYBRCekV4CmGOJTguA735YLrTbDpwcHJTYhImyi"});

export class ApiService {

  constructor() {}
  
  client.
   
}
