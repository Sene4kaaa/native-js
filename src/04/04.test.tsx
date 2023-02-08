test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]; //исходный массив

    /*  const predicate = (age: number) => {  //функция которя фильтрует
          return age > 90;
      }*/

    /*  const predicate = (age: number) => age > 90; //другой способ написания такой функции*/


    /*  const oldAges = ages.filter(predicate) // в oldAges отфильтрует тех кому больше 90
  */
    const oldAges = ages.filter(age => age > 90);//сразу predicate подставили в фильтр

    expect(oldAges.length).toBe(1); //длинна ожидается 1
    expect(oldAges[0]).toBe(100); //под 0 индексом ожидается 100

})

test('should take courses chipper 160', () => {
    const courses = [ //исходный массив
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

   /* const chipPredicate = (course: CourseType) => { //функция которая фильтрует и в пропсы берет типизацию для courses
        return course.price < 160;
    }*/

        /*const chipCourses = courses.filter(chipPredicate) //отфильтрует курсы которые стоят меньше 160*/

    const chipCourses = courses.filter(course => course.price < 160)// другой способ написания


        expect(chipCourses.length).toBe(2); //длинна ожидается 2
        expect(chipCourses[0].title).toBe('CSS'); //под 0 индексом ожидается заголов CSS
        expect(chipCourses[1].title).toBe('REACT'); //под 0 индексом ожидается заголов REACT
    }
)


test('get only completed tasks', () => {
        const tasks = [ //исходный массив
            {id: 1, title: 'Bread', isDone: false},
            {id: 2, title: 'Milk', isDone: true},
            {id: 3, title: 'Solt', isDone: false},
            {id: 4, title: 'Sugar', isDone: true},

        ]


        const completedTasks = tasks.filter(task => task.isDone )


        expect(completedTasks.length).toBe(2);
        expect(completedTasks[0].id).toBe(2);
        expect(completedTasks[1].id).toBe(4);
    }
)

test('get only uncompleted tasks', () => {
        const tasks = [ //исходный массив
            {id: 1, title: 'Bread', isDone: false},
            {id: 2, title: 'Milk', isDone: true},
            {id: 3, title: 'Solt', isDone: false},
            {id: 4, title: 'Sugar', isDone: true},

        ]


        const uncompletedTasks = tasks.filter(task => !task.isDone )


        expect(uncompletedTasks.length).toBe(2);
        expect(uncompletedTasks[0].id).toBe(1);
        expect(uncompletedTasks[1].id).toBe(3);
    }
)