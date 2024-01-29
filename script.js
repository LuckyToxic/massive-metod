let num = [1,2,3,4,5]

num.push(6)

console.log(num)


num.pop()

console.log(num)

let fruits = ['Апельсин','Груша','Ананас']

fruits.shift()

console.log(fruits)

fruits.unshift('Кокос')

console.log(fruits)

let numArr = [4,5,8,2,5,1]

console.log(numArr.slice(1,5))

console.log(fruits.indexOf('Ананас'))

let books = [{title:'Пересмешник',author:'Алексей Пехов',year:2009},                  
             {title:'Маленький принц',author:'Ануан де Сент-Экзюпери',year:1943},
             {title:'Алхимик',author:'Пауло Коэльо',year:1988}]

let someBook = books.filter(item => item.year < 2000)

console.log(someBook)

let calc = numArr.map(item => item * 2)

console.log(calc)

let join = fruits.join('=')

console.log(join)

console.log(numArr.reverse())

console.log(num.reduce((acc,cur) =>  acc + cur))

console.log(fruits.every((x) => x ='string'))

console.log(books.some((title) => title = 'Пересмешник'))

num.splice(2,2,8,9)

console.log(num)

console.log(fruits.sort())

fruits.forEach(console.log)

let numDiff = numArr.filter(item => item % 2 == 0)

console.log(numDiff)

let first = fruits.map((fruit) => fruit[0])

console.log(first)

let find = books.find((author) => author = 'Алексей Пехов')

console.log(find)