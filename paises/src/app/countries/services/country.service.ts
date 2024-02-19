
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import {  Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';
  
// Importar aquí las interfaces necesarias
  
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  // URL base de la API de países
  private apiURL =  "https://restcountries.com/v3.1";

  // Opciones HTTP para las solicitudes
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Constructor
  constructor(private httpClient: HttpClient) { }
    
  // Método para obtener todos los países
  getAll(): Observable<any> {  
    return this.httpClient.get(this.apiURL + '/all/');
  }

  // Método para buscar países por capital
  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) 
    );
  }

  // Método para buscar países por nombre
  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) 
    );
  }

  // Método para buscar países por región
  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([]))
    );
  }

  // Método para buscar un país por su código alfa
  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiURL}/alpha/${code}`;
  
    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null)) 
      );
  }
}