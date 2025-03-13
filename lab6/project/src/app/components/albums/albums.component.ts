import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album.model';
@Component({
  selector: 'app-albums',
  imports: [CommonModule,RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums:Album[]=[];
  constructor(private albumServices:AlbumsService){}
  ngOnInit(): void {
    this.albumServices.getAlbums().subscribe((data)=>
    this.albums=data)
  }
  deleteAlbumById(id:number):void{
    this.albumServices.deleteAlbum(id).subscribe(()=>{
      this.albums=this.albums.filter(albums=>albums.id!==id);
    })
  }

}
