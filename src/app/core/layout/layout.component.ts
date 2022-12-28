import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private tokenService: TokenService, private router: Router) {}
  logout() {
    this.tokenService.clear();
    this.router.navigateByUrl('/login');
  }
}
