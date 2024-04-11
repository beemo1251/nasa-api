import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AstronomyPicture } from '../interfaces/pictures';
import { ImageNasaApi } from '../interfaces/images';
import { map, Observable } from 'rxjs';

interface ApiResponseImage {
  collection: {
    version: string;
    href: string;
    items: ImageNasaApi[];
  }
}
@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private api_key = 'PgoWNKKoQdGNvExQNLpjEYXGLv6OIUF9QREYe7Mo';
  private urlPlanetary = 'https://api.nasa.gov/planetary/apod';
  private urlImages = 'https://images-api.nasa.gov/search';

  constructor(
    private http: HttpClient
  ) { }

  getData(cantidad: number): Observable<AstronomyPicture[]> {
    return this.http.get<AstronomyPicture[]>(this.urlPlanetary, { params: { api_key: this.api_key, count: cantidad } });
  }

  getImages(buscar: string): Observable<ImageNasaApi[]> {
    return this.http.get<{ collection: { items: ImageNasaApi[] } }>(this.urlImages, { params: { q: buscar } })
        .pipe(
          map(response => response.collection.items.map(item => ({
            href: item.href,
            data: item.data,
            links: item.links
          })))
        );
  }

}
