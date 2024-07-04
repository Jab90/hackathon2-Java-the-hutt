# Trivia Board Game
## By Java The Hutt
## Project Brief: Building An Online Board Game

# Table of Contents
1. [Introduction](#introduction)
2. [Instructions and Features](#instructions)
3. [Development Considerations](#development)
4. [Testing](#testing)
5. [Team](#team)
6. [Future Wishlist](#future)
7. [Project Deployment](#deployment)
8. [Technical Facts](#technical-facts)
9. [Repository and Project Board](#repository)
10. [Credits](#credits)

<a id="introduction"></a>
## Introduction

Welcome to Java The Hutt, a website designed to allow users to play a trivia board game! The aim of this project is to create a fully functioning web application (also mobile friendly) board game.

This website was created during Hackathon 2 of the "16 week High-Performance Full Stack Skills Bootcamp" which ranged from 02/07/24 - 04/07/24 (1:30pm). We werent allowed to do any coding until 9am on 02/07/24, however we
were allowed to explore ideas and get together as a team to discuss what it is we wanted to create. Which was done on the friday and weekend leading into the hackathon (28/06/24 - 01/07/24). The requirements of this hackathon are found here[here](/workspace/hackathon2-Java-the-hutt/assets/docs/JavaScript Hackathon  Requirements.pdf) [here](/assets/docs/hackathon-1-requirements.pdf).

<a id="instructions"></a>
## Instructions and Features

Java The Hutt game board is desgined to be interactive and a game that can be played either by yourself or with others. The navigation bar at the top is to help the user restart a new game or if they need help or feel the need to contact us they can do so. Theres also a footer at the bottom where you will find links to our (virtual) social media pages.  

### General style

The site overall is designed to have a simplistic look and professional design, whilst having an interactive board game. We've gone for a more simplistic approach so that the user doesn't feel theres too much going on whilst trying to play the game. 

Desktop view of home page:

![Full cover page in desktop view](/assets/images/docs/cover-desktop.png "Full cover page in desktop view")

Mobile view of home page: 

![Full cover page in mobile view](/assets/images/docs/cover-mobile-scaled.png "Full cover page in mobile view")

Desktop view of device security only (to avoid screenshot overload):

![Full device security page in desktop view](/assets/images/docs/device-security.png "Full device security page in desktop view")

### Header & Navigation bar

The header contains our brand piece which is a text heading of "Java The Hutt" this is mirrored accross all of our pages used and aligned to the left of the page. The navbar is responsive on small, medium and large screen sizes. So when the screen goes down into the smaller sizes a hamburger menu appears with a drop down.

You can see the differences from the images below: 

![Navigation bar in mobile view](/assets/images/docs/navbar-mobile.png "Navigation bar in mobile view")

** CHANGE THIS TEXT** Depending on the size of the screen, some links may be displayed directly on the navigation bar. This can be seen in both laptop and desktop modes below.

![Navigation bar in laptop view](/assets/images/docs/navbar-laptop.png "Navigation bar in laptop view")

![Navigation bar in desktop view](/assets/images/docs/navbar-desktop.png "Navigation bar in desktop view")

### Footer

The footer contains our copyright piece of text and a series of icons which link to our virtual social media sites. This was implemented to accommodate users who may want to see what the organisation is doing online and offline (projects). The design again is basic and simplistic, this as mentioned before is to keep the user engaged and focused on the game. We've kept the colour scheme the same throughout to match the navbar, and to stay congruent across the website.  

![Footer bar in desktop view](/assets/images/docs/footer-screenshot.png "Footer bar in desktop view")

### Content pages

The user is able to access the game on the first page (Home Page) and will also have access to other pages such as: - 
- Help me
- Contact Us

#### Home Page

The home page you can see is the main star of the show with the board game sitting there. Its quite self explanatory with just playing the game. 

![Top of password security page](/assets/images/docs/password-security-screenshot.png "Top of password security page")

#### Help Page 

The help page has some FAQ's with issues. This page is designed with just some questions that the user may have. 

![Top of email and social media security guide](/assets/images/docs/email-social-page-screenshot.png "Top of email and social media security guide")

#### Contact Us Page 

The contact us page has a form which allows the user to contact us through the website with any issues they are having. Again this webpage follows the same structure as the other pages, whilst staying clear and concise. 

<a id="development"></a>
## Development Considerations

Upon choosing the route we wanted to go down in terms of a game and design, we began to throw out ideas on how the project would be designed and developed. The intial stages we considered how to have a different style of game/quiz, but after a few conversations we decided as a team it would be best to keep it simple and not overcomplicate things as we are also aware of the time aspect. 

A project board was set up using GitHub Projects and populated with tasks. As we progressed with the project these items were moved from the "Todo" section into "In Progress" and finally to the "Completed" tab. A full Agile methodolgy was not required during this Hackathon and thus the project board was used for mainly basic sense of management. 

Wireframes were used to design and help us come up with ideas and what sort of interface we would be going for. So as the coding aspect was more important (functionality) we thought that going for a more basic design but with a good finished product. Our designs were drawn up just as ideas until we moved over to the final design as we thought it would be easier to manage and code. We did our wireframing mark ups on mobile and desktop versions to get a good understanding as to how the responsiveness would have to be. The final wire frame was added with a little colour just give it a better look on the eye. You will see some of our wire frames attached below: - 

*ADD IMAGES HERE* 



Some of the wireframe designs are shown below:-

Mobile view without menu open:

![Wireframe smartphone page barebones](/assets/images/docs/wireframe-smartphone-barebones.png "Wireframe smartphone page barebones")

Mobile view with menu open:

![Wireframe smartphone page barebones with menu open](/assets/images/docs/wireframe-smartphone-barebones-menu.png "Wireframe smartphone page barebones with menu open")

Tablet view:

![Wireframe tablet page barebones](/assets/images/docs/wireframe-tablet-barebones.png "Wireframe tablet page barebones")

Desktop view:

![Wireframe laptop page barebones](/assets/images/docs/wireframe-laptop-barebones.png "Wireframe laptop page barebones")

The initial idea for styling was to use a complimentary colour palette like the following. However, after building a more barebones colour system for the initial construction of the site, it became clear that it worked well in more simple colours. Ultimately therefore, the styled site came to resemble the abstract wireframes more than the styled approach.

![Wireframe smartphone page styled](/assets/images/docs/wireframe-smartphone-styled.png "Wireframe smartphone page styled")

With the intial outlay of the design done we started off with an index.html template page which we could use and replicate across our pages. Firstly coding the header/Navbar and footer, which gave us a base template with what we were going to do. We then kept the theme simple throughout the project as the main focus was to get the board game fully functional and working.

<a id="testing"></a>
## Testing

We tested the website and board game a few ways before completing it just to make sure there was no major errors. The following check were carried out: - 

- Page responsiveness, this was tested on all pages across mobile, tablet, laptop and desktop sizes.
- All text necessary loaded as expected.
- HTML, CSS and JavaScript were all tested with W3C validator and alos JSHint. All pages are error free, however there was a few ES6 erros from JSHint, which is due to them not using const but probably var in their checking systems.
- All external links open in a new window/tab.
- All internal links work and are fully funtional.
- The board game works how it should. 

<a id="future"></a>
## Future Wishlist

**ADD TO THIS ON COMPLETION**

- Remove all minor validator warnings on all pages.
- Fix the navigation bar to show more items in desktop view, the current structure was designed for more pages.
- Add more categories and content to the site.
- Work on spacing and content separation a bit more. There are areas where it isn't perfect.

<a id="deployment"></a>
## Project Deployment

The deployed website can be found [here](https://jab90.github.io/hackathon2-Java-the-hutt/)

<a id="team"></a>
## Team

The team worked tirelessly and came together to create a good board game in the time given, the team members are: -

- Jabbeer Jeerooburkhan - (Team leader)
- Steven Poole
- John Hookes

<a id="technical"></a>
## Technical Facts

### Technologies used:

- HTML
- CSS
- Bootstrap
- Font Awesome
- Javascript

### Tools used:

- Slack (For communications)
- Balsamiq (For wireframing)
- Google Documents (For content consideration)
- GitHub Projects (For project management)
- ChatGPT (For content categorisation/inspiration/code advice)

<a id="repository"></a>
## Repository and Project Board

- GitHub repository - https://github.com/Jab90/hackathon2-Java-the-hutt.git
- GitHub project board - https://github.com/users/Jab90/projects/2/views/1
- GitHub deployed website - https://jab90.github.io/hackathon2-Java-the-hutt/

<a id="credits"></a>
## Credits

Jabbeer Jeerooburkhan

- Bootstrap
- Chat GPT
- Font awesome
- Youtube (https://www.youtube.com/watch?v=FT7uvchMECs)

Steven Poole 

John Hookes
