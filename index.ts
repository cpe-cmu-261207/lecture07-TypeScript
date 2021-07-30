/* hello ts */
function plus(a: number, b: number): number {
	return a + b
}
console.log( plus(1, 2))
// console.log( plus(1, 'eiei'))

/* variable */
let n : number = 10
const s : string = 'hello'
const b: boolean = true

console.log( s.length)
// console.log( n.length)

/* array */
const a: string[] = []
a.push('a') 
a.push('b')
console.log(a)
// a.push(true)

/*Exercise 1
  เขียนฟังก์ชัน input: n, output: [1,2,3,...,n]

  function fn ...

  ex: fn(3) -> [1,2,3]
  ex: fn(4) -> [1,2,3,4]
*/

function ex1(n: number): number[] {
	const output: number[] = []
	for(let i=1; i<=n; i++) output.push(i)
	return output
  }
console.log(ex1(5))

/* object type */
type Student = {
	name: string;
	age: number;
}

const student: Student = {
	name: 'Sam',
	age: 20
}

const students: Student[] = []
students.push(student)
students.push({name: 'Alice', age: 15})
// students.push({name: 'Alice', age: 15, gender: 'female'})

console.log(students)

/* union type */
type Gender = 'male' | 'female'
type Student = {
	name: string;
	age: number;
	gender: Gender;
}

const o: Student = {
	name: 'Same',
	age: 25,
	gender: 'female'
  }

const isMale = (o: Student): boolean => {
	return o.gender === 'male'
}
console.log( isMale(o))

// /* Excercise 2
// ประกาศ type ให้ object Hero โดยมี key ดังนี้
//  - class : เป็นได้ 3 อย่างคือ 'Warrior' หรือ 'Mage' หรือ 'Rogue'
//  - damage: ตัวเลข
//  - hp : ตัวเลข
//  - guildName : ชื่อ guild เป็นตัวอักษร หรือ null หากไม่มี guild
//  - items : Array ของ type Item
// Item มี key ดังนี้
//  - name : ตัวอักษร
//  - amount : ตัวเลข
// */

type Hero = {
	class: 'Warrior' | 'Mage' | 'Rogue';
	damage: number;
	hp: number;
	guildName: string | null;
	items: Item[]
}

type Item = {
	name: string; amount: number;
}

const hero1: Hero = {
	class: 'Warrior',
	damage: 10,
	hp: 100,
	guildName: null,
	items: [{ name: 'Healing Potion', amount: 10 }]
}

/* Ex.3 print คนที่มีอายุมากกว่าอายุเฉลี่ย*/

type Person = {
	name: string; age: number; gender: 'male' | 'female'
}

const persons: Person[] = [
	{
		name: "katsuya", age: 20,
		gender: 'male'
	},
	{
		name: "ricardoMilos", age: 18,
		gender: 'male'
	},
	{
		name: 'jody', age: 15,
		gender: 'male'
	}
]

const totalAge = persons.reduce((total, person) => total + person.age, 0)
const avgAge = totalAge / persons.length
console.log(
	persons.filter(person => person.age > avgAge)
)

/* any type */

let x: any = true
x = 1
x = 'asdfasdf'
x = {a: 1, b: 2}
console.log(x)

// no type checking 
function plus(a: number, b: number): number {
  return a + b
}
const x: any = {a: 1, b: 2}
console.log( plus(x, 10))

// no property & method checking ..
console.log(x[10])