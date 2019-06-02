import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LabsService} from "../labs.service";
import {AddressService} from '../../../utils/address.service';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-labs',
  templateUrl: './labs-form.component.html'
})
export class LabsFormComponent implements OnInit {

  form: FormGroup;
  formAddress: FormGroup;
  objetos: Array<any> = [];
  id;
  constructor(fb: FormBuilder,
              private labService: LabsService,
              private addressService: AddressService,
              private router: Router,
              private route: ActivatedRoute ) {
    this.form = fb.group({
      __v: [],
      _id: [],
      nome: [],
      razaoSocial: [],
      endereco: [],
      telefone: [],
      email: [],
      status: [],
      cnpj: []
    });

    this.formAddress = fb.group({
      rua: [],
      cep: ['', {updateOn: 'blur'}],
      cidade: [],
      uf: [],
      numero: [],
      complemento: [],
      bairro: []
    });

    this.formAddress.get("cep").valueChanges.subscribe(() => {
      let address;
      address = addressService.getAddress(this.formAddress.get("cep").value).subscribe(data => {
        console.log("Data => ", data)
        this.formAddress.get('rua').setValue(data.logradouro);
        this.formAddress.get('bairro').setValue(data.bairro);
        this.formAddress.get('cidade').setValue(data.localidade);
        this.formAddress.get('uf').setValue(data.uf);
      });
      console.log(address);
    })
  }

  salvar() {
    this.form.get("endereco").setValue(this.formAddress.value);
    console.log(this.form);


    console.log(this.objetos);
    if (this.id) {
      this.labService.updateLabs(this.form.value, this.id);
    } else {
      this.labService.postLabs(this.form.value);
    }
    this.router.navigate(['/labs']);

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let dados;
    if (this.id) {
      this.labService.getLabsById(this.id).subscribe(data => {
        console.log(data);
        dados = data
        this.form.setValue(dados);
        this.formAddress.setValue(dados.endereco)
      });

      console.log(dados)

    }

  }

}
