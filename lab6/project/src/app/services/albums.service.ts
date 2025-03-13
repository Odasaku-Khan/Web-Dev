import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http:HttpClient) { }
  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbumById(id:number): Observable<Album>{
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  getAlbumPhotos(id:number): Observable<Photo[]>{
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
  updateAlbum(id:number, updatedData:any): Observable<Album>{
    return this.http.put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`,updatedData)
  }
  deleteAlbum(id: number):Observable<any>{
    return this.http.delete(`https://jsonplaceholder.typicode.com/albums/{id}`)
  }
  
}
