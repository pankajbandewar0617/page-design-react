const basic = {
    tagline: 'We have 3 policies for you to choose from - which best suits your needs?',

    button: [
        { id: 1, name: 'Basic', bgColor: 'cyan', radius: '20px 0 40px 0' },
        { id: 2, name: 'Advanced', bgColor: 'grey' },
        { id: 3, name: 'Superior', bgColor: 'grey' }
    ],

    content: [
        { title: 'What you pay', description: 'VND 800 ngan' },
        { title: 'Protection amount', description: 'VND 80 trieu' },
        { title: 'Insurer', description: 'Bao Minh Corporation' },
        { title: 'Amount of time you are covered', description: '1 year' }
    ],

    facilities: [
        { id: 1, src: require('./images/hospital.png'), title: 'Hospital costs', description: 'VND 2 million/ day, max. of VND 80 million' },
        { id: 2, src: require('./images/Scissors.png'), title: 'Surgery costs', description: 'VND 40 million/ year' },
        { id: 3, src: require('./images/heart.png'), title: 'Money in case of death', description: 'Max. of VND 80 million' },
        { id: 4, src: require('./images/disable.png'), title: 'Money in case total disability', description: 'Max of VND 80 million' },
    ]
}

export default basic;