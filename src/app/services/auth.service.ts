import { Injectable, NgZone } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: any;

  constructor(
    public http: Http, private router: Router) {

  }
  getListe() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get('https://canary-247013.appspot.com/bo/companies?limit=1500', options)
      .map(res => res.json());

  }
  getContact(x) {

    // return this.http.get('http://34.122.225.210:8080/hello_user/ghassen', {
    //   'data': x,
    // })
    //   .map(res => res.json());
    return this.http.post('http://34.122.225.210:8080/hello_user', {
      name:  x,
      }).map(res => res.json());
  }
  delete(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('https://canary-247013.appspot.com/bo/companies/' + id, options).map(res => res.json());
  }
  RechercheList(search) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('query', `${search}`);
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    return this.http.get('https://canary-247013.appspot.com/bo/companies', {
      params: {
        query: search,
        limit: 1000
      }, headers: headers
    }).map(res => res.json());

  }
  Login(email, pass) {
    this.http.post("https://canary-247013.appspot.com/bo/login",
      {
        "email": email,
        "password": pass
      }).subscribe(
        data => {
          console.log("POST Request is successful ", data);

          this.token = data.text();
          localStorage.setItem("token", this.token);
          this.router.navigate(['/dashbord']);

        },
        error => {
          console.log("Error", error);

        }

      );

  }

  Ajout(id, name, generic_name, nationality, description, alt_names) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    let options = new RequestOptions({ headers: headers });
    this.http.post("https://canary-247013.appspot.com/bo/companies",
      {
        "id": id,
        "name": name,
        "generic_name": generic_name,
        "nationality": nationality,
        "description": description,
        "alt_names": alt_names,
      }, options).subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        });
  }

  getListeId(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.get('https://canary-247013.appspot.com/bo/companies/' + id, options).map(res => res.json());

  }

  getContactId(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.get('https://canary-247013.appspot.com/bo/contact/' + id, options).map(res => res.json());
  }
  getListeIdlangue(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.get('https://canary-247013.appspot.com/bo/languages/' + id, options).map(res => res.json());

  }
  getListelangue() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get('https://canary-247013.appspot.com/bo/languages', options)
      .map(res => res.json());

  }
  updateOne(id, obj) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.put('https://canary-247013.appspot.com/bo/companies/' + id, {
      "name": obj.name,
      "generic_name": obj.generic_name,
      "nationality": obj.nationality,
      "description": obj.description,
      "alt_names": obj.alt_names
    }, options).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      });
  }
  updateOneLangue(id, form1, form2, form3, array) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://canary-247013.appspot.com/bo/languages/' + id, {
      "fundDetails": {
        "category_button_text": form1.category_button_text,
        "ACTIONS": form1.ACTIONS,
        "GESTION ALTERNATIVE": form1.GESTIONALTERNATIVE,
        "IMMOBILIER DIRECT": form1.IMMOBILIERDIRECT,
        "OBLIGATIONS": form1.OBLIGATIONS,
        "DIVERSIFIES": form1.DIVERSIFIES,
        "no_gestion_society_text": form1.no_gestion_society_text,
        "category_title": form1.category_title,
        "div_flexible_text": form1.div_flexible_text,
        "explain_note_content": form1.explain_note_content,
        "explain_note_text": form1.explain_note_text,
        "follow_button_text": form1.follow_button_text,
        "frais_gestion_detail_text": form1.frais_gestion_detail_text,
        "frais_gestion_popup_text": form1.frais_gestion_popup_text,
        "frais_gestion_title": form1.frais_gestion_title,
        "isin_text": form1.isin_text,

        "label_isr_popup_text": form1.label_isr_popup_text,
        "label_isr_detail_title": form1.label_isr_detail_title,
        "label_isr_text": form1.label_isr_text,
        "perf_title": form1.perf_title,
        "risk_indice_detail_popup_text": form1.risk_indice_detail_popup_text,
        "risk_indice_detail_text": form1.risk_indice_detail_text,
        "risk_indice_high_text": form1.risk_indice_high_text,
        "risk_indice_low_text": form1.risk_indice_low_text,
        "risk_indice_subtitle": form1.risk_indice_subtitle,
        "risk_indice_title": form1.risk_indice_title,
        "unfollow_button_text": form1.unfollow_button_text,
      },
      "home": {
        "button_text_nl_1": form2.button_text_nl_1,
        "canary_what_content": form2.canary_what_content,
        "canary_what_title": form2.canary_what_title,
        "footer_text_1": form2.footer_text_1,
        "footer_text_2": form2.footer_text_2,
        "footer_text_3": form2.footer_text_3,
        "how_work_canary_content": form2.how_work_canary_content,
        "how_work_canary_title": form2.how_work_canary_title,
        "how_work_test_text": form2.how_work_test_text,
        "nl2_button": form2.nl2_button,
        "nl2_placeholer": form2.nl2_placeholer,
        "nl_1_content": form2.nl_1_content,
        "nl_2_content": form2.nl_2_content,
        "palmares_button_text": form2.palmares_button_text,
        "palmares_title": form2.palmares_title,
        "search_form_footer": form2.search_form_footer,
        "search_form_placeholder": form2.search_form_placeholder,
        "search_form_title": form2.search_form_title,
        "text_good_example": form2.text_good_example,
        "text_bad_example": form2.text_bad_example,
        "text_medium_example": form2.text_medium_example,
        "text_very_bad_example": form2.text_very_bad_example,
        "text_very_good_example": form2.text_very_good_example,
        "why_canary_content": form2.why_canary_content,
        "why_canary_title": form2.why_canary_title,
        "why_canary_repeater_text": array,
        "baseline_logo": form2.baseline_logo,
        "search_form_baseline": form2.search_form_baseline,
        "tip_title": form2.tip_title,
        "tip_text": form2.tip_text,

        "canary_mission_titre": form2.canary_mission_titre,
        "canary_mission_text": form2.canary_mission_text,
        "le_canary_score_titre": form2.le_canary_score_titre,
        "le_canary_score_text": form2.le_canary_score_text,
        "ma_premiere_recherche_titre": form2.ma_premiere_recherche_titre,
        "ma_premiere_recherche_text": form2.ma_premiere_recherche_text,

      },
      "footer": {
        "Quisommesnous": form3.Quisommesnous,
        "FondationCanary": form3.FondationCanary,
        "Mentionslegales": form3.Mentionslegales,
        "QuisommesnousTitre": form3.QuisommesnousTitre,
        "FondationCanaryTitre": form3.FondationCanaryTitre,
        "MentionslegalesTitre": form3.MentionslegalesTitre,

      }
    }, options).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      });
  }

}
