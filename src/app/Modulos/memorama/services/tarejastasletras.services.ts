import { Injectable } from '@angular/core';

@Injectable()
export class TarjetasLetrasServices {
    
    private objetotarjetas: any[] = [
        {
            id: 0,
            imageId: "t0N-LwOu0hg",
            state: "default"
        },
        {
            id: 1,
            imageId: "e81OmWcGaB0",
            state: "default"
        },
        {
            id: 2,
            imageId: "9onsKFX0inc",
            state: "default"
        },
        {
            id: 3,
            imageId: "T65KpFT2p-4",
            state: "default"
        },
        {
            id: 4,
            imageId: "xngZY8iEu-k",
            state: "default"
        },
        {
            id: 5,
            imageId: "NrrVQvow3kk",
            state: "default"
        },
        {
            id: 6,
            imageId: "R3_VhdZSk3U",
            state: "default"
        },
        {
            id: 7,
            imageId: "YL3C6L_7lQQ",
            state: "default"
        },
        {
            id: 8,
            imageId: "62Phjv4KUdo",
            state: "default"
        },
        {
            id: 9,
            imageId: "SjN3x8aqe-w",
            state: "default"
        }
    ];

    gettarjetas(): any{
        return this.objetotarjetas;
    }
}