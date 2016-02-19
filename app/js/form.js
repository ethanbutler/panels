const panels = [
  {
    title: 'Favorite Color',
    text: 'Which of these is your favorite?',
    form: {
      type: 'radio',
      setState: 'favoriteColor',
      buttons: [
        {
          val: 'red',
          label: 'Red'
        },
        {
          val: 'green',
          label: 'Green'
        },
        {
          val: 'blue',
          label: 'Blue'
        }
      ]
    }
  },
  {
    title: 'Favorite NBA Team',
    text: 'Hint: enter "Golden State"',
    form: {
      type: 'input',
      setState: 'favoriteTeam'
    }
  },
  {
    title: 'Three Favorite Snack Foods',
    text: '(for when you\'re watching Golden State win.)'
  }
]

export default panels
