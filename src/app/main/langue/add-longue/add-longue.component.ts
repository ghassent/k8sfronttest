import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-longue',
  templateUrl: './add-longue.component.html',
  styleUrls: ['./add-longue.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class AddLongueComponent implements OnInit {
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
   array : string[];

  constructor(private _formBuilder: FormBuilder,private serivce :AuthService,private router: Router,
    ) { }

  ngOnInit() {
    this.form1 = this._formBuilder.group({
      id : ['', Validators.required],
      category_button_text : ['', Validators.required],
      ACTIONS : ['', Validators.required],
      GESTIONALTERNATIVE : ['', Validators.required],
      IMMOBILIERDIRECT : ['', Validators.required],
      OBLIGATIONS : ['', Validators.required],
      DIVERSIFIES : ['', Validators.required],
      no_gestion_society_text : ['', Validators.required],
      category_title  : ['', Validators.required],
      div_flexible_text   : ['', Validators.required],
      explain_note_content  : ['', Validators.required],
      explain_note_text      : ['', Validators.required],
      follow_button_text     : ['', Validators.required],
      frais_gestion_detail_text: ['', Validators.required],
      frais_gestion_popup_text : ['', Validators.required],
      frais_gestion_title   : ['', Validators.required],
      isin_text   : ['', Validators.required],
      label_isr_popup_text   : ['', Validators.required],
      label_isr_detail_title   : ['', Validators.required],
      label_isr_text : ['', Validators.required],
      perf_title  : ['', Validators.required],
      risk_indice_detail_popup_text   : ['', Validators.required],
      risk_indice_detail_text  : ['', Validators.required],
      risk_indice_high_text      : ['', Validators.required],
      risk_indice_low_text     : ['', Validators.required],
      risk_indice_subtitle      : ['', Validators.required],
      risk_indice_title     : ['', Validators.required],
      unfollow_button_text     : ['', Validators.required],

    });
    this.form2 = this._formBuilder.group({
 
      button_text_nl_1 : ['', Validators.required],
      canary_what_content  : ['', Validators.required],
      canary_what_title   : ['', Validators.required],
      footer_text_1  : ['', Validators.required],
      footer_text_2      : ['', Validators.required],
      footer_text_3     : ['', Validators.required],
      how_work_canary_content: ['', Validators.required],
      how_work_canary_title      : ['', Validators.required],
      how_work_test_text     : ['', Validators.required],
      nl2_button: ['', Validators.required],
      nl2_placeholer      : ['', Validators.required],
      nl_1_content     : ['', Validators.required],
      nl_2_content: ['', Validators.required],
      palmares_button_text      : ['', Validators.required],
      palmares_title     : ['', Validators.required],
      search_form_footer: ['', Validators.required],
      search_form_placeholder     : ['', Validators.required],
      search_form_title: ['', Validators.required],
      text_good_example     : ['', Validators.required],
      text_bad_example: ['', Validators.required],
      text_medium_example     : ['', Validators.required],
      text_very_bad_example: ['', Validators.required],
      text_very_good_example     : ['', Validators.required],
      why_canary_content: ['', Validators.required],
      why_canary_title: ['', Validators.required],
      why_canary_repeater_text: ['', Validators.required],
      baseline_logo: ['', Validators.required],
      search_form_baseline: ['', Validators.required],
      tip_title: ['', Validators.required],
      tip_text: ['', Validators.required],
      
      canary_mission_titre: ['', Validators.required],
      canary_mission_text: ['', Validators.required],
      le_canary_score_titre: ['', Validators.required],
      le_canary_score_text: ['', Validators.required],
      ma_premiere_recherche_titre: ['', Validators.required],
      ma_premiere_recherche_text: ['', Validators.required],

    });
    this.form3 = this._formBuilder.group({
      Quisommesnous: ['', Validators.required],
      QuisommesnousTitre: ['', Validators.required],
      FondationCanary: ['', Validators.required],
      FondationCanaryTitre: ['', Validators.required],
      Mentionslegales: ['', Validators.required],
      MentionslegalesTitre: ['', Validators.required],
      
    });
  }
  getPartie(ch,start,end){
    var ch1 = "";
    if(end - start>1){
    for(var i:number = start; i<end; i++){
      ch1 = ch1+ch[i];
    }
  }
    return ch1;
  }
  
  convert (ch){
  var begin = 0;
  var arrayFilter : string[] = [];
  for(var i:number = 1; i<ch.length+1; i++){
    if (ch[i] == ',' ){
      arrayFilter.push(this.getPartie(ch,begin,i));
       begin = i+1;
      
  
  }
  console.log(i);
  }
  arrayFilter.push(this.getPartie(ch,ch.lastIndexOf( "," )+1,ch.length));
  
  return arrayFilter;
  }
  
ajouter(){
  this.array = this.convert(this.form2.value.why_canary_repeater_text);
 this.serivce.updateOneLangue(this.form1.value.id,this.form1.value,this.form2.value,this.form3.value,this.array);

 this.router.navigate(['/localization']);
}
}
