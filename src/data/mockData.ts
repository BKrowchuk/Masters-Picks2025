import { GolferScore, PoolMember } from '../types';
import responses from './responses.csv?raw';

export const mockGolfers: GolferScore[] = [
  // Group 1 (Top 5)
  {
    id: '1',
    name: 'Scottie Scheffler',
    group: 1,
    rounds: { round1: -7, round2: -2, round3: -4, round4: -3 },
    total: -16,
    position: 1,
    madeCut: true
  },
  {
    id: '2',
    name: 'Rory McIlroy',
    group: 1,
    rounds: { round1: -4, round2: -3, round3: -5, round4: -2 },
    total: -14,
    position: 2,
    madeCut: true
  },
  {
    id: '3',
    name: 'Ludvig Aberg',
    group: 1,
    rounds: { round1: -3, round2: -2, round3: -3, round4: -2 },
    total: -10,
    position: 4,
    madeCut: true
  },
  {
    id: '4',
    name: 'Xander Schauffele',
    group: 1,
    rounds: { round1: -3, round2: -2, round3: -3, round4: -2 },
    total: -10,
    position: 5,
    madeCut: true
  },
  {
    id: '5',
    name: 'Colin Morikawa',
    group: 1,
    rounds: { round1: -3, round2: -2, round3: -3, round4: -2 },
    total: -10,
    position: 6,
    madeCut: true
  },

  // Group 2 (6-15)
  {
    id: '6',
    name: 'Jon Rahm',
    group: 2,
    rounds: { round1: -3, round2: -4, round3: -2, round4: -4 },
    total: -13,
    position: 3,
    madeCut: true
  },
  {
    id: '7',
    name: 'Viktor Hovland',
    group: 2,
    rounds: { round1: -3, round2: -2, round3: -3, round4: -2 },
    total: -10,
    position: 7,
    madeCut: true
  },
  {
    id: '8',
    name: 'Justin Thomas',
    group: 2,
    rounds: { round1: -2, round2: -3, round3: -4, round4: -2 },
    total: -11,
    position: 8,
    madeCut: true
  },
  {
    id: '9',
    name: 'Brooks Koepka',
    group: 2,
    rounds: { round1: -2, round2: -3, round3: -3, round4: -2 },
    total: -10,
    position: 9,
    madeCut: true
  },

  // Group 3 (16-30)
  {
    id: '10',
    name: 'Patrick Cantlay',
    group: 3,
    rounds: { round1: -2, round2: -3, round3: -4, round4: -2 },
    total: -11,
    position: 10,
    madeCut: true
  },
  {
    id: '11',
    name: 'Keegan Bradley',
    group: 3,
    rounds: { round1: -3, round2: -2, round3: -3, round4: -1 },
    total: -9,
    position: 11,
    madeCut: true
  },
  {
    id: '12',
    name: 'Sepp Straka',
    group: 3,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 12,
    madeCut: true
  },
  {
    id: '13',
    name: 'Tommy Fleetwood',
    group: 3,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 13,
    madeCut: true
  },
  {
    id: '14',
    name: 'Shane Lowry',
    group: 3,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 14,
    madeCut: true
  },

  // Group 4 (31-50)
  {
    id: '15',
    name: 'Bryson DeChambeau',
    group: 4,
    rounds: { round1: -3, round2: -2, round3: -3, round4: -1 },
    total: -9,
    position: 15,
    madeCut: true
  },
  {
    id: '16',
    name: 'Tyrrell Hatton',
    group: 4,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 16,
    madeCut: true
  },
  {
    id: '17',
    name: 'Corey Conners',
    group: 4,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 17,
    madeCut: true
  },
  {
    id: '18',
    name: 'Billy Horschel',
    group: 4,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 18,
    madeCut: true
  },

  // Group 5 (51-75)
  {
    id: '19',
    name: 'Min Woo Lee',
    group: 5,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 19,
    madeCut: true
  },
  {
    id: '20',
    name: 'Akshay Bhatia',
    group: 5,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 20,
    madeCut: true
  },
  {
    id: '21',
    name: 'Thomas Detry',
    group: 5,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 21,
    madeCut: true
  },
  {
    id: '22',
    name: 'Cameron Smith',
    group: 5,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 22,
    madeCut: true
  },
  {
    id: '23',
    name: 'Sahith Theegala',
    group: 5,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 23,
    madeCut: true
  },

  // Group 6 (76-100)
  {
    id: '24',
    name: 'Tom Kim',
    group: 6,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 24,
    madeCut: true
  },
  {
    id: '25',
    name: 'Nick Taylor',
    group: 6,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 25,
    madeCut: true
  },
  {
    id: '26',
    name: 'Aaron Rai',
    group: 6,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 26,
    madeCut: true
  },
  {
    id: '27',
    name: 'Lucas Glover',
    group: 6,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 27,
    madeCut: true
  },
  {
    id: '28',
    name: 'J.J. Spaun',
    group: 6,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 28,
    madeCut: true
  },
  {
    id: '29',
    name: 'Patrick Reed',
    group: 6,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 29,
    madeCut: true
  },

  // Group 7 (101-125)
  {
    id: '30',
    name: 'Tony Finau',
    group: 7,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 30,
    madeCut: true
  },
  {
    id: '31',
    name: 'Byeong Hun An',
    group: 7,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 31,
    madeCut: true
  },
  {
    id: '32',
    name: 'Jason Day',
    group: 7,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 32,
    madeCut: true
  },
  {
    id: '33',
    name: 'Harris English',
    group: 7,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 33,
    madeCut: true
  },
  {
    id: '34',
    name: 'Sam Burns',
    group: 7,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 34,
    madeCut: true
  },

  // Group 8 (126-150)
  {
    id: '35',
    name: 'Justin Rose',
    group: 8,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 35,
    madeCut: true
  },
  {
    id: '36',
    name: 'Stephen Jaeger',
    group: 8,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 36,
    madeCut: true
  },
  {
    id: '37',
    name: 'Denny McCarthy',
    group: 8,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 37,
    madeCut: true
  },
  {
    id: '38',
    name: 'Max Greyserman',
    group: 8,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 38,
    madeCut: true
  },
  {
    id: '39',
    name: 'Taylor Pendrith',
    group: 8,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 39,
    madeCut: true
  },

  // Group 9 (151-175)
  {
    id: '40',
    name: 'Brian Harman',
    group: 9,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 40,
    madeCut: true
  },
  {
    id: '41',
    name: 'J.T. Poston',
    group: 9,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 41,
    madeCut: true
  },
  {
    id: '42',
    name: 'Daniel Berger',
    group: 9,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 42,
    madeCut: true
  },
  {
    id: '43',
    name: 'Nicolas Echavarria',
    group: 9,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 43,
    madeCut: true
  },
  {
    id: '44',
    name: 'Davis Thompson',
    group: 9,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 44,
    madeCut: true
  },

  // Group 10 (176-200)
  {
    id: '45',
    name: 'Tom Hoge',
    group: 10,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 45,
    madeCut: true
  },
  {
    id: '46',
    name: 'Rasmus Hojgaard',
    group: 10,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 46,
    madeCut: true
  },
  {
    id: '47',
    name: 'Christiaan Bezuidenhout',
    group: 10,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 47,
    madeCut: true
  },
  {
    id: '48',
    name: 'Michael Kim',
    group: 10,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 48,
    madeCut: true
  },
  {
    id: '49',
    name: 'Matthieu Pavon',
    group: 10,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 49,
    madeCut: true
  },

  // Group 11 (201-225)
  {
    id: '50',
    name: 'Will Zalatoris',
    group: 11,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 50,
    madeCut: true
  },
  {
    id: '51',
    name: 'Cameron Young',
    group: 11,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 51,
    madeCut: true
  },
  {
    id: '52',
    name: 'Joe Highsmith',
    group: 11,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 52,
    madeCut: true
  },
  {
    id: '53',
    name: 'Cameron Davis',
    group: 11,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 53,
    madeCut: true
  },

  // Group 12 (226-250)
  {
    id: '54',
    name: 'Jordon Speith',
    group: 12,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 54,
    madeCut: true
  },
  {
    id: '55',
    name: 'Max Homa',
    group: 12,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 55,
    madeCut: true
  },
  {
    id: '56',
    name: 'Nicolai Hojgaard',
    group: 12,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 56,
    madeCut: true
  },
  {
    id: '57',
    name: 'Matt Fitzpatrick',
    group: 12,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 57,
    madeCut: true
  },

  // Group 13 (251-275)
  {
    id: '58',
    name: 'Joaquin Niemann',
    group: 13,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 58,
    madeCut: true
  },
  {
    id: '59',
    name: 'Rafael Campos',
    group: 13,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 59,
    madeCut: true
  },
  {
    id: '60',
    name: 'Patton Kizire',
    group: 13,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 60,
    madeCut: true
  },
  {
    id: '61',
    name: 'Adam Schenk',
    group: 13,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 61,
    madeCut: true
  },
  {
    id: '62',
    name: 'Davis Riley',
    group: 13,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 62,
    madeCut: true
  },

  // Group 14 (276-300)
  {
    id: '63',
    name: 'Phil Mickelson',
    group: 14,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 63,
    madeCut: true
  },
  {
    id: '64',
    name: 'Charl Schwartzel',
    group: 14,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 64,
    madeCut: true
  },
  {
    id: '65',
    name: 'Zach Johnson',
    group: 14,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 65,
    madeCut: true
  },
  {
    id: '66',
    name: 'Dustin Johnson',
    group: 14,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 66,
    madeCut: true
  },
  {
    id: '67',
    name: 'Danny Willett',
    group: 14,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 67,
    madeCut: true
  },
  {
    id: '68',
    name: 'Sergio Garcia',
    group: 14,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 68,
    madeCut: true
  },

  // Group 15 (301+)
  {
    id: '69',
    name: 'Vijay Singh',
    group: 15,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 69,
    madeCut: true
  },
  {
    id: '70',
    name: 'Bernhard Langer',
    group: 15,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 70,
    madeCut: true
  },
  {
    id: '71',
    name: 'Justin Hastings (A)',
    group: 15,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 71,
    madeCut: true
  },
  {
    id: '72',
    name: 'Bubba Watson',
    group: 15,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 72,
    madeCut: true
  },
  {
    id: '73',
    name: 'Kevin Yu',
    group: 15,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 73,
    madeCut: true
  },
  {
    id: '74',
    name: 'Angel Cabrera',
    group: 15,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 74,
    madeCut: true
  },
  {
    id: '75',
    name: 'Hiroshi Tai (A)',
    group: 15,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 75,
    madeCut: true
  },
  {
    id: '76',
    name: 'Evan Beck (A)',
    group: 15,
    rounds: { round1: -2, round2: -3, round3: -2, round4: -1 },
    total: -8,
    position: 76,
    madeCut: true
  },
  {
    id: '77',
    name: 'Fred Couples',
    group: 15,
    rounds: { round1: -3, round2: -2, round3: -2, round4: -1 },
    total: -8,
    position: 77,
    madeCut: true
  }
];

