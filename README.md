# Password validation app
In this app, the user:
- can validate theirs password depending having in consideration a list of requirements.
- If the password meets the requirements, the every requirements and its icon become green, if not it keeps in red. 
- There is a button to make the password visible.
- Everything is accessible. There is a hidden message which is only acknowledge for screen readers's users. The aim of this message is to announce the user when theirs password does not meet the requirement
- The component is fully reusable because it takes into consideration when the length of the requirement is one or more than one. It has four properties: id, matchRegex, text and error. This properties are not optional.

# Stack
React, Typescript, Styled Components, MUI-Icons, React Testing Library.

# Getting started

- clone the repo
- run `npm start`
- if you want to run the tests, you can run `npm test`. Also, if you want to see the coverage you can run `npm run test:coverage`
- you can fin the project deployed [here](https://micaavigliano-react.vercel.app/)


