// SecondsInHours
//
// Create a function that takes a number of hours and returns the number of 
// seconds in those hours. 
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
function SecondsInHours(hours) {
    return hours * 3600

}



// MilesTravelled
//
// Create a function that takes a number representing speed in miles per hour,
// a duration in minutes, and returns the distance travelled in miles rounded
// *up* to the nearest whole mile. You can use the Math.ceil function to
// perform the rounding. You can assume only whole numbers will be provided
// to the function.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function MilesTravelled(speed, minutes) {
    const hoursTravelled = minutes / 60
    return Math.ceil(speed * hoursTravelled)

}



// KilometersToMiles
//
// Create a function that takes a number of kilometers and converts it to miles. 
// For this task assume there are exactly 1.6 kilometers in a mile. The returned 
// mile distance should be rounded to the nearest mile. You can  use the Math.round
// function to do this.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function KilometersToMiles(kilometerNumber) {
    let mileDistance = kilometerNumber / 1.6
    return Math.round(mileDistance)
}



// MakeSentence
//
// Create a function that takes a string and returns the same string with the 
// first letter capitalized and a full stop added on to the end. If the string 
// already ends with a full stop, question mark (?) or an exclamation mark(!) 
// then a full stop should not be added.
//
// You may need to the use `String.substring` method.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function MakeSentence(string) {
    let stringFirstCapitalize = string.charAt(0).toUpperCase()
    let lastcharacter = string.charAt(string.length - 1)
    if (lastcharacter !== '.' && lastcharacter !== '?' && lastcharacter !== '!') {
        return stringFirstCapitalize + string.substring(1) + '.'
    } else

        return stringFirstCapitalize + string.substring(1)
}



// FileExtension
//
// Create a function that takes a filename as a string and returns the file extension
// - i.e. `image.png` should return `png`. If the file has no extension then an empty
// string should be returned. You may need to the use `String.substring` method and
// the `String.lastIndexOf` method.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function FileExtension(string) {
    let lastIndex = string.lastIndexOf(".")
    let extension = string.substring(lastIndex + 1)
    if (lastIndex < 0) {
        return ''
    } else {
        return extension
    }
}



// Range
//
// Create a function that takes an array of numbers and returns the difference 
// between the highest and lowest numbers in the array. You can assume the array
// will always contain at least 1 number (it will never be empty)
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function Range(numbers) {
    let highestNumber = Math.max(...numbers)
    let lowestNumber = Math.min(...numbers)
    let difference = highestNumber - lowestNumber
    return difference
}

// CheckTransactions
//
// Create a function that checks if a list of banking transactions is valid for 
// a given account. 
//
// The function should accept 3 arguments. The first is an array containing a 
// list of transactions to apply to the account balance. Positive numbers are 
// deposits and negative numbers are withdrawals. The second argument is the 
// account starting balance and the third is the account overdraft. The function
// should return false if applying the list of transactions causes the account
// balance to go below the overdraft value at any point.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function checkTransactions(transactions, balance, overdraft) {
    for (let i = 0; i < transactions.length; i++) {
        let transaction = transactions[i]
        balance = balance + transaction

        if (balance < -overdraft)
            return false
    }
    return true
}


// FilmsInGenre
//
// Create a function that takes an array of film objects, a film genre, and returns
// an array of film names that match the supplied genre. Each film object contains a 
// `name` key that contains the film name and a 'genre' key that contains an array 
// of strings describing what genres the film belongs to. See the spec file for
// example data.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function filmsInGenre(film, genre) {
    let filmname = []
    for (let i = 0; i < film.length; i++) {
        let films = film[i]
        if (films.genres.includes(genre)) {
            filmname.push(films.name)
        }

    }
    return filmname

}



// TODO: change undefined to be the name of the functions you defined
module.exports = {
    //SecondsInHours
    a: SecondsInHours,

    //MilesTravelled,
    b: MilesTravelled,

    //KilometersToMiles,
    c: KilometersToMiles,

    //MakeSentence
    d: MakeSentence,

    //FileExtension
    e: FileExtension,

    //Range
    f: Range,

    //CheckTransactions
    g: checkTransactions,

    //FilmsInGenre
    h: filmsInGenre,
}