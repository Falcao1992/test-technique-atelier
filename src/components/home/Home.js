import React, {useEffect, useState} from 'react';
import Axios from "axios";
import '../../style/home.css'
import backgroundImage from "../../assets/backgroundBallTennis.jpg"
import styled from 'styled-components';
import PlayerCard from "../card/playerCard";

const Home = () => {
  const [players, setPlayers] = useState(null)

  useEffect(() => {
    if(!players) {
      Axios.get('https://data.latelier.co/training/tennis_stats/headtohead.json')
        .then((res) => {
          setPlayers(res.data.players)
        })
    }
  }, [players])

  return (
    <MainStyled className="home--container"
                bgImage={backgroundImage}
    >
      <div>{players?.length && players.map((player) => <PlayerCard key={player.id} player={player} />)}</div>
    </MainStyled>);
}

const MainStyled = styled.main`
  display: flex;
  background: ${props => `url(${props.bgImage}) no-repeat center center`};
  
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-top: 30px;
  }
`

export default Home;