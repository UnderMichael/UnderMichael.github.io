// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let filterArray = (targetArray, priceRange) => targetArray.filter(cours => {
    if (priceRange[0] === null) {
        return Math.max(...cours.prices) <= priceRange[1]
    }
    if (priceRange[1] === null) {
        return (Math.min(...cours.prices) ? Math.min(...cours.prices) : Math.max(...cours.prices)) >= priceRange[0]
    }
    return Math.min(...cours.prices) >= priceRange[0] && Math.max(...cours.prices) <= priceRange[1]
})
let sortedArray = (targetArray,priceRange) => filterArray(targetArray, priceRange).sort((a,b) => {
    if (Math.min(...b.prices) < Math.min(...a.prices)) {
        return -1
    }
    if (Math.min(...b.prices) > Math.min(...a.prices)) {
        return 1
    }
    if (Math.max(...b.prices) < Math.max(...a.prices)) {
        return -1
    }
    if (Math.max(...b.prices) > Math.max(...a.prices)) {
        return 1
    }
    return 0
})

console.log(filterArray(courses, requiredRange1))
console.log(sortedArray(courses, requiredRange1))
console.log(filterArray(courses, requiredRange2))
console.log(sortedArray(courses, requiredRange2))
console.log(filterArray(courses, requiredRange3))
console.log(sortedArray(courses, requiredRange3))




