import { Injectable } from '@angular/core';
import { Carta } from '../models/carta.model';

@Injectable({
    providedIn: 'root'
})
export class CartasService {

    private cartas: Carta[] = [
        { id: 1, nombre: 'La Vela', imagen: 'assets/cartas/LaVela.jpg', audio: 'assets/audios/LaVela.mp3' },
        { id: 2, nombre: 'El Pan De Muerto', imagen: 'assets/cartas/PanDeMuerto.jpg', audio: 'assets/audios/PanDeMuerto.mp3' },
        { id: 3, nombre: 'La Calaverita de Azucar', imagen: 'assets/cartas/CalaveraAzucar.jpg', audio: 'assets/audios/CalaveraAzucar.mp3' },
        { id: 4, nombre: 'La Tumba', imagen: 'assets/cartas/LaTumba.jpg', audio: 'assets/audios/LaTumba.mp3' },
        { id: 5, nombre: 'El Altar De Muertos', imagen: 'assets/cartas/Altardemuertos.jpg', audio: 'assets/audios/Altardemuertos.mp3' },
        { id: 6, nombre: 'El Cempasuchil', imagen: 'assets/cartas/cempasuchil.jpg', audio: 'assets/audios/cempasuchil.mp3' },

        { id: 7, nombre: 'La Veladora', imagen: 'assets/cartas/Veladora.jpg', audio: 'assets/audios/Veladora.mp3' },
        { id: 8, nombre: 'El Retrato', imagen: 'assets/cartas/Retrato.jpg', audio: 'assets/audios/Retrato.mp3' },
        { id: 9, nombre: 'La Muerte', imagen: 'assets/cartas/Muerte.jpg', audio: 'assets/audios/Muerte.mp3' },
        { id: 10, nombre: 'Las Flores', imagen: 'assets/cartas/Flores.jpg', audio: 'assets/audios/Flores.mp3' },
        { id: 11, nombre: 'El Rosario', imagen: 'assets/cartas/Rosario.jpg', audio: 'assets/audios/Rosario.mp3' },
        { id: 12, nombre: 'El Papel Picado', imagen: 'assets/cartas/Papel.jpg', audio: 'assets/audios/Papel.mp3' },

        { id: 13, nombre: 'El Tequila', imagen: 'assets/cartas/Tequila.jpg', audio: 'assets/audios/Tequila.mp3' },
        { id: 14, nombre: 'Los Juguetes', imagen: 'assets/cartas/Juguetes.jpg', audio: 'assets/audios/Juguetes.mp3' },
        { id: 15, nombre: 'El Mariachi', imagen: 'assets/cartas/Mariachi.jpg', audio: 'assets/audios/Mariachi.mp3' },
        { id: 16, nombre: 'La Cruz', imagen: 'assets/cartas/Cruz.jpg', audio: 'assets/audios/Cruz.mp3' },
        { id: 17, nombre: 'El Sombrero', imagen: 'assets/cartas/Sombrero.jpg', audio: 'assets/audios/Sombrero.mp3' },
        { id: 18, nombre: 'El Incienso', imagen: 'assets/cartas/Incienso.jpg', audio: 'assets/audios/Incienso.mp3' },

        { id: 19, nombre: 'El Agua', imagen: 'assets/cartas/Agua.jpg', audio: 'assets/audios/Agua.mp3' },
        { id: 20, nombre: 'El Cirio', imagen: 'assets/cartas/Cirio.jpg', audio: 'assets/audios/Cirio.mp3' },
        { id: 21, nombre: 'Los Tamales', imagen: 'assets/cartas/Tamales.jpg', audio: 'assets/audios/Tamales.mp3' },
        { id: 22, nombre: 'La Café', imagen: 'assets/cartas/Cafe.jpg', audio: 'assets/audios/Cafe.mp3' },
        { id: 23, nombre: 'El Mezcal', imagen: 'assets/cartas/Mezcal.jpg', audio: 'assets/audios/Mezcal.mp3' },
        { id: 24, nombre: 'El Chocolate Caliente', imagen: 'assets/cartas/Chocolate.jpg', audio: 'assets/audios/Chocolate.mp3' },

        { id: 25, nombre: 'La Sal', imagen: 'assets/cartas/Sal.jpg', audio: 'assets/audios/Sal.mp3' },
        { id: 26, nombre: 'El Mole', imagen: 'assets/cartas/Mole.jpg', audio: 'assets/audios/Mole.mp3' },
        { id: 27, nombre: 'La Fruta', imagen: 'assets/cartas/Fruta.jpg', audio: 'assets/audios/Fruta.mp3' },
        { id: 28, nombre: 'El Espejo', imagen: 'assets/cartas/Espejo.jpg', audio: 'assets/audios/Espejo.mp3' },
        { id: 29, nombre: 'El Copal', imagen: 'assets/cartas/Copal.jpg', audio: 'assets/audios/Copal.mp3' },
        { id: 30, nombre: 'El Guitarra', imagen: 'assets/cartas/Guitarra.jpg', audio: 'assets/audios/Guitarra.mp3' },
        // ...agrega las demás cartas
    ];

    getCartas(): Carta[] {
        return [...this.cartas];
    }

    barajear(cartas: Carta[]): Carta[] {
        return cartas.sort(() => Math.random() - 0.5);
    }
}
