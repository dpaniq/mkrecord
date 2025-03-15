import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [MatIconModule, RouterLink, RouterLinkActive, MatButtonToggleModule],
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 0;
        padding: 35px 0 !important;
        z-index: 9999;
      }

      nav {
        position: relative;
        top: 0;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: var(--color_whitesmoke);

        > ul {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 30px;
          align-items: center;

          li {
            color: var(--color_whitesmoke_darken_2);

            a {
              font-weight: 700;
              text-shadow: 1px 1px 0 rgb(0, 0, 0);
              text-align: center;

              &.active {
                color: tomato;

                /* border-bottom: 1px solid; */
                filter: none;
                border-bottom: 1px solid tomato;
                /* border-image: linear-gradient(
                0.25turn,
                rgba(56, 2, 155, 0),
                rgba(255, 99, 71, 0.7),
                rgba(56, 2, 155, 0)
              ); */
                /* border-image-slice: 1; */
              }
            }
          }
        }
      }
    `,
  ],
  template: `
    <nav>
      <ul>
        <li>
          <a
            class="page-header"
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            ariaCurrentWhenActive="page">
            Home
          </a>
        </li>
        <li>
          <a
            routerLink="/portfolio"
            routerLinkActive="active"
            ariaCurrentWhenActive="page">
            Portfolio
          </a>
        </li>

        <li>
          <a
            routerLink="/info"
            home
            routerLinkActive="active"
            ariaCurrentWhenActive="page">
            Info
          </a>
        </li>
        <li>
          <a
            routerLink="/contacts"
            routerLinkActive="active"
            ariaCurrentWhenActive="page">
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  `,
})
export class NavComponent {}
