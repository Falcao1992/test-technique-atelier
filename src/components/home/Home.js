import React, {useEffect, useState} from 'react';
import Axios from "axios";
import '../../style/home.css'
import backgroundImage from "../../assets/backgroundBallTennis.jpg"
import styled from 'styled-components';
import PlayerCard from "../card/playerCard";
import Details from "../details/Details";

const Home = () => {
  const [players, setPlayers] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [playerSelected, setPlayerSelected] = useState(null)

  useEffect(() => {
    if(!players) {
      Axios.get('https://data.latelier.co/training/tennis_stats/headtohead.json')
        .then((res) => {
          setPlayers(res.data.players)
        })
    }
  }, [players])

  return (<MainStyled className="home--container"
                      bgImage={backgroundImage}
                      onClick={() => setPlayerSelected(null)}
                      displayBackDrop={playerSelected}
  >
    <div>
      <div className="home--container-input">
        <input type="text"
               value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}
               placeholder="Rechercher un joueur"
        />
      </div>
      <div className="home--container-cards">
        {players?.length && players
          .filter((play) => play.firstname.toLowerCase().includes(searchValue.toLowerCase()) || play.lastname.toLowerCase().includes(searchValue.toLowerCase()))
          .map((player) => <PlayerCard key={player.id} player={player}
                                       setPlayerSelected={setPlayerSelected}/>)}
      </div>
    </div>
    {playerSelected && <Details player={playerSelected} setPlayerSelected={setPlayerSelected}/>}
  </MainStyled>);
}

const MainStyled = styled.main`
  position: relative;
  background: ${props => `url(${props.bgImage}) no-repeat center center`};
  padding-left: 100px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding-left: 0;
  }

  &::after {
    content: "";
    position: ${props => props.displayBackDrop ? "fixed" : "initial"};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .home--container-input {
    width: 340px;
    padding-top: 30px;

    input {
      width: 100%;
      padding: 5px 8px;
      border-radius: 8px;
      background-color: #000000;
      opacity: .7;
      color: white;
      border: none;
    }
  }

  .home--container-cards {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
`

export default Home;