import { Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { Event } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
    selector: 'app-by-country-page',
    standalone: true,
    templateUrl: './by-country-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent, CountryTableComponent]
})
export class ByCountryPageComponent {

    // Cambiado: Inyección de dependencia mediante el constructor
    constructor(private countryService: CountryService) {}

    countryListObserver: Observable<any> | undefined;
    countryList: Country[] | undefined = [];

    // Método para añadir elementos
    addItem(event: any) {
        // Llamada al método de búsqueda del servicio
        this.countryListObserver = this.countryService.searchCountry(event);
        // Suscripción al observable resultante
        this.countryListObserver.subscribe({
            next: value => {
                this.countryList = value;
                console.log(this.countryList);
            },
            error: err => console.error(err),
            complete: () => console.log("completo")
        });
    }

    ngOnInit() {
        // Llamada al método de obtención de todos los países al inicializar el componente
        this.countryListObserver = this.countryService.getAll();

        // Suscripción al observable resultante
        this.countryListObserver.subscribe({
            next: value => {
                this.countryList = value;
                console.log(this.countryList);
            },
            error: err => console.error(err),
            complete: () => console.log("completo")
        });
    }
}