// Helper function to get best 4 players for a pool member
function getBestFourPlayers(picks: GolferScore[]): GolferScore[] {
  return picks
    .sort((a, b) => a.total - b.total)
    .slice(0, 4);
}

// Helper function to calculate best four scores for a round
// function calculateBestFourForRound(picks: GolferScore[], roundKey: 'round1' | 'round2' | 'round3' | 'round4'): number {
//   const bestFour = getBestFourPlayers(picks);
//   return bestFour
//     .map(golfer => golfer.rounds[roundKey] || 0)
//     .reduce((sum, score) => sum + score, 0);
// }

// Helper function to calculate best four total
function calculateBestFourTotal(picks: GolferScore[]): number {
  return getBestFourPlayers(picks)
    .reduce((sum, golfer) => sum + golfer.total, 0);
}

// Helper function to check if a pool member is cut
function isPoolMemberCut(picks: GolferScore[]): boolean {
  const playersWhoMadeCut = picks.filter(golfer => golfer.madeCut).length;
  return playersWhoMadeCut < 4;
}

// Calculate cumulative scores up to a specific round
function calculateCumulativeScore(picks: GolferScore[], roundKey: 'round1' | 'round2' | 'round3' | 'round4'): number {
  const bestFour = getBestFourPlayers(picks);
  let total = 0;
  
  // Add up scores for all rounds up to and including the specified round
  if (roundKey === 'round1') {
    total = bestFour.reduce((sum, golfer) => sum + (golfer.rounds.round1 || 0), 0);
  } else if (roundKey === 'round2') {
    total = bestFour.reduce((sum, golfer) => sum + (golfer.rounds.round1 || 0) + (golfer.rounds.round2 || 0), 0);
  } else if (roundKey === 'round3') {
    total = bestFour.reduce((sum, golfer) => sum + (golfer.rounds.round1 || 0) + (golfer.rounds.round2 || 0) + (golfer.rounds.round3 || 0), 0);
  } else if (roundKey === 'round4') {
    total = bestFour.reduce((sum, golfer) => sum + (golfer.rounds.round1 || 0) + (golfer.rounds.round2 || 0) + (golfer.rounds.round3 || 0) + (golfer.rounds.round4 || 0), 0);
  }
  
  return total;
}

