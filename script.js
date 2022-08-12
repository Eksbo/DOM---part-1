'use script' ;
// let button = document.querySelector('#button');
// console.log(button);
// let p1 = document.querySelector('#elem1');
// let p2 = document.querySelector('#elem2');
// let p3 = document.querySelector('#elem3');

// console.log(p1);
// console.log(p2);
// console.log(p3);

//  Дан следующий HTML:
// {/* <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div> */}

// Получите ссылку на первый абзац из 
// дива с id, равным block. 
// let p = document.querySelector('#block p');
// console.log(p);


// Дан следующий HTML:
// <div class="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>

// Получите ссылку на 
// первый абзац из дива с классом block. 
// let p = document.querySelector('.block p');
// console.log(p);

// Дан следующий HTML:
// <p class="www">text</p>
// <p class="www">text</p>

// Получите ссылку на первый абзац с классом www. 
// let p = document.querySelector('.www');
// console.log(p);



// Даны 3 кнопки:
// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">

// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, 
// по клику на вторую - число 2, а по клику на третью - число 3. 

// let btn1 = document.querySelector('#button1') ;
// let btn2 = document.querySelector('#button2') ;
// let btn3 = document.querySelector('#button3') ;

// btn1.addEventListener('click', ()=>{ console.log(1)}) ;
// btn2.addEventListener('click', ()=>{ console.log(2)}) ;
// btn3.addEventListener('click', ()=>{ console.log(3)}) ;

// Дан следующий HTML код:
// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2">

// Даны следующие функции:
// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// }

// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, 
// а по клику на вторую - функция func2. 
// let btn1 = document.querySelector('#button1');
// let btn2 = document.querySelector('#button2');
// function func1() {
// 	console.log(1);
// }
// function func2() {
// 	console.log(2);
// }
// btn1.addEventListener('click',func1) ;
// btn2.addEventListener('click',func2) ;

// Даны 5 абзацев:
// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>

// Дана следующая функция:
// function func() {
// 	console.log('message');
// }

// Привяжите эту функцию ко всем 5-ти абзацам. 
// let p1 = document.querySelector('#elem1') ;
// let p2 = document.querySelector('#elem2') ;
// let p3 = document.querySelector('#elem3') ;
// let p4 = document.querySelector('#elem4') ;
// let p5 = document.querySelector('#elem5') ;

// function func() {
// 	console.log('message' );
// }
// p1.addEventListener('click' , func ) ;
// p2.addEventListener('click' , func  );
// p3.addEventListener('click' , func  );
// p4.addEventListener('click' , func  );
// p5.addEventListener('click' , func  );

// Дан абзац:
// <p id="elem">text</p>

// Даны следующие функции:
// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }

// Привяжите все эти функции к нашему абзацу. 
// let p = document.querySelector("#elem")
// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }
// p.addEventListener('click' , func1) ;
// p.addEventListener('click' , func2) ;

// Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение. 
//   <button class="btn"> massage</button>

// let btnMas = document.querySelector('.btn') ;
// btnMas.addEventListener('dblclick' , () => { console.log('Hello')}) ;

// Дана кнопка. По наведению на нее выведите какое-нибудь сообщение. 
// let btnMas = document.querySelector('.btn') ;
// btnMas.addEventListener('mouseover' , () => { console.log('Hello')}) ;

//  Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение. 
// let btnMas = document.querySelector('.btn') ;
// btnMas.addEventListener('mouseout' , () => { console.log('Hello')}) ;

// Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое. 
// let btnMas = document.querySelector('.btn') ;
// btnMas.addEventListener('mouseout' , () => { console.log('Bay')}) ;
// btnMas.addEventListener('mouseover' , () => { console.log('Hello')}) ;


// Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль. 
// let p = document.querySelector('.p_js') ;
// let btnMas = document.querySelector('.btn') ;

// btnMas.addEventListener('click' , () => {console.log(p.textContent) }) ;

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст. 
// let p = document.querySelector('.p_js') ;
// let btnMas = document.querySelector('.btn') ;

// btnMas.addEventListener('click' , () => {p.textContent = 'NEW TEXT'}) ;

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка.
//  По нажатию на кнопку выведите на экран сумму хранящихся чисел. 
// let p = document.querySelector('.p_js') ;
// let p1 = document.querySelector('.p_js1') ;
// let btnMas = document.querySelector('.btn') ;

// function searchSum(e)
// {
//     let sum = 0
// let arr = e.textContent.split('')
// for (let k = 0 ; k < arr.length ;k ++)
// {
//     if ( Number(arr[k])>0)
// { 
//     arr[k] = Number(arr[k]);
// }
// }
// for (i of arr)
// {
// if(typeof i !== 'string'){
//     sum += i ;
// }
// }
// return sum ;
// }

// let c = () => { 
// return console.log(searchSum(p) + searchSum(p1));
// }
// btnMas.addEventListener('click' , c );

// Даны три абзаца с числами, див, и кнопка. 
// По нажатию на кнопку запишите в текст дива сумму чисел. 

// let p = document.querySelector('.p_js') ;
// let p1 = document.querySelector('.p_js1') ;
// let p2 = document.querySelector('.p_js2') ;
// let logRes =document.querySelector('.div') ;
// let btnMas = document.querySelector('.btn') ;

// function sumElem(e) 
// {
//     let arr = e.textContent.split('') ;
//     let sum = 0 ;
//     for ( let k of arr){
//         sum += Number(k) ;
//     }
//     return sum ;
// }
// function sumRes () 
// {
//     let res = sumElem(p) + sumElem(p1) + sumElem(p2) ;

//     return logRes.textContent = res ;

// }

// btnMas.addEventListener('click' , sumRes );

// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте 
// к значению абзаца единицу и запишите полученное число обратно. 
// let p = document.querySelector('.p_js') ;
// let btnMas = document.querySelector('.btn') ;

// btnMas.addEventListener('click' , () => 
// { 
//     let sum = Number(p.textContent) ;
//     sum += 1 ;
//     return p.textContent = sum ;
// } );

// Дан абзац с текстом и кнопка.
//  По нажатию на кнопку запишите в конец текста абзаца восклицательный знак. 
// let p = document.querySelector('.p_js') ;
// let btnMas = document.querySelector('.btn') ;

// btnMas.addEventListener('click' , () => 
// { 

//     return p.textContent += '!!!' ;
// } );
