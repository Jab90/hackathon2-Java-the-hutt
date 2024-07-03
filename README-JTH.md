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
were allowed to explore ideas and get together as a team to discuss what it is we wanted to create. Which was done on the friday and weekend leading into the hackathon (28/06/24 - 01/07/24).

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

The header contains a brand piece of text that appears on all pages aligned to the left and links to the home page as per convention. The right-sided navigation bar is designed to be responsive at all screen sizes. The links used are descriptive and necessarily long for user-friendliness. Given the length of the topic names, a link called "Menu" is always present for the user to select hidden options from a dropdown list. This is shown here in mobile view.

![Navigation bar in mobile view](/assets/images/docs/navbar-mobile.png "Navigation bar in mobile view")

Depending on the size of the screen, some links may be displayed directly on the navigation bar. This can be seen in both laptop and desktop modes below.

![Navigation bar in laptop view](/assets/images/docs/navbar-laptop.png "Navigation bar in laptop view")

![Navigation bar in desktop view](/assets/images/docs/navbar-desktop.png "Navigation bar in desktop view")

### Footer

The footer contains a trademark piece of text and a series of icons that link to (virtual) social media sites. This was implemented to accommodate users who may want to visit the organisation's other online platforms. It is designed to be basic, simplistic and carry the kind of regular content you would expect to see on a modern-day website. The colour scheme matches the nav bar to ensure consistency.

![Footer bar in desktop view](/assets/images/docs/footer-screenshot.png "Footer bar in desktop view")

### Content pages

The user is able to access content on a variety of online safety topics. These are covered by this website:-

- Password security
- Email & social media
- Device security
- Cyberbullying and harassment

Some other concepts are covered by links to other sites in the Menu -> More Information section.

#### Password security

The first password security page has a clean professional style with the content styled clearly, making it easy to read. Images are then used to break up the content, aiding the user in not becoming overwhelmed. It is important to note that the header element and navigation bar are always visible and are fixed to the top of the screen for ease of use.

![Top of password security page](/assets/images/docs/password-security-screenshot.png "Top of password security page")

#### Email & Social Media Security Guide

The second page focusing on email and social media has a slightly different design, with a larger image at the centre before the main content. This design was put in place to separate the page in nature from the others, keeping the user engaged while still keeping to the consistent colour and content structure as the rest of the site.

![Top of email and social media security guide](/assets/images/docs/email-social-page-screenshot.png "Top of email and social media security guide")

#### Other content pages

The rest of the content pages follow a similar ideology. They are different enough to stand out and yet not distract from the general feel of the site. This allows the user to engage in learning the actual content in a refreshing and yet familiar manner.

### More information

This section allows the user to access some external links relating to other forms of cyber security issues that are not covered on this website.

![More info page](/assets/images/docs/moreinfo.png "More info page")

<a id="development"></a>
## Development Considerations

Upon selection of our chosen topic, we began a process of consideration into how the project might be designed and developed. An initial stage involved considering what categories and content a sequence of pages might contain. After collecting some summarised information from ChatGPT, we collected an exhaustive amount of information before sorting out initial categories and information. The data we collected and sorted through is contained in [initial-categorisation.pdf](/assets/docs/initial-categorisation.pdf)

A project board was set up using GitHub Projects and populated with tasks. As the project progressed, these items were moved from "Todo" to "In Progress" and then to "Completed". A full Agile methodology was not required during this Hackathon and thus the project board was only used in a basic sense for management.

Wireframe ideas for the design were created to give a sense of the kind of interface we were going for. It was made clear during preparation for this Hackathon (being the first one) that most of the focus would be on the coding for the challenge. For this reason, only limited attempts were made on wireframing concepts. A design was drawn up on mobile dimensions and then expanded to show tablet and laptop/desktop layouts. An example illustration of a themed website in colour was then created using this approach.

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

An index.html page was created initially with focus on this as a template page. For this reason, the priority was on creating a header, navbar and footer before other content. Later on, it became clear that operational time limits meant that changes were required to the scope. At this point, a separate unlinked template.html file was created and used as a base for other pages. This allowed content to be easily added to the index file and kept template.html for new pages. From here, the site was expanded and populated with content before being styled to a consistent, easy-to-read standard.

