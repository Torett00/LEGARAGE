import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  navigateToFacebock(): void {
   
    // 
    //  // Redirect to 'target' route

   
      window.open('https://www.facebook.com/profile.php?id=100086913193624', '_blank');
  
  }
  navigateToInsta(): void {
   
    //   // Redirect to 'target' route
    window.open('https://www.instagram.com/cafe_le_garage/', '_blank');
  }
}
