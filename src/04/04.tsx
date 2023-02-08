const ages = [18, 20, 22, 1, 100, 90, 14]; //исходный массив

const predicate = (age: number) => {  //функция которя фильтрует
    return age > 90;
}

const oldAges = [100]; //массив который получили после фильтрации


//следующий пример

type CourseType = { //типизация для courses
    title: string
    price: number
}

const courses = [ //исходный массив
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

const chipPredicate = (course: CourseType) => { //функция которая фильтрует и в пропсы берет типизацию для courses
    return course.price < 160;
}

const chipCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150} //отфильтрованный массив где стоимость курсов меньше 160
];