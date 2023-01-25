import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service/list-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  constructor(public listService: ListServiceService) { }


  selected_item: any;
  selected_item_id:any;
  add_item_form = false;
  edit_item_form = false;

  itemForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('')
  });

  ngOnInit(): void {
    this.listService.get_data();

  }

  add_item() {
    
    console.log(this.itemForm.value);

    this.itemForm.value['id'] = this.listService.item_list.length + 1;
    this.listService.add_item(this.itemForm.value);
    this.toggle_new_item();
    this.clear_form();
  }
  toggle_new_item() {
    this.add_item_form = !this.add_item_form;
    if(this.add_item_form){
    this.clear_form();

    }
  }


  toggle_edit_item(item?: any) {
    this.edit_item_form = !this.edit_item_form;
    if (item) {
      console.log(item);
      this.itemForm.patchValue({
        name: item.name,
        description: item.description,
        price: item.price,
        id: item.id
      });
      this.itemForm.value['id'] = item.id;
      this.selected_item_id = item.id;
    }else{
    this.clear_form();

    }
  }

  edit_item() {
    this.itemForm.value['id'] = this.selected_item_id;
    this.selected_item = this.itemForm.value;
    console.log(this.selected_item,this.itemForm.value);

    this.listService.edit_item(this.selected_item);
    this.toggle_edit_item();
    this.clear_form();
  }

  clear_form() {
    this.selected_item_id=0;
    this.itemForm.patchValue({
      name: '',
      description: '',
      price: null
    });
  }
}
