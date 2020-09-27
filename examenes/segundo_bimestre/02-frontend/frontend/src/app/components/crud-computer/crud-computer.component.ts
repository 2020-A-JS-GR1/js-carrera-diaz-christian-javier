import {Component, OnInit} from '@angular/core';
import {User} from "../../interface/user";
import {UserService} from "../../services/user.service";
import {ComputerService} from "../../services/computer.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Computer} from "../../interface/computer";

@Component({
  selector: 'app-crud-computer',
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
  `],
  templateUrl: './crud-computer.component.html',
  styleUrls: ['./crud-computer.component.scss']
})
export class CrudComputerComponent implements OnInit {
  computerDialog: boolean;
  computers;
  computer: Computer;
  selectedComputers: Computer[];
  selectedUsers: any[];
  submitted: boolean;
  isActivated: boolean = false;
  listUsers;
  brandList;
  brandSelected;

  constructor(
    private readonly _userService: UserService,
    private readonly _computerService: ComputerService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService
  ) {
    this.brandList=[
      {name:'MSI'},
      {name:'HP'},
      {name:'LENOVO'},
      {name:'TOSHIBA'},
      {name:'SONY'},
      {name:'ACER'},
    ];
  }

  ngOnInit() {
    this.fillArray();
  }

  fillArray() {
    this._computerService.getAllComputers()
      .subscribe(
        (data) => this.computers = data,
        (error) => console.error('Error', error)
      );
    this._userService.getEveryThing()
      .subscribe(
        (users) => {
          this.listUsers = users;
        },
        (error) => console.error('Error', error),
      );
  }

  isActivatedRadioB() {
    this.isActivated = true;
  }

  openNew() {
    this.computer = {};
    this.submitted = false;
    this.computerDialog = true;
  }

  deleteSelectedsComputers() {
    const isDeleted = this._computerService.deleteSomeComputers(this.selectedComputers);
    if (isDeleted) {
      this._confirmationService.confirm(
        {
          message: 'Estas seguro de eliminar los registros seleccionados',
          header: 'Confirmar',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.computers = this.computers.filter(val =>
              !this.selectedComputers.includes(val));
            this.selectedComputers = null;
            this._messageService.add({
              severity: 'succeed',
              summary: 'Exito!',
              detail: 'Computadores Eliminados', life: 3000
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
            this.computers = this.computers.filter(val =>
              !this.selectedComputers.includes(val));
            this.selectedComputers = null;
            this._messageService.add({
              severity: 'failure',
              summary: 'Un Error',
              detail: 'Computadoras No Fueron Eliminados', life: 3000
            });
          }
        });
    }
  }

  editComputer(computer: Computer) {
    this.computer = {...computer};
    this.computerDialog = true;
  }

  deleteComputer(computer: Computer) {
    this._computerService.deleteComputer(computer.id)
      .subscribe(
        () => console.log('Deleted Successful'),
        (error) => console.log('Error', error),
      );
    this._confirmationService.confirm(
      {
        message: 'Estas seguro de eliminar el usuario' +
          computer.model + ' de la marca' + computer.brand + '?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.computers = this.computers.filter(val => val.id !== computer.id);
          this.computer = {};
          this._messageService.add(
            {severity: 'success', summary: 'Exito!', detail: 'Computadora Eliminada', life: 3000}
          );
        }
      });
  }

  hideDialog() {
    this.computerDialog = false;
    this.submitted = false;
  }

  saveComputer() {
    this.submitted = true;
    this.computer.owners = [];
    this.computer.brand = this.brandSelected.name;
    for (let user of this.selectedUsers)
      this.computer.owners.push(user.id);
    try {
      if (this.computer.model.trim()) {
        const computerServiceVar = this._computerService;
        if (this.computer.id) {
          computerServiceVar.updateComputer(this.computer, this.computer.id)
            .subscribe(
              () => console.log('Everything is OK!'),
              (error) => console.error('Error', error),
            );
          this.computers[this.findIndexById(this.computer.id)] = this.computer;
          this._messageService.add({
            severity: 'success',
            summary: 'Exito!',
            detail: 'Computadora Actualizada', life: 3000
          });
        } else {
          console.error('like', this.computer);
          this._computerService.newComputer(this.computer)
            .subscribe(
              () => {
                console.log('Everything is OK')
              },
              (error) => console.error('Error found', error),
            );
          this.fillArray();
          this._messageService.add({
            severity: 'success',
            summary: 'Exito!',
            detail: 'Computadora Creada', life: 3000
          });
        }
        this.computers = [...this.computers];
        this.computerDialog = false;
        this.computer = {}
      }
    } catch (error) {
      console.error('Error found', error);
    }

  }


  private findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.computers.length; i++) {
      if (this.computers[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

}
