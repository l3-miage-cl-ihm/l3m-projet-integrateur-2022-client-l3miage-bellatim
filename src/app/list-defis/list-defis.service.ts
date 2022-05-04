import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Defi } from '../cyberchamis.service';

@Injectable({
  providedIn: 'root'
})
export class ListDefisService {

  private listDefisUrl = environment.apiUrl+'defis/';

  constructor(private httpClient: HttpClient) { }

  async getDefisObs(): Promise<Defi[]> {
    return await lastValueFrom(this.httpClient.get<Defi[]>(this.listDefisUrl, 
      {headers: new HttpHeaders(
        {'Authorization': JSON.parse(localStorage.getItem("currentUserToken") || '{}')})}));
  }


  selectDefi(defi: Defi): void {
    
  }

}
