import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent {
 @Output() selectedCategory = new EventEmitter<string>();

 selectCategory(category: string){
this.selectedCategory.emit(category);
 }
}
