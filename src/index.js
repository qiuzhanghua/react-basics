import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

const App = () =>  {
    let user = {
      name: "Luis Martinez",
      hobbies: [
        'soccer',
        'web development'
      ]
    }
    return (
      <div>
        <Header textHomeLink="Hello World" />
        <Home
          name={"LCM"}
          initialAge={27}
          user={user}
        >
          <p>
            Other info
          </p>
        </Home>
      </div>
    );
}

// class App extends React.Component {
//   render() {
//     let user = {
//       name: "Luis Martinez",
//       hobbies: [
//         'soccer',
//         'web development'
//       ]
//     }
//     return (
//       <div>
//         <Header textHomeLink="Hello World" />
//         <Home
//           name={"LCM"}
//           initialAge={27}
//           user={user}
//         >
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facere accusamus a itaque harum odit, facilis sed maxime quos officiis. Eaque incidunt
//           </p>
//         </Home>
//       </div>
//     );
//   };
// };

render(
  <App/>,
  document.getElementById('app')
);
