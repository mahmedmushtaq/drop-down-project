// data

export const options = [
  { id: 1, text: 'abcsdkfljs' },
  { id: 2, text: 'def' },
  { id: 3, text: 'ghi' },
  { id: 4, text: 'jkl' },
];

// second options depend upon 1st options

export const linkedOptions = [
  {
    id: 1,
    text: 'first option is selected',
    linkedId: 1,
  },
  {
    id: 2,
    text: '1st option 2nd part',
    linkedId: 1,
  },

  {
    id: 3,
    text: '1st option 3rd part',
    linkedId: 1,
  },
  {
    id: 4,
    text: '1st option 4th part',
    linkedId: 1,
  },

  {
    id: 5,
    text: '2nd option is selected',
    linkedId: 2,
  },
  {
    id: 6,
    text: '2nd option 2nd part',
    linkedId: 2,
  },

  {
    id: 7,
    text: '2nd option 3rd part',
    linkedId: 2,
  },

  {
    id: 8,
    text: 'third option is selected',
    linkedId: 3,
  },
  {
    id: 9,
    text: 'third option 2nd part',
    linkedId: 3,
  },

  {
    id: 10,
    text: '4th option 1st part',
    linkedId: 4,
  },
];
