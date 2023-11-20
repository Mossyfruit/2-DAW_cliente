export {}

interface Address{
    calle: string,
    pais: string,
    ciudad: string
}

interface SuperHero{
    name: string,
    age: number,
    address: Address
    showAdress:() => string,
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle:'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAdress() {
        return this.name + ', '+ this.address.ciudad + ', ' + this.address.calle + ', ' + this.address.pais ;
    }
}

const address = superHeroe.showAdress();
console.log(address);