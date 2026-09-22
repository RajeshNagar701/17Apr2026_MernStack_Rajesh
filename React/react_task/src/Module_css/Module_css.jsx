
/*
CSS Modules

Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.

CSS Modules are CSS files where class names are scoped locally to a specific 
component by default. They solve the problem of global namespace pollution and 
accidental naming clashes in large applications by automatically generating 
unique class names

Create the CSS module with the .module.css extension, 

example: my-style.module.css.

import : import A from './mycss1.module.css';
apply: <div className={A.big_blue}></div>

*/


import React from 'react'

import './mod_style.css'  // normal css import 

import A from './style1.module.css'  // MPORT MODULE.CSS 
import B from './style2.module.css'

function Module_css() {
  return (
    <div>
        
        <h1 className='bigblue'>Hi i am Normal css</h1>
        <h1 className='biggreen'>Hi i am Normal css</h1>

        <hr />

        <h1 className={A.bigdata}>Hi i am module style1</h1>
        <h1 className={B.bigdata}>Hi i am module style2</h1>



    </div>
  )
}

export default Module_css