// Calculate positions based on cumulative scores up to a specific round
function calculateCumulativePositions(poolMembers: { id: string; picks: GolferScore[] }[], roundKey: 'round1' | 'round2' | 'round3' | 'round4'): { [key: string]: number } {
  const cumulativeScores = poolMembers.map(member => ({
    id: member.id,
    score: calculateCumulativeScore(member.picks, roundKey)
  }));
  
  cumulativeScores.sort((a, b) => a.score - b.score);
  
  const positions: { [key: string]: number } = {};
  cumulativeScores.forEach((score, index) => {
    positions[score.id] = index + 1;
  });
  
  return positions;
}

// Calculate all round positions for a pool member
function calculateAllRoundPositions(poolMembers: { id: string; picks: GolferScore[] }[]): { [key: string]: { round1: number; round2: number; round3: number; round4: number; current: number } } {
  const positions: { [key: string]: { round1: number; round2: number; round3: number; round4: number; current: number } } = {};
  
  // Calculate positions for each round based on cumulative scores
  const round1Positions = calculateCumulativePositions(poolMembers, 'round1');
  const round2Positions = calculateCumulativePositions(poolMembers, 'round2');
  const round3Positions = calculateCumulativePositions(poolMembers, 'round3');
  const round4Positions = calculateCumulativePositions(poolMembers, 'round4');
  
  // Calculate current positions based on best 4 total scores
  const currentScores = poolMembers.map(member => ({
    id: member.id,
    score: calculateBestFourTotal(member.picks)
  }));
  
  currentScores.sort((a, b) => a.score - b.score);
  
  const currentPositions: { [key: string]: number } = {};
  currentScores.forEach((score, index) => {
    currentPositions[score.id] = index + 1;
  });
  
  // Combine all positions for each pool member
  poolMembers.forEach(member => {
    positions[member.id] = {
      round1: round1Positions[member.id],
      round2: round2Positions[member.id],
      round3: round3Positions[member.id],
      round4: round4Positions[member.id],
      current: currentPositions[member.id]
    };
  });
  
  return positions;
}

