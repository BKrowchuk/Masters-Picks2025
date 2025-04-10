import { Golfer } from '../types';

export const mockGolfers: Golfer[] = [
  // Group 1 (Top 5)
  { id: 1, name: 'Scottie Scheffler', worldRanking: 1, country: 'USA', group: 1, odds: 4.5 },
  { id: 2, name: 'Rory McIlroy', worldRanking: 2, country: 'NIR', group: 1, odds: 7.5 },
  { id: 3, name: 'Ludvig Aberg', worldRanking: 3, country: 'SWE', group: 1, odds: 9.0 },
  { id: 4, name: 'Xander Schauffele', worldRanking: 4, country: 'USA', group: 1, odds: 10.0 },
  { id: 5, name: 'Collin Morikawa', worldRanking: 5, country: 'USA', group: 1, odds: 12.0 },

  // Group 2 (6-15)
  { id: 6, name: 'Jon Rahm', worldRanking: 6, country: 'ESP', group: 2, odds: 15.0 },
  { id: 7, name: 'Justin Thomas', worldRanking: 7, country: 'USA', group: 2, odds: 18.0 },
  { id: 8, name: 'Viktor Hovland', worldRanking: 8, country: 'NOR', group: 2, odds: 20.0 },
  { id: 9, name: 'Brooks Koepka', worldRanking: 9, country: 'USA', group: 2, odds: 22.0 },

  // Group 3 (16-30)
  { id: 10, name: 'Patrick Cantlay', worldRanking: 16, country: 'USA', group: 3, odds: 25.0 },
  { id: 11, name: 'Tommy Fleetwood', worldRanking: 17, country: 'ENG', group: 3, odds: 28.0 },
  { id: 12, name: 'Sepp Straka', worldRanking: 18, country: 'AUT', group: 3, odds: 30.0 },
  { id: 13, name: 'Keegan Bradley', worldRanking: 19, country: 'USA', group: 3, odds: 35.0 },
  { id: 14, name: 'Shane Lowry', worldRanking: 20, country: 'IRL', group: 3, odds: 40.0 },

  // Group 4 (31-50)
  { id: 15, name: 'Bryson DeChambeau', worldRanking: 31, country: 'USA', group: 4, odds: 45.0 },
  { id: 16, name: 'Corey Conners', worldRanking: 32, country: 'CAN', group: 4, odds: 50.0 },
  { id: 17, name: 'Tyrrell Hatton', worldRanking: 33, country: 'ENG', group: 4, odds: 55.0 },
  { id: 18, name: 'Billy Horschel', worldRanking: 34, country: 'USA', group: 4, odds: 60.0 },

  // Group 5 (51-75)
  { id: 19, name: 'Min Woo Lee', worldRanking: 51, country: 'AUS', group: 5, odds: 65.0 },
  { id: 20, name: 'Akshay Bhatia', worldRanking: 52, country: 'USA', group: 5, odds: 70.0 },
  { id: 21, name: 'Cameron Smith', worldRanking: 53, country: 'AUS', group: 5, odds: 75.0 },
  { id: 22, name: 'Sahith Theegala', worldRanking: 54, country: 'USA', group: 5, odds: 80.0 },
  { id: 23, name: 'Thomas Detry', worldRanking: 55, country: 'BEL', group: 5, odds: 85.0 },

  // Group 6 (76-100)
  { id: 24, name: 'Tom Kim', worldRanking: 76, country: 'KOR', group: 6, odds: 90.0 },
  { id: 25, name: 'Aaron Rai', worldRanking: 77, country: 'ENG', group: 6, odds: 95.0 },
  { id: 26, name: 'Nick Taylor', worldRanking: 78, country: 'CAN', group: 6, odds: 100.0 },
  { id: 27, name: 'Lucas Glover', worldRanking: 79, country: 'USA', group: 6, odds: 110.0 },
  { id: 28, name: 'Patrick Reed', worldRanking: 80, country: 'USA', group: 6, odds: 120.0 },
  { id: 29, name: 'J.J. Spaun', worldRanking: 81, country: 'USA', group: 6, odds: 130.0 },

  // Group 7 (101-125)
  { id: 30, name: 'Tony Finau', worldRanking: 101, country: 'USA', group: 7, odds: 140.0 },
  { id: 31, name: 'Harris English', worldRanking: 102, country: 'USA', group: 7, odds: 150.0 },
  { id: 32, name: 'Byeong Hun An', worldRanking: 103, country: 'KOR', group: 7, odds: 160.0 },
  { id: 33, name: 'Jason Day', worldRanking: 104, country: 'AUS', group: 7, odds: 170.0 },
  { id: 34, name: 'Sam Burns', worldRanking: 105, country: 'USA', group: 7, odds: 180.0 },

  // Group 8 (126-150)
  { id: 35, name: 'Justin Rose', worldRanking: 126, country: 'ENG', group: 8, odds: 190.0 },
  { id: 36, name: 'Denny McCarthy', worldRanking: 127, country: 'USA', group: 8, odds: 200.0 },
  { id: 37, name: 'Max Greyserman', worldRanking: 128, country: 'USA', group: 8, odds: 210.0 },
  { id: 38, name: 'Stephen Jaeger', worldRanking: 129, country: 'GER', group: 8, odds: 220.0 },
  { id: 39, name: 'Taylor Pendrith', worldRanking: 130, country: 'CAN', group: 8, odds: 230.0 },

  // Group 9 (151-175)
  { id: 40, name: 'Brian Harman', worldRanking: 151, country: 'USA', group: 9, odds: 240.0 },
  { id: 41, name: 'Daniel Berger', worldRanking: 152, country: 'USA', group: 9, odds: 250.0 },
  { id: 42, name: 'J.T. Poston', worldRanking: 153, country: 'USA', group: 9, odds: 260.0 },
  { id: 43, name: 'Nicolas Echavarria', worldRanking: 154, country: 'COL', group: 9, odds: 270.0 },
  { id: 44, name: 'Davis Thompson', worldRanking: 155, country: 'USA', group: 9, odds: 280.0 },

  // Group 10 (176-200)
  { id: 45, name: 'Michael Kim', worldRanking: 176, country: 'KOR', group: 10, odds: 290.0 },
  { id: 46, name: 'Tom Hoge', worldRanking: 177, country: 'USA', group: 10, odds: 300.0 },
  { id: 47, name: 'Christiaan Bezuidenhout', worldRanking: 178, country: 'RSA', group: 10, odds: 310.0 },
  { id: 48, name: 'Rasmus Hojgaard', worldRanking: 179, country: 'DEN', group: 10, odds: 320.0 },
  { id: 49, name: 'Matthieu Pavon', worldRanking: 180, country: 'FRA', group: 10, odds: 330.0 },

  // Group 11 (201-225)
  { id: 50, name: 'Will Zalatoris', worldRanking: 201, country: 'USA', group: 11, odds: 340.0 },
  { id: 51, name: 'Cameron Young', worldRanking: 202, country: 'USA', group: 11, odds: 350.0 },
  { id: 52, name: 'Cameron Davis', worldRanking: 203, country: 'AUS', group: 11, odds: 360.0 },
  { id: 53, name: 'Joe Highsmith', worldRanking: 204, country: 'USA', group: 11, odds: 370.0 },

  // Group 12 (226-250)
  { id: 54, name: 'Jordan Spieth', worldRanking: 226, country: 'USA', group: 12, odds: 380.0 },
  { id: 55, name: 'Max Homa', worldRanking: 227, country: 'USA', group: 12, odds: 390.0 },
  { id: 56, name: 'Matt Fitzpatrick', worldRanking: 228, country: 'ENG', group: 12, odds: 400.0 },
  { id: 57, name: 'Nicolai Hojgaard', worldRanking: 229, country: 'DEN', group: 12, odds: 410.0 },

  // Group 13 (251-275)
  { id: 58, name: 'Joaquin Niemann', worldRanking: 251, country: 'CHI', group: 13, odds: 420.0 },
  { id: 59, name: 'Patton Kizire', worldRanking: 252, country: 'USA', group: 13, odds: 430.0 },
  { id: 60, name: 'Rafael Campos', worldRanking: 253, country: 'PUR', group: 13, odds: 440.0 },
  { id: 61, name: 'Adam Schenk', worldRanking: 254, country: 'USA', group: 13, odds: 450.0 },
  { id: 62, name: 'Davis Riley', worldRanking: 255, country: 'USA', group: 13, odds: 460.0 },

  // Group 14 (276-300)
  { id: 63, name: 'Dustin Johnson', worldRanking: 276, country: 'USA', group: 14, odds: 470.0 },
  { id: 64, name: 'Charl Schwartzel', worldRanking: 277, country: 'RSA', group: 14, odds: 480.0 },
  { id: 65, name: 'Phil Mickelson', worldRanking: 278, country: 'USA', group: 14, odds: 490.0 },
  { id: 66, name: 'Danny Willett', worldRanking: 279, country: 'ENG', group: 14, odds: 500.0 },
  { id: 67, name: 'Zach Johnson', worldRanking: 280, country: 'USA', group: 14, odds: 510.0 },
  { id: 68, name: 'Sergio Garcia', worldRanking: 281, country: 'ESP', group: 14, odds: 520.0 },

  // Group 15 (301+)
  { id: 69, name: 'Bernhard Langer', worldRanking: 301, country: 'GER', group: 15, odds: 530.0 },
  { id: 70, name: 'Bubba Watson', worldRanking: 302, country: 'USA', group: 15, odds: 540.0 },
  { id: 71, name: 'Kevin Yu', worldRanking: 303, country: 'TPE', group: 15, odds: 550.0 },
  { id: 72, name: 'Justin Hastings (A)', worldRanking: 304, country: 'USA', group: 15, odds: 560.0 },
  { id: 73, name: 'Angel Cabrera', worldRanking: 305, country: 'ARG', group: 15, odds: 570.0 },
  { id: 74, name: 'Vijay Singh', worldRanking: 306, country: 'FIJ', group: 15, odds: 580.0 },
  { id: 75, name: 'Hiroshi Tai (A)', worldRanking: 307, country: 'SGP', group: 15, odds: 590.0 },
  { id: 76, name: 'Evan Beck (A)', worldRanking: 308, country: 'USA', group: 15, odds: 600.0 },
  { id: 77, name: 'Fred Couples', worldRanking: 309, country: 'USA', group: 15, odds: 610.0 }
]; 