import { Injectable } from '@angular/core';

@Injectable()
export class CardService {
    
    private cardsLetras: any[] = [
        {
            id: 0,
            imageId: "a.jpg",//a
            state: "default"
        },
        {
            id: 1,
            imageId: "b.svg",//b
            state: "default"
        },
        {
            id: 2,
            imageId: "c.jpg",//c
            state: "default"
        },
        {
            id: 3,
            imageId: "d.svg",//d
            state: "default"
        },
        {
            id: 4,
            imageId: "e.jpg",//e
            state: "default"
        },
        {
            id: 5,
            imageId: "f.jpg",//f
            state: "default"
        },
        {
            id: 6,
            imageId: "g.svg",//g
            state: "default"
        },
        {
            id: 7,
            imageId: "h.svg",//h
            state: "default"
        },
        {
            id: 8,
            imageId: "l.jpg",//L
            state: "default"
        },
        {
            id: 9,
            imageId: "m.jpg",//M
            state: "default"
        }
    ];

    private cardNumbers: any[] = [
        {
            id: 0,
            imageId: "0.jpg",//0
            state: "default"
        },
        {
            id: 1,
            imageId: "1.jpg",//1
            state: "default"
        },
        {
            id: 2,
            imageId: "2.jpg",//2
            state: "default"
        },
        {
            id: 3,
            imageId: "3.jpg",//3
            state: "default"
        },
        {
            id: 4,
            imageId: "4.jpg",//4
            state: "default"
        },
        {
            id: 5,
            imageId: "5.jpg",//5
            state: "default"
        },
        {
            id: 6,
            imageId: "6.jpg",//6
            state: "default"
        },
        {
            id: 7,
            imageId: "7.jpg",//7
            state: "default"
        },
        {
            id: 8,
            imageId: "8.jpg",//8
            state: "default"
        },
        {
            id: 9,
            imageId: "9.jpg",//9
            state: "default"
        },
    ]
    
    setStateDefault(tipo: string, numCards: number){
        let cartasParaDar;
        if(tipo === 'letras'){
            cartasParaDar = this.cardsLetras.sort(() => Math.random() - 0.5).slice(0, numCards);
        }else if(tipo === 'numeros'){
            cartasParaDar = this.cardNumbers.sort(() => Math.random() - 0.5).slice(0, numCards);
        }
        cartasParaDar.forEach(e => {
            e.state = 'default'
        });

        return cartasParaDar;
    }
}