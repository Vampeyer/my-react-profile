Axios request , 

Built with local axios files ,  

using webpack , in dist2Webpack and  
parcel , in dist.     

Serves data from   ,  https://reqres.in/api/users 


--- To build ,
#1------------------------------------ ----------------
 first install the NPM packages with , 
NPM install ,   
run 

***npm install  

which will install the following packages , in the node modules folder/ 
{ 
  "devDependencies": {
    "parcel": "^2.13.3",
    "webpack": "^5.97.1",
    "webpack-cli": "^5.1.4"
  },
  "dependencies": {
    "axios": "^1.7.9"
  }
 }



#2. 
to build in webpack , run  
"npm run build" 

to build in parcel, run 
"npm run parcel"







Notes on building with parcel- 
----------------------------------------------------
- Sometimes after you build something with parcel , you have to go through the js file , and find EVERY 
URL or path with a "/path/thingy.js"   and append a "." so it will load , like , 
"./path/thingy.js" in order to get it too load ,  
after building in the dist directory. 
   

Notes on building with webpack - 
----------------------------------------------------------
Webpack will compile and bundle the js file in the src folder , 
into a bundle.js. 

This is the bare bones js , so you would need to copy over any 
related html , and css into your project , and  
tie in the bundle.js in your html afterwords. 
