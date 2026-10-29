import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';


export interface IPerson {
    id: string;
    name: string;
    phone: string;
    phoneSecondary?: string;
    checkPhone: boolean;
    birthDate: string;
    helper: boolean;
    city?: string;
    notes?: string;
}


@Service()
export class PersonService {

    private http = inject(HttpClient);
    private apiUrl = 'assets/products.json'; // أو مسار الـ API بتاعك

    // // تحويل الـ Observable إلى Promise عشان تشتغل بـ .then()
    // async getProducts(): Promise<IProduct[]> {
    //     return firstValueFrom(this.http.get<IProduct[]>(this.apiUrl));
    // }

    // getPersons() {
    //     let personsList = this.http.get<IPerson[]>(this.apiUrl);

    //     return personsList;
    // }


    getPersons(): IPerson[] {
        return [

            {
                id: '1',
                name: 'n1',
                phone: '01234567891',
                phoneSecondary: '01194578236',
                checkPhone: false,
                birthDate: '01/05/2003',
                helper: false,
                city: 'Aswan',
                notes: '',
            },
            {
                id: '2',
                name: 'n2',
                phone: '01239997891',
                phoneSecondary: '',
                checkPhone: true,
                birthDate: '08/11/1999',
                helper: false,
                city: 'Edfu',
                notes: 'vffvfvfvfvcccccccccccccccc',
            },
            {
                id: '3',
                name: 'n3',
                phone: '01237777891',
                phoneSecondary: '',
                checkPhone: false,
                birthDate: '10/12/2000',
                helper: true,
                city: 'Aswan',
                notes: '',
            },
            {
                id: '4',
                name: 'n1',
                phone: '01234567891',
                phoneSecondary: '',
                checkPhone: false,
                birthDate: '01/05/2003',
                helper: false,
                city: 'Aswan',
                notes: '',
            },
            {
                id: '5',
                name: 'n2',
                phone: '01239997891',
                phoneSecondary: '',
                checkPhone: true,
                birthDate: '08/11/1999',
                helper: false,
                city: 'Aswan',
                notes: 'vffvfvfvfvcccccccccccccccc',
            },
            {
                id: '6',
                name: 'n3',
                phone: '01237777891',
                phoneSecondary: '',
                checkPhone: false,
                birthDate: '10/12/2000',
                helper: true,
                city: 'Aswan',
                notes: '',
            },
            {
                id: '7',
                name: 'n1',
                phone: '01234567891',
                phoneSecondary: '',
                checkPhone: false,
                birthDate: '01/05/2003',
                helper: false,
                city: 'Aswan',
                notes: '',
            },
            {
                id: '8',
                name: 'n2',
                phone: '01239997891',
                phoneSecondary: '',
                checkPhone: true,
                birthDate: '08/11/1999',
                helper: false,
                city: 'Aswan',
                notes: 'vffvfvfvfvcccccccccccccccc',
            },
            {
                id: '9',
                name: 'n3',
                phone: '01237777891',
                phoneSecondary: '',
                checkPhone: false,
                birthDate: '10/12/2000',
                helper: true,
                city: 'Aswan',
                notes: '',
            },
            {
                id: '10',
                name: 'n1',
                phone: '01234567891',
                phoneSecondary: '',
                checkPhone: false,
                birthDate: '01/05/2003',
                helper: false,
                city: 'Aswan',
                notes: '',
            },
            {
                id: '11',
                name: 'n2',
                phone: '01239997891',
                phoneSecondary: '',
                checkPhone: true,
                birthDate: '08/11/1999',
                helper: false,
                city: 'Aswan',
                notes: 'vffvfvfvfvcccccccccccccccc',
            },
            {
                id: '12',
                name: 'n3',
                phone: '01237777891',
                phoneSecondary: '',
                checkPhone: false,
                birthDate: '10/12/2000',
                helper: true,
                city: 'Aswan',
                notes: '',
            }
        ];
    }

}
