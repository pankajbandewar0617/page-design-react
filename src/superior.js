const superior = {

    tagline: 'We have 3 policies for you to choose from - which best suits your needs?',

    button: [
        { id: 1, name: 'Basic', bgColor: 'grey', height: '90px' },
        { id: 2, name: 'Advanced', bgColor: 'grey', height: '90px' },
        { id: 3, name: 'Superior', bgColor: 'green', height: '108px', radius: '20px 0 40px 0' }
    ],

    content: [
        { title: 'What you pay', description: 'VND 1.2 trieu' },
        { title: 'Protection amount', description: 'VND 120 trieu' },
        { title: 'Insurer', description: 'Bao Minh Corporation' },
        { title: 'Amount of time you are covered', description: '1 year' }
    ],

    facilities: [
        { id: 1, src: require('./images/hospital.png'), title: 'Hospital costs', description: 'VND 4 million/ day, max. of VND 100 million' },
        { id: 2, src: require('./images/Scissors.png'), title: 'Surgery costs', description: 'VND 60 million/ year' },
        { id: 3, src: require('./images/heart.png'), title: 'Money in case of death', description: 'Max. of VND 100 million' },
        { id: 4, src: require('./images/disable.png'), title: 'Money in case total disability ?', description: 'Max of VND 100 million' },
        { id: 5, src: require('./images/money.png'), title: 'Money in case of partial disability ?', description: 'Max. of VND 50 million' },
        { id: 6, src: require('./images/stethoscope .png'), title: 'Doctor visit costs', description: 'VND 3 million/ year' },
        { id: 7, src: require('./images/tooth.png'), title: 'Dentist visit costs', description: 'VND 2 million/ year' }
    ]
}

export default superior;