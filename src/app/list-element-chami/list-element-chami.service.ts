import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Defi } from '../cyberchamis.service';

@Injectable({
  providedIn: 'root'
})
export class ListElementChamiService {
  // URL de l'API defis
  private defisListUrl = environment.apiUrl+'defis/';

  constructor(private httpClient: HttpClient) { }

  /**
   * Charge tous les défis crées par un Chami
   * @param id l'id du Chami
   * @returns La promesse de la liste des Defis créés par ce Chami
   */
  async getDefis(id: string): Promise<Defi[]>{
    return await lastValueFrom(this.httpClient.get<Defi[]>(this.defisListUrl+'chami/'+id, 
      {headers: new HttpHeaders(
        {Authorization: JSON.parse(localStorage.getItem("currentUserToken") || '{""}')})}
      ));

  }
}
