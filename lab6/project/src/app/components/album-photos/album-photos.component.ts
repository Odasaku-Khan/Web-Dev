import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  albumId:number=0;
  photos:Photo[]=[];
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    const albumIdParam = this.route.snapshot.paramMap.get('id');
    if (albumIdParam) {
      this.albumId = +albumIdParam;  // Convert to number
      this.albumsService.getAlbumPhotos(this.albumId).subscribe((photos) => {
        this.photos = photos;
      });
    } else {
      console.error('Invalid album ID');
    }

  }

}
