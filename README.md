# 31 Oct 2024 Diwali -------------EPISODE 14----------

# Project scaffold

1.  npx create-react-app netflix-gpt-diwali-2024
    WebPack BTS
    it would’ve installed react testing lib on it’s own JEST
    it will create everything:-
    node_modules, public, src, gitignore, package, package-lock, readme

delete unnecessary files, clear css files because we'd use Tailwind CSS

2.  npm install -D tailwindcss
    npx tailwindcss init
    follow steps of tailwind website

# Features:

- Login/Sign Up
  - Sign In/Sign Up Form
  - redirect to Browse page
- Browse page (after authentication)
  - Header
  - Main Movie
    - Trailer in BG
    - Title & Description
    - Movie Suggestions
      - Movie Lists \* N
- NetflixGPT
  - Search bar
  - Movie suggestions

3.  npm i -D react-router-dom

use "FORMIK" for large forms, many fields

let's write FORM validations
useRef Hook => let's us reference a value that's not needed for rendering
const email = useRef(null);
<input ref={email}/>
email.current.value

Firebase
create NetflixGPT project > click </> icon > select Host option

# 1 Nov 2024

project > Authentication > select Email password click Enable
npm install firebase
create firebase.js (manual) paste code given below "npm install firebase" on firebase website
enable authentication in firebase GPT app
npm install -g firebase-tools
firebase login
firebase init

# Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:

Select

# Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

What do you want to use as your public directory? (public)
build
Configure as a single-page app (rewrite all urls to /index.html)? (y/N)
N
? Set up automatic builds and deploys with GitHub?
No

it created my firbase config in json file

npm run build
it creates optimised production build
when we wrote build we were telling firebase that you have to deploy using this build folder

# firebase deploy

will give hosting url
Hosting URL: https://netflixgpt-6abde.web.
this is live running aplication

# create signUp User account in firebase

check firebase documentation

<!-- Reading documentation is superpower of developer -->

documentation > authentication > left menu select Web > select Password Authentication
we'll use Modular API

Create password based account (SignUp)
Sign In (SignIn)
everything requires "auth" to call any API

We will getAuth once in central place (instead of doing it again and again in C.)
So put it in firebase.js

createUserWithEmailAndPassword this is giving me PROMISE
on which I do .then & .catch

signInWithEmailAndPassword same

once user SignIn/Up I will store user's data to redux store

npm i -D @reduxjs/toolkit
npm i react-redux

create appStore
create userSlice
on root of app provide appStore

Utility given to us by Firebase
documentation > authentication > select Web > select Manage Users in Firebase
onAuthStateChanged API (it's like a event listener)
this API gets called whenever there is SignIn/Up, SignOut (authentication state change)
we will use it to add, remove user from to store

I want to call this API only once
so add it to useEffect in Body C.

# we used useEffect to "setup" the listener just once

# useNavigate hook to navigate on authentication to respective page

Password Auth> SignOut logic from firebase doc

For adding User's Display Name in Sign Up form
Manage Users > Update a user's profile
Fetch Movies from TMDB

-------------EPISODE 15----------
solve bug => user able to access /browse without authentication
I will have to add useEffect of Body C. to such a place where it comes
inside
Router Provider and is accessible by entire app
Inside Header component it makes sense
we'll remove navigation from everywhere lese
since onAuthStateChange will take care of it

Hygeine practice
when C. unmounts unSubscribe to "onAuthStateChanged"

# onAuthStateChanged returns a unsubscribe function

make account on TMDB
create API get access token for authorisation => goto DOC => Movie list => Now playing movies

# React strict mode makes api calls twice because React mounts C. twice

let's add movie data to slice customHook

<!-- Building browsing page -->

MainContainer
videoBG
videoTitle
SecondaryContainer
MovieList _ n
cards _ n

# early RETURN in MainContainer

if(movies === null) return; // early return
if(!movies) return; // early return

-----------2 Nov 2024-------------
# update store with movie data
- planning for main container, secondary container
- fetch data for trailer video
- update store with trailer video data
- embed the youtube video
  MovieList - TopRated
  movieCards \* n
  MovieList - now playing
  MovieList - trending
  MovieList - horror
  MovieList

-----------7 Nov 2024-------------
GPT search I was stuck here because video title was overlapping and the button was un-clicakble 
so resolved it by adding z-index to header
GPT search bar 
GPT Movie Suggestions
multi-language, slice

platform.openai.com => profile > API keys > put in Constants file

npm i --save openai
this will given helper fn to use OPEN AI API
create file openai.js
google npm openai scroll down you will find initialization code

search "old hindi movies"
"funny Indian retro movies"

on search button click create function which gives movies, write query for it

in gptSLice addMovie results 

------ 8 nov 2024------
build gptMovieSuggestion
securing API keys

------ 9 nov 2024------
understanding "memoization" of data in our apps
we've already stored the horizontal stored movie card info in appStore
so we will check if the store already has then don't make API call
make API call only for the first time to store movies in APPStore
this is memoization technique
