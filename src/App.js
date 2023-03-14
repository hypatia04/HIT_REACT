import logo from './logo.svg';
import './App.css';
import Button from './button/Button';
import PersonList from './person/PersonList';
// import { YoutubeData } from './data';  // import biến đã export 

function App() {
  return (
    <div className="App">
      {/* <YoutubeItem imageSrc='https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60' 
      avatar='https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60'
       title='pink' inforAuthor = 'unsplash' ></YoutubeItem>
        */}
      <PersonList></PersonList>

      <Button></Button>


    </div>
  );
}

export default App;

// function YoutubeItem(pros){
//   console.log(pros);
//   return(
//     <div className='youtube-item'>
//     <div className='youtube-image'>
//       <img src={pros.imageSrc} alt=''/>
//       </div>
//       <img src={pros.avatar} alt=''/>
//       <div className='youtube-info'>
//         <h3 className='youtube-title'> {pros.title}</h3>
//         <h4 className=' youtube-infoauthor'>{pros.inforAuthor}</h4>
//       </div>
//       {
//         YoutubeData.map((item, index) => {
//           return(
//             <div className='person ' key = {YoutubeItem.id}></div>
//           )
//       })
//       //{} để đưa một đoạn jsx vào js
//       //map + () trong ( ) có gì thì ko biết  :v
//       } 
      
//       </div>
//   )

    
// }