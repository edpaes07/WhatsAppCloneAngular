import { Component, OnInit } from '@angular/core';
import { faCircleNotch, faCommentAlt, faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cabecalho-perfil',
  templateUrl: './cabecalho-perfil.component.html',
  styleUrls: ['./cabecalho-perfil.component.css']
})
export class CabecalhoPerfilComponent implements OnInit {

  faCircleNotch = faCircleNotch;
  faCommentAlt = faCommentAlt;
  faEllipsisV = faEllipsisV;
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
