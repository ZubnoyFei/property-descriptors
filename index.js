'use strict'

const user = {
    name: 'Alex',
    surname: 'Smith',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
}

// Object.defineProperty(user,'birthday', {writable: false});
//
 console.log(Object.getOwnPropertyDescriptor(Math, 'PI')) //первый аргумент-это объект, который мы смотрим. Второй-это свойство, флаги которого мы хотим посмотреть
//
//
// Object.defineProperty(user,'name', {writable: false});/*первый аргумент-это объект, который мы смотрим. Второй-это свойство, флаги которого мы хотим посмотреть,
//  третий объект - объект с теми флагами, которые мы хотим модифицировать*/

//writable - флаг, который имеет булевый значения. Это значит, что он может перезаписываться
//enumerable - также булевый флаг. Есть стоит true, то свойство будет перечисляться в цифрах
//configurable - если true, то свойство можно удалить, а значения-изменить


// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});
//
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});// Таким образом метод showMyPublicData не попадает в переборку

for (let key in user) console.log(key);// В консоли выводятся как данные из объекта, так и функция. Чтобы в переборе не было метода, методу устанавливается нужный флаг


/*этот метод позволяет менять свойства скопом*/
Object.defineProperties(user, {
    name: {writable: false},
    surname:{}
})