// Function to find a golfer in mockGolfers by name
const findGolferByName = (name: string): GolferScore | undefined => {
  const golfer = mockGolfers.find(golfer => golfer.name === name);
  if (!golfer) {
    console.warn(`Golfer not found: ${name}`);
  }
  return golfer;
};

// Function to read and parse CSV file
const parseCSV = (csvText: string): Omit<PoolMember, 'bestFourTotal' | 'roundPositions' | 'isCut'>[] => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',');
  const poolMembers: Omit<PoolMember, 'bestFourTotal' | 'roundPositions' | 'isCut'>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    if (values.length === headers.length) {
      const member: Omit<PoolMember, 'bestFourTotal' | 'roundPositions' | 'isCut'> = {
        id: i.toString(),
        name: values[0],
        picks: []
      };

      for (let j = 1; j < values.length; j++) {
        const golferName = values[j].trim();
        const golfer = findGolferByName(golferName);
        if (golfer) {
          member.picks.push(golfer);
        }
      }

      poolMembers.push(member);
    }
  }

  return poolMembers;
};

// Parse the CSV data
let poolMembersData: Omit<PoolMember, 'bestFourTotal' | 'roundPositions' | 'isCut'>[] = [];
try {
  console.log('CSV content:', responses);
  poolMembersData = parseCSV(responses);
  console.log('Parsed pool members:', poolMembersData);
} catch (error) {
  console.error('Error parsing responses.csv:', error);
  // Fallback to mock data if parsing fails
  poolMembersData = [
    {
      id: '1',
      name: 'Caleb Ellis Island',
      picks: [
        mockGolfers[0], // Scottie Scheffler (Group 1)
        mockGolfers[5], // Justin Thomas (Group 2)
        mockGolfers[8], // Sepp Straka (Group 3)
        mockGolfers[10], // Bryson DeChambeau (Group 4)
        mockGolfers[15], // Thomas Detry (Group 5)
        mockGolfers[20], // Aaron Rai (Group 6)
        mockGolfers[26], // Jason Day (Group 7)
        mockGolfers[28], // Justin Rose (Group 8)
        mockGolfers[35], // Daniel Berger (Group 9)
        mockGolfers[37], // Tom Hoge (Group 10)
        mockGolfers[42], // Will Zalatoris (Group 11)
        mockGolfers[45], // Jordon Speith (Group 12)
        mockGolfers[49], // Joaquin Niemann (Group 13)
        mockGolfers[55], // Zach Johnson (Group 14)
        mockGolfers[61], // Justin Hastings (Group 15)
      ]
    }
  ];
}

// Calculate all positions
const allPositions = calculateAllRoundPositions(poolMembersData);

// Create final pool members array with calculated values
export const mockPoolMembers: PoolMember[] = poolMembersData.map(member => ({
  ...member,
  bestFourTotal: calculateBestFourTotal(member.picks),
  roundPositions: allPositions[member.id],
  isCut: isPoolMemberCut(member.picks)
})); 