import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from '../services/icon.service';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, MatButtonToggleModule],
  providers: [IconService],
  styles: [
    `
      // @import '../../styles/colors.css';

      :host {
        z-index: 100;
      }

      footer {
        position: fixed;
        padding: 0 0 60px;
        width: 100%;
        bottom: 0;
        left: 0;
        text-align: center;
        /* display: grid;
    grid-template-columns: 350px 350px; */
        justify-content: center;

        .logotype {
          mat-icon {
            width: 150px;
            height: 100px;
          }
        }

        p {
          padding: 5px 0;
          font-size: 12px;
          color: var(--color_whitesmoke_darken_1);

          .brand {
            color: tomato;
            font-weight: 300;
          }

          &.fullname {
            text-transform: uppercase;
            font-weight: 900;
          }

          a {
            font-weight: 300;
            color: var(--color_whitesmoke_darken_2);

            &:hover {
              color: tomato;
            }
          }
        }

        .social {
          .social-group {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: rgb(214, 85, 62);
            padding: 10px;
            font-weight: 300;
          }
        }

        a:hover ::ng-deep mat-icon svg {
          fill: tomato;
        }
      }
    `,
  ],
  template: `
    <footer>
      <div>
        <p class="fullname">Marek Kondratjev</p>
        <div class="social">
          <a href="#" target="_blank" class="social-group">
            <mat-icon svgIcon="telegram"></mat-icon>
          </a>
          <a href="#" target="_blank" class="social-group">
            <mat-icon svgIcon="youtube"></mat-icon>
          </a>
          <a href="#" target="_blank" class="social-group">
            <mat-icon svgIcon="facebook"></mat-icon>
          </a>
          <a href="#" target="_blank" class="social-group">
            <mat-icon svgIcon="instagram"></mat-icon>
          </a>
          <a href="#" target="_blank" class="social-group">
            <mat-icon svgIcon="linkedin"></mat-icon>
          </a>
          <a href="#" target="_blank" class="social-group">
            <mat-icon svgIcon="gmail"></mat-icon>
          </a>
        </div>
        <p>
          Copyright ©
          <span class="brand">MK Rec Studio</span>
          ‒ 2024
        </p>
        <p>
          Developed by
          <span>
            <a href="#" target="_blank"> &#64;dpaniq </a>
            /
            <a href="#" target="_blank"> &#64;Nastya </a>
            /
            <a href="#" target="_blank"> &#64;mkrec_studio </a>
            /
            <a href="#" target="_blank"> &#64;Valletta </a>
          </span>
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
