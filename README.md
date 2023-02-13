<br />
<p align='center'>
  <img src='./frontend/src/assets/netsLogo.png' width='250px' >
</p>
<br />

# Brooklyn Nets Lineup Evaluator

The Brooklyn Nets Lineup Evaluator allows users to create a lineup from the 2021-22 Nets' roster, visualize the lineup's shooting ability per location on the court, and compare their projected statistics to the league average. It was built using React.js, Express, TypeScript, JavaScript, D3, Recharts, and Material UI.

View live: <a href='https://hullabaloo-podcasts.herokuapp.com/'>Brooklyn Nets Lineup Evaluator</a>

<br />

## Features:

<br />

### 1) Player Selector Sidebar

- Features the Brooklyn Nets' 2021-22 Roster
- Select up to 5 players to put into your lineup
- Highlights a player individual statistics when mouse hovers

<img src='./frontend/src/assets/playerSelector.png
' width='500px' />
<br />
<br />

### 2) Lineup Shot Chart

- Data from NBA Stats API
- Includes over 7,000 shots taken by Nets' players during the 2021-22 Regular Season
- Calculates Points per Shot Attempt for selected players in lineup, within a given location on the court
- Displays calculated data using D3 and D3-hexbin JavaScript libraries

<img src='./frontend/src/assets/lineupShotChart.png' width='500px' />
<br />
<br />

### 3) Projected Lineup Statistics

- Data from NBA Stats API and Basketball Reference
- Calculates selected lineup's Field Goal%, 3-point%, Effective Field Goal%, Assists per 100 Possessions, Offensive Rating, and Defensive Rating using data from the Nets' 2021-22 Regular Season
- Compares these statistics to the League Average from the 2021-22 NBA Regular Season
- Displays Projected Lineup Statistics compared to the League Average in a bar chart, created with Recharts React library
- Custom Tooltip shows on mouse hover and displays more detailed data, created using Recharts React library

<img src='./frontend/src/assets/projectedLineupStatistics.png' width='500px' />
<br />
<br />

## Technologies Used

- Languages: ![](https://img.shields.io/badge/-TypeScript-ffffff?style=flat-square&logo=typescript&logoColor=ff0000) ![](https://img.shields.io/badge/-JavaSript-ffffff?style=flat-square&logo=javascript&logoColor=ff0000)
- Frontend:
  ![](https://img.shields.io/badge/-React-ffffff?style=flat-square&logo=react&logoColor=ff0000)
  ![](https://img.shields.io/badge/-MaterialUI-ffffff?style=flat-square&logo=mui&logoColor=ff0000)
  ![](https://img.shields.io/badge/-CSS3-ffffff?style=flat-square&logo=css3&logoColor=ff0000)
  ![](https://img.shields.io/badge/-HTML5-ffffff?style=flat-square&logo=html5&logoColor=ff0000)
  ![](https://img.shields.io/badge/-D3-ffffff?style=flat-square&logo=d3&logoColor=ff0000)
  ![](https://img.shields.io/badge/-Recharts-ffffff?style=flat-square&logo=recharts&logoColor=ff0000)
- Backend:
  ![](https://img.shields.io/badge/-Node.js-ffffff?style=flat-square&logo=node.js&logoColor=ff0000)
  ![](https://img.shields.io/badge/-Express-ffffff?style=flat-square&logo=express&logoColor=ff0000)
  ![](https://img.shields.io/badge/-PostgreSQL-ffffff?style=flat-square&logo=postgresql&logoColor=ff0000)
  ![](https://img.shields.io/badge/-Sequelize-ffffff?style=flat-square&logo=sequelize&logoColor=ff0000)

<br />

## Installation

1. In the backed folder, run in the terminal:

```
npm install
```

2. In the frontend folder, run in the terminal:

```
npm install
```

3. In the backed folder, create the database by running in the terminal:

```
npx sequelize-cli db:create
```

4. In the backed folder, migrate tables to the database by running in the terminal:

```
npx sequelize-cli db:migrate
```

5. In the backed folder, seed the database by running in the terminal:

```
npx sequelize-cli db:seed:all
```

6. In the backend folder, create .env file with the following code:

```
PORT=8000
```

7. In the backed folder, start the backend by running in the terminal:

```
npm run dev
```

8. In the frontend folder, start the frontend by running in the terminal:

```
npm start
```

9. In the browser, navigate to 'http://localhost:3000/'

<br />

### Owen Iwamasa:

<a href='owiwamasa@gmail.com'>
<img src="https://i.imgur.com/jLLwTjh.png" width="25" height="25">
</a>
<a href='https://www.linkedin.com/in/owen-iwamasa-6ab3a9166/'>
<img src="https://logodix.com/logo/91031.png" width="25" height="25">
</a>
<a href='https://github.com/owiwamasa'>
<img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" width="25" height="25">
</a>