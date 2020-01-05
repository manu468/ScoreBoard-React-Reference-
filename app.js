// const players=[
//     {
//         name: "Manu",
//         score: 50,
//         id:1
//       },
//       {
//         name: "Aanu",
//         score: 40,
//         id:2
//       },
//       {
//         name: "Janu",
//         score: 30,
//         id:3
//       },
//       {
//         name: "Ranu",
//         score: 10,
//         id:4
//       },
//       {
//         name: "Kanu",
//         score: 20,
//         id:5
//       }
    
// ];

function Header(props){
   // console.log(props)
return(
    <header>
        <h1>{props.title}</h1>

<span className="stats"> Players:{props.totalPlayers}</span>
    </header>
);

}
//const player=() =>{}
function Player(props){
    return(
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={()=>props.removePlayer(props.id)}> ✖ </button>
            {props.name}
            </span>
           <Counter /*score={props.score}*/ />
        </div>

    );
}

// function Counter(props){
//     return( 
//     <div className="counter">
//         <button className="counter-action decrement"> - </button>
//     <span className="counter-score">{props.score}</span>
//         <button className="counter-action increment"> + </button>
//     </div>

//     );
// }
class Counter extends React.Component {
    constructor(){
        super()
        this.state={
            score: 0
        } /* try simply state={score:0}*/
    }
    //METHOD-- in React a common pattern is to create a event handler as a method on the class
    incrementScore(){
        this.setState({
            score: this.state.score+1
        });
        //console.log("i am working ");
    }
    decrementScore(){
        this.setState({
            score:this.state.score-1
        });
    }
    render(){
        return(
        <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
    <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
    </div>);
    }
}
//function App(props){
 class App extends React.Component{

        constructor(){
            super()
            this.state={players:[{
                name: "Manu",
                //score: 50,
                id:1
              },
              {
                name: "Aanu",
                //score: 40,
                id:2
              },
              {
                name: "Janu",
                //score: 30,
                id:3
              },
              {
                name: "Ranu",
                //score: 10,
                id:4
              },
              {
                name: "Kanu",
                //score: 20,
                id:5
              }

            ]}
        }
      //  function handleRemovePlayer(){ --- didn't work, donno why(fucnt cannot be used inside class??) 
            handleRemovePlayer=(id)=>{
               
            this.setState(prevState=>{
                return{
                players:prevState.players.filter(p=>p.id !==id)
            };
            });
        }
        render(){
            return(
                <div className="scoreboard">
                    <Header title="Scoreboard" 
                    totalPlayers={/*props.initialPlayers*/ this.state.players.length} />
                    {/* Players List */}
                    {/*props.initialPlayers.map( player => */}
                    {this.state.players.map( player =>
                        <Player 
                        name={player.name}
                        //score={player.score}
                        id={player.id}
                        key ={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}/>
                         )} 
                    
                    {/* <Player name="Manu" score={50} />
                    <Player name="Aanu" score={40} />
                    <Player name="Janu" score={30} />
                    <Player name="Ranu" score={10} />
                    <Player name="Kanu" score={20} /> */}
                </div>
        
            );  
        }
        

        }
    
    

ReactDOM.render(
 
<App /*initialPlayers={players}*/ />,
document.getElementById('root')

);