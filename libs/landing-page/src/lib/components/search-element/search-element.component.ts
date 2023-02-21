import { Component, OnInit } from '@angular/core';
import { SearchElement } from './search-element-type';

@Component({
  selector: 'angelscale-app-search-element',
  templateUrl: './search-element.component.html',
  styleUrls: ['./search-element.component.scss']
})
export class SearchElementComponent implements OnInit {

  searchElements: SearchElement[] = [];

  constructor() { }


  ngOnInit() {
    this.searchElements = [
      {
        avatar: '/assets/images/icons/user-robert.svg',
        name: 'Robert Fox',
        rate: 'Top Rated',
        title: 'Mobile App Developer - Swift | SwiftUI | Kotlin | Flutter',
        hourly: 80,
        earning: 2,
        country: 'Afghanistan',
        skills: ['Business planning', 'Product marketing', 'Digital marketing', 'Content Writing', 'Web development'],
        bio: 'Lörem ipsum sprängbälte padda mer. Kamikazetips fotobomba sos, sekelsiffror bin Ladin-rabatt tårtgate inte immersiv, tåd, i snurrmästare aspludd kulturkofta: genusbudgetering plastis för att göra en pudel. Parära hybridkrig tiheten tvillingshoppare det entourage nirtad...  '
      },
      {
        avatar: '/assets/images/icons/user-theresa.svg',
        name: 'Theresa Webb',
        rate: 'Top Rated',
        title: 'Mobile App Developer - Swift | SwiftUI | Kotlin | Flutter',
        hourly: 50,
        earning: 2,
        country: 'Afghanistan',
        skills: ['Business planning', 'Product marketing', 'Digital marketing', 'Content Writing', 'Web development'],
        bio: 'Lörem ipsum sprängbälte padda mer. Kamikazetips fotobomba sos, sekelsiffror bin Ladin-rabatt tårtgate inte immersiv, tåd, i snurrmästare aspludd kulturkofta: genusbudgetering plastis för att göra en pudel. Parära hybridkrig tiheten tvillingshoppare det entourage nirtad...  '
      },
      {
        avatar: '/assets/images/icons/user-cody.svg',
        name: 'Cody Fisher',
        rate: 'Top Rated',
        title: 'Mobile App Developer - Swift | SwiftUI | Kotlin | Flutter',
        hourly: 20,
        earning: 2,
        country: 'Afghanistan',
        skills: ['Business planning', 'Product marketing', 'Digital marketing', 'Content Writing', 'Web development'],
        bio: 'Lörem ipsum sprängbälte padda mer. Kamikazetips fotobomba sos, sekelsiffror bin Ladin-rabatt tårtgate inte immersiv, tåd, i snurrmästare aspludd kulturkofta: genusbudgetering plastis för att göra en pudel. Parära hybridkrig tiheten tvillingshoppare det entourage nirtad...  '
      },
      {
        avatar: '/assets/images/icons/user-bessie.svg',
        name: 'Bessie Cooper',
        rate: 'Top Rated',
        title: 'Mobile App Developer - Swift | SwiftUI | Kotlin | Flutter',
        hourly: 60,
        earning: 2,
        country: 'Afghanistan',
        skills: ['Business planning', 'Product marketing', 'Digital marketing', 'Content Writing', 'Web development'],
        bio: 'Lörem ipsum sprängbälte padda mer. Kamikazetips fotobomba sos, sekelsiffror bin Ladin-rabatt tårtgate inte immersiv, tåd, i snurrmästare aspludd kulturkofta: genusbudgetering plastis för att göra en pudel. Parära hybridkrig tiheten tvillingshoppare det entourage nirtad...  '
      },
      {
        avatar: '/assets/images/icons/user-leslie.svg',
        name: 'Leslie Alexander',
        rate: 'Top Rated',
        title: 'Mobile App Developer - Swift | SwiftUI | Kotlin | Flutter',
        hourly: 90,
        earning: 2,
        country: 'Afghanistan',
        skills: ['Business planning', 'Product marketing', 'Digital marketing', 'Content Writing', 'Web development'],
        bio: 'Lörem ipsum sprängbälte padda mer. Kamikazetips fotobomba sos, sekelsiffror bin Ladin-rabatt tårtgate inte immersiv, tåd, i snurrmästare aspludd kulturkofta: genusbudgetering plastis för att göra en pudel. Parära hybridkrig tiheten tvillingshoppare det entourage nirtad...  '
      },
      {
        avatar: '/assets/images/icons/user-floyd.svg',
        name: 'Floyd Miles',
        rate: 'Top Rated',
        title: 'Mobile App Developer - Swift | SwiftUI | Kotlin | Flutter',
        hourly: 40,
        earning: 2,
        country: 'Afghanistan',
        skills: ['Business planning', 'Product marketing', 'Digital marketing', 'Content Writing', 'Web development'],
        bio: 'Lörem ipsum sprängbälte padda mer. Kamikazetips fotobomba sos, sekelsiffror bin Ladin-rabatt tårtgate inte immersiv, tåd, i snurrmästare aspludd kulturkofta: genusbudgetering plastis för att göra en pudel. Parära hybridkrig tiheten tvillingshoppare det entourage nirtad...  '
      },
      {
        avatar: '/assets/images/icons/user-esther.svg',
        name: 'Esther Howard',
        rate: 'Top Rated',
        title: 'Mobile App Developer - Swift | SwiftUI | Kotlin | Flutter',
        hourly: 10,
        earning: 2,
        country: 'Afghanistan',
        skills: ['Business planning', 'Product marketing', 'Digital marketing', 'Content Writing', 'Web development'],
        bio: 'Lörem ipsum sprängbälte padda mer. Kamikazetips fotobomba sos, sekelsiffror bin Ladin-rabatt tårtgate inte immersiv, tåd, i snurrmästare aspludd kulturkofta: genusbudgetering plastis för att göra en pudel. Parära hybridkrig tiheten tvillingshoppare det entourage nirtad...  '
      },
      {
        avatar: '/assets/images/icons/user-floyd2.svg',
        name: 'Floyd Miles',
        rate: 'Top Rated',
        title: 'Mobile App Developer - Swift | SwiftUI | Kotlin | Flutter',
        hourly: 50,
        earning: 2,
        country: 'Afghanistan',
        skills: ['Business planning', 'Product marketing', 'Digital marketing', 'Content Writing', 'Web development'],
        bio: 'Lörem ipsum sprängbälte padda mer. Kamikazetips fotobomba sos, sekelsiffror bin Ladin-rabatt tårtgate inte immersiv, tåd, i snurrmästare aspludd kulturkofta: genusbudgetering plastis för att göra en pudel. Parära hybridkrig tiheten tvillingshoppare det entourage nirtad...  '
      },
      {
        avatar: '/assets/images/icons/user-kathryn.svg',
        name: 'Kathryn Murphy',
        rate: 'Top Rated',
        title: 'Mobile App Developer - Swift | SwiftUI | Kotlin | Flutter',
        hourly: 60,
        earning: 2,
        country: 'Afghanistan',
        skills: ['Business planning', 'Product marketing', 'Digital marketing', 'Content Writing', 'Web development'],
        bio: 'Lörem ipsum sprängbälte padda mer. Kamikazetips fotobomba sos, sekelsiffror bin Ladin-rabatt tårtgate inte immersiv, tåd, i snurrmästare aspludd kulturkofta: genusbudgetering plastis för att göra en pudel. Parära hybridkrig tiheten tvillingshoppare det entourage nirtad...  '
      },
      {
        avatar: '/assets/images/icons/user-annette.svg',
        name: 'Annette Black',
        rate: 'Top Rated',
        title: 'Mobile App Developer - Swift | SwiftUI | Kotlin | Flutter',
        hourly: 40,
        earning: 2,
        country: 'Afghanistan',
        skills: ['Business planning', 'Product marketing', 'Digital marketing', 'Content Writing', 'Web development'],
        bio: 'Lörem ipsum sprängbälte padda mer. Kamikazetips fotobomba sos, sekelsiffror bin Ladin-rabatt tårtgate inte immersiv, tåd, i snurrmästare aspludd kulturkofta: genusbudgetering plastis för att göra en pudel. Parära hybridkrig tiheten tvillingshoppare det entourage nirtad...  '
      },
    ]
  }

}
