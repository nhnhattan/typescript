import React from 'react';

import './App.css';
import Button from './components/Button';
import Greet from './components/Greet'
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Input from './components/Input';
import Container from './components/Container';
import LoggedIn from './components/LoggedIn';
import User from './components/User';
import Counter from './components/Counter';
import ThemeContextProvider from './components/context/ThemeContext'
import Box from './components/context/Box';
import MultableRef from './components/ref/MultableRef';
import { Counter1 } from './components/class/Counter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile'
import List from './components/generics/List';
import RandomNumber from './components/restricting/RandomNumber';
import Toast from './components/templateliterals/Toast';
import CustomButton from './components/html/Button';

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // }
  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne"
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent"
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana"
  //   }
  // ]
  return (
    <div className="App">
      {/* <Greet name='Nhattan' messageCount={10} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList}/> */}
      {/* <Status status='loading'/> */}
      {/* <Heading>Heading</Heading> */}
      {/* <Oscar>
        <Heading>Oscar Heading</Heading>
      </Oscar> */}
      {/* <Greet name='Nhattan' isLoggedIn={true}/> */}
      {/* <Button handleClick={(event, id)=>{
        console.log('Click', event, id)
      }}/> */}
      {/* <Input  handleChange={(event)=> {
        console.log(event)
      }}/> */}
      {/* <Container styles={{border: '1px solid black', padding: '1rem'}}/> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box  />
      </ThemeContextProvider> */}
      {/* <MultableRef /> */}
      {/* <Counter1 message='The count value is ' /> */}
      {/* <Private isLoggedIn={false} Component={Profile}/> */}
      {/* <List 
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item)=> console.log(item)}
      />
      <List 
        items={[1, 2, 3]}
        onClick={(item)=> console.log(item)}
      /> */}
      {/* <List 
        items={[
          {
            first: "Bruce",
            last: "Wayne"
          },
          {
            first: "Clark",
            last: "Kent"
          },
          {
            first: "Princess",
            last: "Diana"
          }
        ]}
        onClick={(item)=> console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isNegative/> */}
      {/* <Toast position='left-center'/> */}
      <CustomButton variant='primary' onClick={()=> console.log('Clicked')}>
        PrimaryButton
      </CustomButton>
    </div>
  );
}

export default App;
