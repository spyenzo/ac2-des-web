import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit() {
    const userIdParam = this.route.snapshot.paramMap.get('id');
    if (userIdParam !== null) {
      const userId = +userIdParam;
      this.user = this.userService.getUserById(userId);
    }
  }

  onSubmit() {
    if (this.user) {
      this.userService.updateUser(this.user.id, this.user);
      alert('Usuário atualizado com sucesso!');
      this.router.navigate(['/app/users']);
    }
  }
}