import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService, SelectItem} from 'primeng/api';
import {User} from "../../interface/user";
import {UserService} from "../../services/user.service";
import {Computer} from "../../interface/computer";
import {ComputerService} from "../../services/computer.service";

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
  `],
  styleUrls: ['./crud-user.component.scss']
})
export class CrudUserComponent implements OnInit {
  userDialog: boolean;
  users;
  user: User;
  selectedUsers: User[];
  selectedComputes:any[];
  submitted: boolean;
  isActivated: boolean = false;
  listComputers;
  constructor(
    private readonly _userService: UserService,
    private readonly _computerService: ComputerService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.fillArray();
  }

  fillArray(){
    this._userService.getEveryThing()
      .subscribe(
        (data) => this.users = data,
        (error) => console.error('Error', error)
      );
    this._computerService.getAllComputers()
      .subscribe(
        (computers)=> {
          this.listComputers = computers;
        },
        (error)=>console.error('Error', error),
      );
  }

  isActivatedRadioB() {
    this.isActivated = true;
  }

  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  deleteSelectedsUsers() {
    const isDeleted = this._userService.deleteSomeUser(this.selectedUsers);
    const ObsDeleted = this._userService.deleteSomeUser2(this.selectedUsers);
    ObsDeleted

    if (isDeleted) {
      this._confirmationService.confirm(
        {
          message: 'Estas seguro de eliminar los registros seleccionados',
          header: 'Confirmar',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.users = this.users.filter(val =>
              !this.selectedUsers.includes(val));
            this.selectedUsers = null;
            this._messageService.add({
              severity: 'succeed',
              summary: 'Exito!',
              detail: 'Usuarios Eliminados', life: 3000
            });
          }
        });
    } else {
      this._confirmationService.confirm(
        {
          message: 'Hubo problemas en la eliminación de los usuarios',
          header: 'OK',
          icon: 'pi pi-exclamation-circle',
          accept: () => {
            this.users = this.users.filter(val =>
              !this.selectedUsers.includes(val));
            this.selectedUsers = null;
            this._messageService.add({
              severity: 'failure',
              summary: 'Un Error',
              detail: 'Usuarios No Fueron Eliminados', life: 3000
            });
          }
        });
    }
  }

  editUser(user: User) {
    this.user = {...user};
    this.userDialog = true;
  }

  deleteUser(user: User) {
    this._userService.deleteUser(user.id)
      .subscribe(
        ()=>console.log('Deleted Successful'),
        (error)=>console.log('Error',error),
      );
    this._confirmationService.confirm(
      {
        message: 'Estas seguro de eliminar el usuario' +
          user.name + ' ' + user.last_name + '?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.users = this.users.filter(val => val.id !== user.id);
          this.user = {};
          this._messageService.add(
            {severity: 'success', summary: 'Exito!', detail: 'Usuario Eliminado', life: 3000}
          );
        }
      });
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  saveUser() {
    this.submitted = true;
    this.user.computers = [];
    for (let computer of this.selectedComputes)
      this.user.computers.push(computer.id);
    try {
      if (this.user.name.trim()) {
        const userServiceVar = this._userService;
        if (this.user.id) {
          userServiceVar.updateUser(this.user, this.user.id)
            .subscribe(
              ()=>console.log('Everything is OK!'),
              (error)=>console.error('Error', error),
            );
          this.users[this.findIndexById(this.user.id)] = this.user;
          this._messageService.add({
            severity: 'success',
            summary: 'Exito!',
            detail: 'Usuario Actualizado', life: 3000
          });
        } else {
          this._userService.newUser(this.user)
            .subscribe(
              ()=>{
                console.log('Everything is OK')},
              (error)=>console.error('Error found', error),
            );
          this.fillArray();
          this._messageService.add({
            severity: 'success',
            summary: 'Exito!',
            detail: 'Usuario Creado', life: 3000
          });
        }
        this.users = [...this.users];
        this.userDialog = false;
        this.user = {}
      }
    } catch (error) {
      console.error('Error found', error);
    }

  }


  private findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
