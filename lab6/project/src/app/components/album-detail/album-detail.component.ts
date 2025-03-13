import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-album-detail',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  id:number=0;
  title:string=''
  constructor(private albumService:AlbumsService,
    private route:ActivatedRoute,
    private router:Router
  ){}
  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = +paramId;
      this.albumService.getAlbumById(this.id).subscribe((album) => {
        this.title = album.title;
      });
    }
  }
  SaveTitle(){
    this.albumService.updateAlbum(this.id,{title: this.title}).subscribe(()=>{
      alert('Album Uptaded')
    })
  }
  goBack(){
    this.router.navigate(['/albums']);
  }
  goToPhotos(){
    this.router.navigate([`/albums/${this.id}/photos`])
  }
}
