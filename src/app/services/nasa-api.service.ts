import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AstronomyPicture } from '../interfaces/pictures';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private api_key = 'PgoWNKKoQdGNvExQNLpjEYXGLv6OIUF9QREYe7Mo';
  private url = 'https://api.nasa.gov/planetary/apod';

  constructor(
    private http: HttpClient
  ) { }

  getData(cantidad: number) {
    return this.http.get<AstronomyPicture[]>(this.url, { params: { api_key: this.api_key, count: cantidad } });
  }

}
