import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() disabled = false;

  get classes(): string {
    // Couleur / hover
    let base = 'border transition rounded-md cursor-pointer ';
    let color = '';
    switch (this.variant) {
      case 'primary':
        color = ' border-black bg-black text-white hover:opacity-90';
        break;
      case 'secondary':
        color = ' text-gray-900 hover:bg-gray-100';
        break;
      case 'danger':
      color = ' text-red-600 hover:bg-red-100';
        break;
    }

    // Taille
    let sizeClass = '';
    switch (this.size) {
      case 'sm':
        sizeClass = 'px-3 py-1 text-sm';
        break;
      case 'md':
        sizeClass = 'px-4 py-2 text-sm';
        break;
      case 'lg':
        sizeClass = 'px-6 py-3 text-base';
        break;
    }

    return [base, color, sizeClass, this.disabled ? 'opacity-50 cursor-not-allowed' : ''].join(' ');
  }
}
