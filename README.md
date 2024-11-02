# Project scaffold

1) 
npx create-react-app netflix-gpt-diwali-2024
WebPack BTS
it would’ve installed react testing lib on it’s own JEST
it will create everything:-
node_modules, public, src, gitignore, package, package-lock, readme

delete unnecessary files, clear css files because we'd use Tailwind CSS

2) 
npm install -D tailwindcss
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
            - Movie Lists * N
- NetflixGPT
    - Search bar
    - Movie suggestions

3)
npm i -D react-router-dom

use "FORMIK" for large forms, many fields

let's write FORM validations
useRef Hook => let's us reference a value that's not needed for rendering
const email = useRef(null);
<input ref={email}/>
email.current.value

Firebase
create NetflixGPT project > click </> icon > select Host option
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
Configure as a single-page app (rewrite all urls to /index.html)? (y/N
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