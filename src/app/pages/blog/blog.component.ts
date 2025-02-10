import { Component, ViewChild } from '@angular/core';
import { BlogMainSectionComponent } from 'src/app/components/blog-main-section/blog-main-section.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  @ViewChild(BlogMainSectionComponent) mainSection!: BlogMainSectionComponent;

  filterCategory(category: string){
    this.mainSection.filterPosts(category);
  }
}
