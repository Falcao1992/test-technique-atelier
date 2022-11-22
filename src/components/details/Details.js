import React from 'react';
import {createPortal} from 'react-dom'
import styled from "styled-components";

const Details = ({player, setPlayerSelected}) => {
  return createPortal(<DetailsStyled picture={player.picture}>
    <div>
      <button onClick={() => setPlayerSelected(null)} className="modal--close">X</button>
      <div className="detail--header">
        <div className="detail--header-fullname">
          <div>
            <p>{player.firstname}</p>
            <span>{player.lastname}</span>
          </div>
          <img src={player.picture} alt={player.lastname} />
        </div>
        <div className="detail--header-flag">
          <img src={player.country.picture} alt={player.country.code}/>
          <span>{player.country.code}</span>
        </div>
      </div>
      <div className="detail--stats">
        <div className="detail--stats-left">
          <div>
            <div>
              <span>rank</span>
              <p>{player.data.rank}</p>
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
          <div>
            <div>
              <span>birthday</span>
              <p>01/01/1992</p>
            </div>
            <div>
              <span>age</span>
              <p>{player.data.age}</p>
            </div>
          </div>
          <div>
            <div>
              <span>weight</span>
              <p>{player.data.weight / 100} kg</p>
            </div>
            <div>
              <span>height</span>
              <p>{player.data.height} cm</p>
            </div>
          </div>
        </div>
        <div className="detail--stats-right">
          <span>career titles</span>
          <p>2021 - 5</p>
          <div className="detail--stats-right-history">
            <p>ATP Master 1000 PAris (Indoot/Hard)</p>
            <p>Wimbledon (Outdoor/Grass)</p>
            <p>Roland Garros (Outdoor/Clay)</p>
          </div>

          <p>2022 - 3</p>
          <div className="detail--stats-right-history">
            <p>Wimbledon (Outdoor/Grass)</p>
            <p>Roland Garros (Outdoor/Clay)</p>
            <p>ATP Master 1000 PAris (Indoot/Hard)</p>
          </div>
        </div>
      </div>
    </div>
  </DetailsStyled>, document.getElementById('portal'));
}

const DetailsStyled = styled.section`
  background-color: white;
  margin: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  height: 85vh;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin: 0;
    width: 90vw;
    height: 90vh;
    overflow-y: auto;
  }
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
    @media (max-width: 768px) {
      justify-content: space-between;
      height: 100%;
    }
  }

  &:before {
    content: "";
    background-image: ${props => `url(${props.picture})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 25vw;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-10%, -50%);

    @media (max-width: 768px) {
      content: none;
    }
  }

  button {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: lightgray;
    font-size: 50px;
    font-weight: lighter;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
  }

  .detail--header {
    display: flex;
    justify-content: space-between;
    margin-left: 20vw;
    margin-right: 30px;
    margin-top: 15px;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
    }
  }

  .detail--header-fullname {
    font-size: 70px;
    font-weight: bolder;
    line-height: 135%;
    

    p {
      color: white;
      font-family: sans-serif;
      text-shadow: 2px 2px #F2753B, -2px -2px #F2753B;
    }

    span {
      font-size: 150px;
      color: #F2753B;
    }
    
    img {
      display: none;
    }

    @media (max-width: 768px) {
      text-align: center;
      font-size: 40px;
      display: flex;
      flex-direction: column-reverse;
      background: url("https://images.prismic.io/fft-rg-commun-news/fd99796d-428f-465a-99d4-7bc66fc9ced0_20210601_RG_PB_4370_web.jpg?auto=compress,format") no-repeat center center;
      padding-bottom: 10px;

      p {
        text-shadow: none;
      }
      
      span {
        font-size: 60px;
        color: white;
      }

      img {
        display: block;
        width: 40%;
        margin: 0 auto 10px;
      }
    }
  }

  .detail--header-flag {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 170px;
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    span {
      text-transform: uppercase;
      font-size: 50px;
      color: black;
      opacity: 30%;
      align-items: center;
      letter-spacing: 10px;
    }

    @media (max-width: 768px) {
      flex-direction: row;
      padding: 10px;
      justify-content: space-between;
      
      img {
        width: 100px;
      }
      
      span {
        font-size: 40px;
      }
    }
  }

  .detail--stats {
    margin-left: 25vw;
    margin-top: 5vh;
    width: calc(100% - 25vw);
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      margin-left: 0;
      flex-direction: column;
      width: 100%;
      padding: 15px;
      margin-top: 0;
      margin-bottom: 15px;
    }
  }

  .detail--stats-left {
    width: 70%;
    margin-right: 5%;

    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0;
    }
    > div {
      display: grid;
      justify-content: space-between;
      margin-bottom: 25px;
      text-align: left;
      grid-template-columns: repeat(3,1fr);
      font-weight: bold;

      span {
        font-family: Mulish sans-serif;
        text-transform: uppercase;
        color: #000000;
        opacity: 30%;
        font-size: 12px;
      }

      p {
        font-family: Montserrat sans-serif;
        padding-top: 5px;
        font-size: 12px;
        color: #F2753B;
      }
    }
  }
  
  .detail--stats-right {
    width: 30%;
    font-weight: bold;

    @media (max-width: 768px) {
      width: 100%;
      border-top: 1px solid lightgray;
      padding-top: 6px;
    }
    
    > p {
      padding-top: 5px;
    }
    
    span {
      font-family: Mulish sans-serif;
      text-transform: uppercase;
      color: #000000;
      opacity: 30%;
      font-size: 12px;
    }

    p {
      font-family: Montserrat sans-serif;
      padding-top: 5px;
      font-size: 12px;
      color: #F2753B;
    }
    
    .detail--stats-right-history {
      margin-bottom: 15px;
      p {
        font-size: 10px;
      }
    }
  }
`

export default Details;