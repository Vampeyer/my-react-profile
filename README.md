
# React + Vite - by Vampeyer 

This react template includes fixes in the vite.config.js
for bundling , and dist , production linking ,   

and PWA capability - onstart . 

--------------------------------------------

# To update my profiles , I should 
 )#1 , Create a new Project Component file , in the Projects folder. 
 )#2 - Export that Component in the file ,
 )#3 - Import that Component in too the App.jsx

 )#4  GOTO portfoliopages/Portfolio.jsx , 
    and update the objects in the Projects Array 
    with a 
    - new id , new title , and new description.

   Ex. const projects = [
    { id: '5', title: 'Project 5', desc: 'New project 5' }
  ]; 

  )#5  - ADD THE ROUTES , in the App.jsx file , like  , 
         <!-- <Route path="/project/5" element={<Project5 />} /> -->











# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
