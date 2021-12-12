# Table of Contents 

1. [**Introduction**](#Introduction-&-Site-Purpose)
2. [**User Experience (UX)**](#User-Experience-(UX))
    * [Project goals](#Project-goals)
    * [Target audience](#Target-audience)
    * [User stories](#User-stories)
    * [Structure](#Structure)
    * [Design](#Design) 
      * [Colour scheme](#Colour-scheme)
      * [Typography](#Typography)
      * [Imagery](#Imagery)

3. [**Features**](#Features)
    * [Existing Features](#Existing-Features)
    * [Features to be implemented in the future](#Features-to-be-implemented-in-the-future)

4. [**Technologies used**](#Technologies-used)
    * [Languages](#Languages)
    * [Frameworks, libraries and programs used](#Frameworks,-libraries-and-programs-used)

5. [**Deployment**](#Deployment)
    * [Deploying to GitHub Pages](#Deploying-to-GitHub-Pages)
    * [Forking to GitHub Repository](#Forking-to-GitHub-Repository)
    * [Making a local clone](#Making-a-local-clone)

6. [**Testing**](#Testing)
    * [Testing Approach](#Testing-Approach)
    * [User stories testing from the UX section](#User-stories-testing-from-the-UX-section)
    * [Validator Testing](#Validator-Testing)
    * [Lighthouse Testing](#Lighthouse-Testing)
    * [Further Testing](#Further-Testing)
    * [Devices and browsers](#Devices-and-browsers)
    * [Issues and Bugs](#Issues-and-Bugs)

7. [**Credits**](#Credits)
    * [Code](#Code)
    * [Images](#Images)
    * [Content](#Content)
   
8. [**Acknowledgments**](#Acknowledgments)

9. [**Disclaimer**](#Disclaimer)

<br>

# Moonlight Quiz

[Visit live page here](https://renatabiniek.github.io/moonlight-quiz/)

<br>

## Introduction & Site Purpose
---

### Fancy playing a literary moon quiz?
<br>

![Responsive Quiz Site](assets/images/responsive-site.png)

This interactive front-end site was built as part of my portfolio project JavaScript Essentials.

It's a traditional interactive online quiz with a literary twist.
Instead of a question, a quote about a moon is displayed, and the players are presented with multiple choices to guess the author of the quote.

## User Experience (UX)
---

### Project goals

* to build a functioning quiz using JavaScript
* to present a fun online quiz themed around the moon and quotes from (mainly) literature

### Target audience for this website is:

* People who enjoy a fun online quiz
* Avid readers who want to test their knowledge and memory
* Adults, or  well-read teenagers
* Moon lovers

### User stories:

* **As a player:**

* I want to be able to play the quiz when I'm ready
* I want to be able to play the quiz on the go
* I want to for the quiz to be easy to navigate
* I want to see my progress and my score

* **As site creator:**

* I want to create a interactive online application based on JavaScript Essentials
* I want to present the users an attractive, responsive site

### Structure:

The user's journey begins on a minimal home page where they are presented with an option to read instructions on how to play the quiz or take action to start the game.
The logo and highest priority elements that might be useful to the player are conventionally placed in a horizontal fashion at the top of the browser window. 
For consistency of user experience, the site logo and footer are repeated on the the home page and quiz page. 

The logo element allows the user to quickly navigate back to home page.
The footer includes information about the site owner, including a link to the GitHub repository that opens in a new tab.

### Design:  

* **Colour scheme**

I wanted to make the page consistent with the mooon theme, so I decided on dark colour scheme, that would imitate the night sky.
That also give the site an elegant, minimal look, and eliminates distractions for the user.

The colors used are:

* white - rgb(255, 255, 255) for text placed on the image background for best contrast

* deep nightsky navy - rgb(15, 15, 48) for fallback background colour and text elements on buttons

* shades of gold - for glow effect rgb(255,215,0) & (231, 225, 189)

* dark blue - rgb(16, 46, 74) for modal backround
 
The blues were derived from the background image colours using [Eye Dropper](https://eyedropper.org/).

<br>

* **Typography**

    The fonts were sourced from [Google Fonts](https://fonts.google.com/)

Two fonts were selected for this project:

* 'Montserrat Alternates', sans-serif - for logo and intro elements, with sans-serif as a fallback font in case the original font family isn't imported correctly for some reason. The font design is fun but still very readable, I felt it aligned well with the theme of the quiz.

* 'Raleway', sans-serif -  for body text. The font is elegant, popular and clean, which ensure that questions and answers of the quiz will be easy to read.
Sans-serif is the fallback option.  

<br> 

