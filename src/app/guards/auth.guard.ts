import { ConsultaUsuariosService } from './../services/consulta-usuarios.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private servicioUsuarios: ConsultaUsuariosService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.servicioUsuarios.buscarUsuarioAutenticado()) {
      this.router.navigate(['']).then(() => false)
    }
    return true;
  }
  
}
