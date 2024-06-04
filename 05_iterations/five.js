// const coding = ["js","rb","py","java","cpp"];

// const values = coding.forEach((item) =>{
//     // console.log(item)
//     return item;
// });
// console.log(values);


const mynums=[1,2,3,4,5,6]

// const newnum=mynums.filter( (num)=>num > 4)

// const newnum = mynums.filter( (num) => {
//     return num > 4;
// })
// // // second method 

// const newnum = []

// mynums.forEach( (num) =>{
//     if(num >4){
//         newnum.push(num)
//     }
// })
// console.log(newnum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
 
    { title: 'Book Four', genre: 'Fantasy', publish: 2005, edition: 2010 },
    { title: 'Book Five', genre: 'Science Fiction', publish: 2012, edition: 2019 },
    { title: 'Book Six', genre: 'Biography', publish: 1978, edition: 2023 },
  
    { title: 'Book Seven', genre: 'Mystery', publish: 2018, edition: 2021 },
    { title: 'Book Eight', genre: 'Romance', publish: 2002, edition: 2015 },
    { title: 'Book Nine', genre: 'Self-Help', publish: 2010, edition: 2023 },
    { title: 'Book Ten', genre: 'Poetry', publish: 1965, edition: 2009 },
  ];

  const userbook = books.filter( (bk) => bk.genre === 'History')
  console.log(userbook);
