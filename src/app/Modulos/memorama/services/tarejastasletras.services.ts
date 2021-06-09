import { Injectable } from '@angular/core';

@Injectable()
export class TarjetasLetrasServices {
    
    private objetotarjetas: any[] = [
        {
            id: 0,
            imageId: "rfpSOlH1JlQ",
            state: "default"
        },
        {
            id: 1,
            imageId: "0W98bjFYNKM",
            state: "default"
        },
        {
            id: 2,
            imageId: "O5VBFeaf0gQ",
            state: "default"
        },
        {
            id: 3,
            imageId: "SFJz9q9EAZc",
            state: "default"
        },
        {
            id: 4,
            imageId: "vSNy_bWa5AE",
            state: "default"
        },
        {
            id: 5,
            imageId: "P3uJUQ62uXE",
            state: "default"
        },
        {
            id: 6,
            imageId: "6N-PvrURkZE",
            state: "default"
        },
        {
            id: 7,
            imageId: "kt0QS0FPyCc",
            state: "default"
        },
        {
            id: 8,
            imageId: "sD0y9djR-Jk",
            state: "default"
        },
        {
            id: 9,
            imageId: "PwQHfxo3Q2Y",
            state: "default"
        }
    ];

    gettarjetas(): any{
        return this.objetotarjetas;
    }
}