<a id="testing"></a>
## Testing

The website was tested in quite a few ways before completion. The following checks were carried out:-

- Page responsiveness was tested on all pages at mobile, tablet, laptop and desktop sizes
- All images load as expected.
- Every HTML and CSS page on the site was checked with the W3C validator. All pages are error free although some have warnings that there wasn't time to solve.
- All external site links open in a new tab
- All internal site links work

<a id="future"></a>
## Future Wishlist

- Remove all W3C validator warnings on all pages.
- Fix the navigation bar to show more items in desktop view, the current structure was designed for more pages.
- Add more categories and content to the site.
- Work on spacing and content separation a bit more. There are areas where it isn't perfect.

<a id="deployment"></a>
## Project Deployment

The deployed website can be found [here](https://cyberarchitect777.github.io/hackathon1-hackstreetboys-staying-safe-online/)

<a id="team"></a>
## Team

The team worked cooperatively to take the project from design to final implementation and testing.

- Barrie Millar (Team leader) (https://github.com/CyberArchitect777)
- Jabbeer Jeerooburkhan - (https://github.com/Jab90)
- Lewis Freeman - (https://github.com/LewF-Dev)

<a id="technical"></a>
## Technical Facts

### Technologies used:

- HTML
- CSS
- Bootstrap
- Font Awesome

### Tools used:

- Slack (For communications)
- Balsamiq (For wireframing)
- Google Documents (For content consideration)
- GitHub Projects (For project management)
- ChatGPT (For name generation and content categorisation/inspiration/code advice)

<a id="repository"></a>
## Repository and Project Board

- GitHub repository - https://github.com/CyberArchitect777/hackathon1-hackstreetboys-staying-safe-online
- GitHub project board - https://github.com/users/CyberArchitect777/projects/3/views/1
- GitHub deployed website - https://cyberarchitect777.github.io/hackathon1-hackstreetboys-staying-safe-online/

<a id="credits"></a>
## Credits

Lewis Freeman

- [Source for S.M.A.R.T information](https://www.hurstdrive.herts.sch.uk/e-safety/)
- [Source for Woman Ignoring Partner image](https://www.psychologs.com/why-do-people-sometimes-ignore-each-other/)
- [Source for emotional change image](https://www.hrvisionevent.com/content-hub/minimise-emotional-impact-change/man)
- [Source for living alone image](https://edition.cnn.com/2022/01/12/health/living-alone-men-inflammation-wellness/index.html)
- [Deleting social media image](https://www.unitestudents.com/the-common-room/health-and-wellbeing/i-deleted-social-media-heres-why-i-think-you-should-too)
- [cyberbullying.html - How to protect yourself section](https://www.undp.org/kazakhstan/how-protect-yourself-cyberbullying)
- [Credit for unhappy-phone-user image](https://abcnews.go.com/Technology/science-doomscrolling/story?id=74402415)
- [For index page background image](https://www.freepik.com/premium-ai-image/person-typing-laptop-dark-room_44329314.htm)
- YouTube for videos embedded onto site.

Barrie Millar

- Photo by <a href="https://unsplash.com/@brookecagle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brooke Cagle</a> on <a href="https://unsplash.com/photos/woman-sitting-on-brown-wooden-chair-while-using-silver-laptop-computer-in-room-WHWYBmtn3_0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@dell?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dell</a> on <a href="https://unsplash.com/photos/person-using-laptop-on-table-dpbXgTh0Lac?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@balazsketyi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Balázs Kétyi</a> on <a href="https://unsplash.com/photos/black-smartphone-b9rPuUQ_YSs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@danielkorpai?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daniel Korpai</a> on <a href="https://unsplash.com/photos/space-gray-ipad-pro-A5Z9g4xP6Yw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
Photo by <a href="https://unsplash.com/@detpho?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Francesco</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-cell-phone-on-a-red-surface-1bBCtUAUMFI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Jabbeer Jeerooburkhan

- [Top tips for staying secure online](https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online) - Images and content was mainly taken from this website
- [Shutterstock](https://www.shutterstock.com) for additional images
- YouTube for videos embedded onto site.
