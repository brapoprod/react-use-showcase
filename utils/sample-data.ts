import { Gender, User, Viking } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const vikingNames: Viking[] = [
  {name: 'Ake', translation: 'Forebear', gender: Gender.MALE},
  {name: 'Alva', translation: 'Female elf', gender: Gender.FEMALE},
  {name: 'Baako', translation: 'First born baby', gender: 'uni'},
  {name: 'Birger', translation: 'The one who helps', gender: Gender.MALE},
  {name: 'Brenna', translation: 'Sword', gender: Gender.FEMALE},
  {name: 'Carr', translation: 'From the westlands', gender: Gender.MALE},
  {name: 'Cuyler', translation: 'Bowman', gender: Gender.MALE},
  {name: 'Dagmar', translation: 'Maid of the day', gender: Gender.FEMALE},
  {name: 'Dusty', translation: 'Tough like a stone of Thor', gender: 'uni'},
  {name: 'Destin', translation: 'Determined', gender: Gender.MALE},
  {name: 'Eerika', translation: 'Ruling forever', gender: Gender.FEMALE},
  {name: 'Einar', translation: 'The one who fights alone', gender: Gender.MALE},
  {name: 'Freja', translation: 'Like a lady', gender: Gender.FEMALE},
  {name: 'Fritjof', translation: 'The one who steals pease', gender: Gender.MALE},
  {name: 'Gunvor', translation: 'Alert in war', gender: Gender.FEMALE},
  {name: 'Gudmund', translation: 'God is protecting', gender: Gender.MALE},
  {name: 'Halvar', translation: 'Protector of the rock', gender: Gender.MALE},
  {name: 'Helga', translation: 'Devine women', gender: Gender.FEMALE},
  {name: 'Inge', translation: 'Of Ing', gender: 'uni'},
  {name: 'Ingeborg', translation: 'Gods protection', gender: Gender.FEMALE},
  {name: 'Ingvar', translation: 'Ings army', gender: Gender.MALE},
  {name: 'Jorunn', translation: 'Loving horses', gender: Gender.FEMALE},
  {name: 'Jarl', translation: 'earl, nobleman', gender: Gender.MALE},
  {name: 'Kari', translation: 'Pure', gender: Gender.FEMALE},
  {name: 'Kirk', translation: 'church', gender: Gender.MALE},
  {name: 'Loki', translation: 'Trickster', gender: Gender.MALE},
  {name: 'Lagertha', translation: 'Shieldmaiden', gender: Gender.FEMALE},
  {name: 'Magnhild', translation: 'Powerful in battle', gender: Gender.FEMALE},
  {name: 'Manning', translation: 'Powerful and valiant', gender: Gender.MALE},
  {name: 'Nanna', translation: 'Courageous', gender: Gender.FEMALE},
  {name: 'Odin', translation: 'Fury', gender: Gender.MALE},
  {name: 'Olga', translation: 'Devine woman', gender: Gender.FEMALE},
  {name: 'Ragnar', translation: 'Giver of advice', gender: Gender.MALE},
  {name: 'Runa', translation: 'Secret tradition', gender: Gender.FEMALE},
  {name: 'Shelby', translation: 'From the farm of willows', gender: 'uni'},
  {name: 'Sigrid', translation: 'Marvelous victory', gender: Gender.FEMALE},
  {name: 'Sigurd', translation: 'Guiding the victory', gender: Gender.MALE},
  {name: 'Sven', translation: 'Boy', gender: Gender.MALE},
  {name: 'Thora', translation: 'Like a thunder', gender: Gender.FEMALE},
  {name: 'Thor', translation: 'God of thunder', gender: Gender.MALE},
  {name: 'Turid', translation: 'Good looking', gender: Gender.FEMALE},
  {name: 'Uffe', translation: 'Wolfman', gender: Gender.MALE},
  {name: 'Unn', translation: 'The beloved one', gender: 'uni'},
  {name: 'Vali', translation: 'Strong', gender: Gender.MALE},
  {name: 'Viggo', translation: 'Battle', gender: Gender.FEMALE},
  {name: 'Welch', translation: 'Foreign person', gender: Gender.MALE},
  {name: 'Ylva', translation: 'Female wolf', gender: Gender.FEMALE},
]