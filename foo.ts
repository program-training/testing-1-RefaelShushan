export function len_str(str:string ):number{
    return str.length
}

export function palindrome(str:string ):boolean{
    const strArr : string[] = str .split('');
    const reversArr : string[]= strArr.reverse();
    return  strArr.join('') === reversArr.join('');
    
}

export function arrayNumber (num:number[]):number[]{
    return num.sort()
}

export function numRoot (num:number):number{
    return Math.sqrt(num)
}

export function arrayNumSum (num:number[]):number{
    let sam :number = 0
    num.forEach(i =>{
        sam+= i
    })
    return sam
}

interface User{
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

export async function fetchUser(user:number) {
    try{
    let userId = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
    let userData:User = await userId.json()
    if (!userData.name){
        throw new Error("IS NOT ID")
    }
    return userData

    }catch(Error){
        console.log (Error)
    }
}

function checkIsFibonacci(arr: number[]): boolean {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 1] + arr[i - 2] !== arr[i]) {
          throw new Error("IS NOT fibonacci");
        }
      }
    return true;
  }

export function fibonacci(arrayFibonacci:number[]):number {
    if (!checkIsFibonacci(arrayFibonacci)) {
        throw new Error("IS NOT fibonacci")
    }
    const num1 = arrayFibonacci.length -1 ;
    const num2 = num1 -1;
    const nextNum = arrayFibonacci [num1] + arrayFibonacci[num2]
    return nextNum
}

