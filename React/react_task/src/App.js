
import Class_component from './Component/Class_component';
import Func_component from './Component/Func_component'
import Css_React from './css/Css_React';
import React_jsx from './Jsx/React_jsx';
import About from './Layout/About';
import Home from './Layout/Home';
import Module_css from './Module_css/Module_css';
import Props_main from './Props/Props_main';
import Sass_css from './Sass_css/Sass_css';

function App() {
  return (
    <div>

      {
        //1) component type
        // <Func_component/>
        // <Class_component/>

        //2) jsx & css
        //<React_jsx/>

        //3) Layout
        //<Home/>
        //<About/>

        //4) Props
        //<Props_main/>

        //css
        //<Css_React/>
        //<h1 className='biggreen'>Class conflict</h1>

        //<Module_css/>
        <Sass_css/>
      }

        
      
      
    
    </div>
  );
}

export default App;
