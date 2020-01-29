const advance = {
    tagline: 'We think this policy might suit you best - though do choose another if you prefer that',

    button: [
        { id: 1, name: 'Basic', bgColor: 'grey' },
        { id: 2, name: 'Advanced', bgColor: 'yellow', radius: '20px 0 40px 0', },
        { id: 3, name: 'Superior', bgColor: 'grey' }
    ],

    content: [
        { title: 'What you pay', description: 'VND 1.2 trieu' },
        { title: 'Protection amount', description: 'VND 100 trieu' },
        { title: 'Insurer', description: 'Bao Minh Corporation' },
        { title: 'Amount of time you are covered', description: '1 year' }
    ],

    facilities: [
        { id: 1, src: require('./images/hospital.png'), title: 'Hospital costs', description: 'VND 3 million/ day, max. of VND 100 million' },
        { id: 2, src: require('./images/Scissors.png'), title: 'Surgery costs', description: 'VND 50 million/ year' },
        { id: 3, src: require('./images/heart.png'), title: 'Money in case of death', description: 'Max. of VND 100 million' },
        { id: 4, src: require('./images/disable.png'), title: 'Money in case total disability', description: 'Max of VND 100 million' },
        { id: 5, src: require('./images/money.png'), title: 'Money in case of partial disability', description: 'Max. of VND 50 million' },
        { id: 6, src: require('./images/stethoscope .png'), title: 'Doctor visit costs', description: 'VND 3 million/ year' }
    ]
}

export default advance;