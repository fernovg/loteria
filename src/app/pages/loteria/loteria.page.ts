import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CartasService } from 'src/app/core/services/cartas.service';
import { Carta } from 'src/app/core/models/carta.model';

@Component({
  selector: 'app-loteria',
  templateUrl: './loteria.page.html',
  styleUrls: ['./loteria.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoteriaPage implements OnInit {

  cartas: Carta[] = [];
  cartaActual?: Carta;
  cartasCantadas: Carta[] = [];
  indiceActual = 0;
  intervalo: any;
  jugando = false;
  pausado = false;
  juegoTerminado = false;

  audioContext: AudioContext | null = null;
  audio: HTMLAudioElement = new Audio();

  constructor(private cartasService: CartasService) { }

  ngOnInit() {
    this.resetear();
  }

  desbloquearAudio() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const buffer = this.audioContext.createBuffer(1, 1, 22050);
      const source = this.audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(this.audioContext.destination);
      source.start(0);
    }

    // 🔊 También reproduce un sonido silencioso para desbloquear la instancia
    this.audio.src = 'assets/audios/bienvenida.mp3'; // puedes usar un sonido corto o vacío
    this.audio.load();
    this.audio.play().catch(() => { }); // no importa si falla, ya desbloquea el canal
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  resetear() {
    this.cartas = this.cartasService.barajear(this.cartasService.getCartas());
    this.cartasCantadas = [];
    this.indiceActual = 0;
    this.cartaActual = undefined;
    this.jugando = false;
    this.pausado = false;
    clearInterval(this.intervalo);
  }

  async iniciarJuego() {
    this.desbloquearAudio();
    if (this.jugando && this.pausado) {
      // Si estaba pausado, simplemente reanuda
      this.pausado = false;
      this.reanudarIntervalo();
      return;
    }

    // Nueva partida
    this.jugando = true;
    this.pausado = false;
    this.juegoTerminado = false;

    // 🔊 Reproducir audio de bienvenida antes de empezar
    await this.reproducirBienvenida();

    // Después del audio de bienvenida, empieza el juego
    this.mostrarCarta();
    this.reanudarIntervalo();
  }

  reanudarIntervalo() {
    this.intervalo = setInterval(() => {
      this.mostrarCarta();
    }, 2500);
  }

  mostrarCarta() {
    if (this.indiceActual < this.cartas.length) {
      this.cartaActual = this.cartas[this.indiceActual];
      this.cartasCantadas.unshift(this.cartaActual);
      this.reproducirAudio(this.cartaActual.audio);
      this.indiceActual++;
    } else {
      this.terminarJuego();
    }
  }

  reproducirAudio(src?: string) {
    if (!src) {
      // 🔈 fallback usando SpeechSynthesis
      if (this.cartaActual) {
        const utter = new SpeechSynthesisUtterance(this.cartaActual.nombre);
        utter.lang = 'es-MX';
        window.speechSynthesis.speak(utter);
      }
      return;
    }

    this.audio.pause();
    this.audio.src = src;
    this.audio.load();

    this.audio.play().catch(err => {
      console.warn('Error reproduciendo audio:', err);
    });
  }

  pausarJuego() {
    if (this.jugando) {
      clearInterval(this.intervalo);
      this.pausado = true;
    }
  }

  terminarJuego() {
    clearInterval(this.intervalo);
    this.jugando = false;
    this.pausado = false;
    setTimeout(() => this.resetear(), 1000);
    this.juegoTerminado = true;
    const audio = new Audio('assets/audios/cierre.mp3');
    audio.play();
  }

  reiniciarJuego() {
    this.juegoTerminado = false;
    this.iniciarJuego(); // vuelve a iniciar desde cero
  }

  // 🔊 Nueva función: reproducir audio de bienvenida
  reproducirBienvenida(): Promise<void> {
    return new Promise((resolve) => {
      const audio = new Audio('assets/audios/bienvenida.mp3');
      audio.play();
      audio.onended = () => resolve(); // Espera a que termine el audio
      audio.onerror = () => resolve(); // Si falla el audio, continúa igual
    });
  }

}
