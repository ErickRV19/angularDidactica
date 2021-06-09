import { Injectable } from '@angular/core';

@Injectable()
export class TarjetasLetrasServices {
    
    private objetotarjetas: any[] = [
        {
            id: 0,
            imageId: "t0N-LwOu0hg",//a
            state: "default"
        },
        {
            id: 1,
            imageId: "e81OmWcGaB0",//b
            state: "default"
        },
        {
            id: 2,
            imageId: "9onsKFX0inc",//c
            state: "default"
        },
        {
            id: 3,
            imageId: "T65KpFT2p-4",//f
            state: "default"
        },
        {
            id: 4,
            imageId: "xngZY8iEu-k",//e
            state: "default"
        },
        {
            id: 5,
            imageId: "NrrVQvow3kk",//m
            state: "default"
        },
        // {
        //     id: 6,
        //     imageId: "3xoBrrB4tAU",//i
        //     state: "default"
        // },
        // {
        //     id: 7,
        //     imageId: "YL3C6L_7lQQ",//p
        //     state: "default"
        // },
        // {
        //     id: 8,
        //     imageId: "zCz0FAVqbhI",//s
        //     state: "default"
        // },
        // {
        //     id: 9,
        //     imageId: "zXTNTzTcyBw",//l
        //     state: "default"
        // }
    ];

    gettarjetas(): any{
        return this.objetotarjetas;
    }
}