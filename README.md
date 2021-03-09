# BOOZE BROS - Overview

## Project Links

- [Frontend GitHub Repo Link](https://github.com/censoredbythefcc95/BOOZE-BROS-Online-Shop.git)
- [Backend GitHub Repo Link](https://github.com/censoredbythefcc95/BOOZE-BROS-Online-Shop_Backend.git)
- [Live Project Link](https://boozebrosapp.netlify.app)


## Project Description

My Capstone Project will be a full-stack website application for a fictional liquor store called BOOZE BROS. This is a brand new liquor store that opened in the city and is offering modern solutions for alcohol business.

Customers will be able to:
- View current inventory and specials for the day
- See how much product is in stock
- Use the online order system to place an order for pick-up
- Receive updates via email when their order is ready for pick-up.
- "Pay" for their items online using Shopify or Firebase/Stripe(to be decided)

## Project Completion status

| Project Phase | Status/Notes | 
| --- | :---: |  
| Project Approval | Complete | 
| Planning Architecture | Complete | 
| React server set-up/ CORS | Complete | 
| Express server set-up | Complete |
| Primary API creation | Complete |
| Express route configuration | In Progress |
| Nesting Routes | In Progress |
| React front-end primary set-up | In Progress  |
| Fetching API call into React components | In Progress |
| Functionality testing | In Progress |
| CSS Styling | Not started. |

## Architecture 

- [React Architecture](https://docs.google.com/drawings/d/1MKaMB9ZBuqYwpL_zWeFTS4ldHVOw_13i1GcoktvEhJc/edit)
- [Rails Architecture](https://docs.google.com/drawings/d/1uV9z12GmSFy5lU0cogFGxGZzBqruhpwzyBBcXqTEHRE/edit)


## API

I will create my own API on Express for the alcohol inventory. I will implement Stripe API with Firebase(user authentication) for the checkout page.(POSTMVP)


```
{
    _id: '2',
    name: 'Black Label',
    description: 'The expensive stuff. Time to get lit',
    brand: 'Johnnie Walker',
    category: 'Liquor',
    price: 149.99,
    countInStock: 15,
    rating: 5,
    numReviews: 2,
    image: '/images/blacklabel.jpg',
},
```


## Wireframes

Here are the official wireframes for my weather application. The first link is the basic wireframe on the appearance of the application. The second link is the architecture framework for my React components.

- [Mobile Wireframes]()
- [Desktop / Tablet Wireframes]()


### MVP/PostMVP

MVP - Capstone Requirements per the GA Project Worksheet  

#### MVP EXAMPLE
- Be a working, interactive, full-stack application. 
- Include data from back-end API 
- Have at least 5 separate components, using a readable file structure. 
- Built with new technologies (Stripe API, Firebase, GraphQL)
- Built mobile first. 
- Implement responsive design using flexbox, grid, or another css framework. 
- Use React Hooks. 
- Be deployed via Netlify and Heroku.

#### PostMVP EXAMPLE

- Add styling to make the application look appealing to the user. 
- Add additonal components if time permits. 
- Add Javascript animations to the application. 

## Components
Initial components decided for Project. 

| Component | Description | 
| --- | :---: |  
| App | Heart of the application.| 
| Head | This will hold the Navigation Bar. | 
| Rating | Component that houses rating function and displays in the Drink component.  | 
| Drink | Component card displaying drink, price, rating. |
| HomeScreen | Home Screen. Will hold the landing page. |
| ProductScreen | Shows current inventory of alcohol. |
| Footer | Contains footer text with creator.|

| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | 
| Initializing framework/app | H | 1 hr | 1 hr | 
| Netlify Deploy | H | 1 hr | 1 hr |
| Heroku Deploy | H | 1 hr |  0 hrs | 
| Build API | H | 3 hrs | 4 hrs | 
| Express Routes | H | 3 hrs| 4 hrs | 
| Building Components | H | 8hrs| 8hrs | 
| React routes | H | 6hrs | 4hrs | 
| Rendering data pull from API | H | 2 hrs | 2 hrs |
| CSS Styling | M | 25 hrs | 1hrs | 
| Double-checking State and Routes | H | 2 hrs | hrs |
| Total | H | 51hrs | 25hrs |


## Additional Technologies

- React
- Stripe API
- Firebase for User Authentication
- GraphQL

## Final notes 

I still need to determine my final component architecture. It is still unclear. Research on best architecture in progress.

- Rethink timing for MVP / PostMVP
- Figure out architecture
- Make sure documentation is really in place before starting(still unclear)
- Research GH and other sites for design. 

## Roadblocks / Questions

- Is it still a good avenue to go down User Authentication?
- Am I overcomplicating my code?
- Am I following good practice with React Component builds?
- useEffect hook when assigning state? 