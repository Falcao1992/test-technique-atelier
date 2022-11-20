import React from 'react';
import styled from 'styled-components';

const PlayerCard = ({player}) => {

  return (<PlayerCardStyled picture={player.picture}>
      <div className="picture"/>
      <div className="dataPlayer">
        <p className="playerName">{`${player.firstname} ${player.lastname}`}</p>
        <div className="dataArray">
          <div>
            <span>rank</span>
            <p>#{player.data.rank}</p>
          </div>

          <div>
            <span>points</span>
            <p>{player.data.points}</p>
          </div>

          <div>
            <span>country</span>
            <p>{player.country.code}</p>
          </div>
        </div>
      </div>
    </PlayerCardStyled>);
}

const PlayerCardStyled = styled.article`
  display: flex;
  background-color: white;
  color: #F2753B;
  height: 100px;
  width: 340px;
  margin-bottom: 15px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

  .picture {
    width: 35%;
    background-image: ${props => `url(${props.picture})`};
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  .playerName {
    font-family: Montserrat sans-serif;
    font-weight: bold;
  }

  .dataPlayer {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 0;
  }

  .dataArray {
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding-right: 15px;
    font-weight: bold;
    
    span {
      font-family: Mulish sans-serif;
      text-transform: uppercase;
      color: #000000;
      opacity: 30%;
      font-size: 10px;
      letter-spacing: 1px;
    }

    p {
      font-family: Montserrat sans-serif;
      padding-top: 2px;
      font-size: 10px;
    }
  }
`

export default PlayerCard;