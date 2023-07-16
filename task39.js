let student = {
    "stu1": {
        "name": 'chetan',
        'course': 'bca',
        'duration': '3 year'
    },
    "stu2": {
        "name": 'rajdeep',
        'course': 'bca',
        'duration': '3 year'
    },
    "stu3": {
        "name": 'mohit',
        'course': 'btech',
        'duration': '4 year'
    }
}

for(const i in student){
    for ( const j in student[i]) {
        console.log(student[i][j]);
    }
}