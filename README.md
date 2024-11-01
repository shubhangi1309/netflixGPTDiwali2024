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
npm install firebase
create firebase.js (manual) paste code given below "npm install firebase" on firebase website
enable authentication in firebase GPT app
npm install -g firebase-tools
firebase login
firebase init
# Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:
firebase deploy