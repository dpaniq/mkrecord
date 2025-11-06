import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-info',
  imports: [CommonModule, MatDivider],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;

        a {
          font-weight: 900;
        }

        h2 {
          font-weight: 600;
          font-size: 22px;
          text-align: center;
        }

        h5 {
          color: tomato;
          font-weight: 300;
          font-size: 16px;
          margin-bottom: 12px;
        }

        p {
          font-size: 14px;
        }

        & > div {
          padding: 20px;
          /*
          border-left: 1px solid whitesmoke;
          border-right: 1px solid whitesmoke;
          border-bottom: 1px solid whitesmoke;
          border-radius: 5px;
          box-shadow: 2px 2px 2px 0px whitesmoke;
          */
        }

        .regalias-container {
          .regalias {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 12px;
          }

          .regalia {
            margin: 15px;
            padding: 10px 15px;
            background-color: rgba(0, 0, 0, 0.6);
          }
        }

        .experiences-container {
          .experiences {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 12px;
          }

          .experience {
            margin: 15px;
            padding: 10px 15px;
            background-color: rgba(0, 0, 0, 0.6);
          }
        }
      }

      @media (max-width: 768px) {
        section {
          --fontWeight: 500;
          --gridGap: 0;
          position: relative;

          a {
            font-weight: var(--fontWeight);
          }

          h2 {
            font-weight: var(--fontWeight);
            text-shadow: 1px 1px 1px black;
          }

          h5 {
            color: tomato;
            font-weight: 300;
            font-size: 14px;
          }

          p {
            font-size: 14px;
          }

          .regalias-container {
            .regalias {
              display: grid;
              grid-template-columns: 1fr;
              gap: var(--gridGap);
            }

            .regalia {
              margin: 10px;
              padding: 10px 5px;
              background-color: rgba(0, 0, 0, 0.6);
            }
          }

          .experiences-container {
            .experiences {
              display: grid;
              grid-template-columns: 1fr;
              gap: var(--gridGap);
            }

            .experience {
              margin: 5px;
              padding: 10px 5px;
              background-color: rgba(0, 0, 0, 0.6);
            }
          }
        }
      }
    `,
  ],
  template: `
    <section>
      <div class="regalias-container">
        <h2>Regalias</h2>
        <br />
        <mat-divider />
        <br />
        <div class="regalias">
          @for (regalia of regalias; track regalia.subject) {
            <div class="regalia">
              <h5>{{ regalia.subject | uppercase }}</h5>
              <p>{{ regalia.text | lowercase }}</p>
            </div>
          }
        </div>
      </div>

      <div class="experiences-container">
        <h2>Experience</h2>
        <br />
        <mat-divider />
        <br />
        <div class="experiences">
          @for (exp of experiences; track exp.subject) {
            <div class="experience">
              <h5>{{ exp.subject | uppercase }}</h5>
              <p>{{ exp.text | lowercase }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class InfoComponent {
  readonly regalias = [
    {
      subject: 'Cinematography',
      text: 'Participation in the creation of more than 30 projects covering various genres, from short films to documentaries.',
    },
    {
      subject: 'Video Editing',
      text: 'Edited 20 films using advanced editing techniques to achieve high quality and cinematic style.',
    },
    {
      subject: 'Solo Expertise',
      text: 'Unique ability to work individually, from conceptualization to final editing.',
    },
  ];
  readonly experiences = [
    {
      subject: 'International Projects',
      text: 'First place at the Venice Film Festival.',
    },
    {
      subject: 'Corporate Filming',
      text: 'Successful participation in the filming of more than 10 corporate events.',
    },
    {
      subject: 'Individual Approach',
      text: 'Effective work from project idea to final editing - over 30 projects.',
    },
    {
      subject: 'Teamwork',
      text: 'Successful collaboration with a professional team in over 30 projects.',
    },
    {
      subject: 'Technologies',
      text: 'Use of a drone for unique video perspectives.',
    },
  ];
}
