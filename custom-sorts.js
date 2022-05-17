function ageSort(users)
{
  // Your code here
  return users.sort((a, b) => a.age - b.age)
}

function oddEvenSort(arr)
{
  // Your code here

  function comp(a, b)
  {

    if (a % 2 === 1 && b % 2 === 0) {

      return - 1

    }

    if (a % 2 === 0 && b % 2 === 1) {

      return 1
    }

    return a - b
  }


  return arr.sort(comp)

}

function validAnagrams(s, t)
{
  // Your code here

  if (!s.length === t.length) {

    return false
  } if (s.split("").sort().join("") === t.split("").sort().join("")) {

    return true
  }
  //change them to arr slit


  // sort them

  ///compare the arrays 

}

function reverseBaseSort(arr)
{
  // Your code here

  let sm = []
  let md = []
  let lg = []
  ///group them with there # 

  for (let num of arr) {

    if (num < 10) {
      sm.push(num)

    }
    if (num >= 10 && num < 100) {
      md.push(num)
    }

    if (num >= 100) {
      lg.push(num)
    }

  }
  //pair them with the same # put them in ascending order per pair

  // let arr = [...sm,...md,...lg]
  let sortSm = sm.sort()
  let sortMd = md.sort()
  let sortLg = lg.sort()
  let newArr = [...sortLg, ...sortMd, ...sortSm] //[]
  return newArr

  //connect all three arrays in a decending order 
}

function frequencySort(arr)
{
  // Your code here

  //lets make a map obj
  //add a val to each num based on the frequency
  //then sort the arr 

  let myMap = new Map()


  for (let num of arr) {

    myMap.set(num, (myMap.get(num) || 0) + 1)

  }

 

  return arr.sort((a, b) =>
  {

    if (myMap.get(a) === myMap.get(b)) {

      return b - a
    }

  console.log(myMap.get(a) - myMap.get(b))
    return myMap.get(a) - myMap.get(b)


  })

}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];