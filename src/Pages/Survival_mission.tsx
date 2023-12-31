import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import CardContent from '@mui/material/CardContent';
import Avatar_and_points from "../Components/avatar_and_points";
import survivel from '../Pages/images/cards icons/survivel.png'
import "./Survival_mission.css"
import Timer_Component from "../Components/Timer_Component"
import itay from './Souvenirs/criptai.jpg'
import {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {db} from '../config/firebase'
import {getDocs, collection, getDoc} from 'firebase/firestore'
import "../Components/Flippable_card"
import Flippable_card from "../Components/Flippable_card";
import {PAGES} from "./GameManager";
import CameraComponent from "../Components/CameraComponent";
import Background from "../Components/Background";
import survivel2 from '../Pages/images/cards icons/card14.png'

import arrow from '../Pages/images/cards icons/arrow.png'

/**
 * in the future we'll add a game param, that will help us with setting unique display
 * for each player
 * @param jump
 * @param toPage
 * @constructor
 */
// @ts-ignore
export default function Survival({ curPlayer, curGame }) {


    const mission_object = curGame._curMission;
    const [isPictureUploaded, setIsPictureUploaded] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [showClock, setShowClock] = useState(true);


    useEffect(() => {
        let clockInterval: NodeJS.Timeout;
        clockInterval = setInterval(() => {
            setTimeElapsed((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(clockInterval);
    }, []);

    const handleFinishClick = async ()=> {

        let totalNumOfPlayers = 0;
        await getDoc(curGame._gameRef).then((docSnapshot) => {
            if (docSnapshot.exists()){
                // @ts-ignore
                totalNumOfPlayers = docSnapshot.data().done
            }
        })


        if (totalNumOfPlayers === curGame._players.length) {
        //     go to punishment
            curGame.setDone(0)
            await curGame.getPunishmentFromDataBase()
            await curPlayer.setCurPage(PAGES.PUN)
        } else {
            // go to leaderboard
            await curPlayer.setCurPage(PAGES.POINTS)
        }
    }

    const handlePictureUpload = ()=> {
        if (!isPictureUploaded)
            curGame.incrementDone()
        setIsPictureUploaded(true);
        const missionDurationInSeconds = timeElapsed - 10;
        console.log("sec:" ,missionDurationInSeconds);
        setShowClock(false);
        if (missionDurationInSeconds > 0) {
            curGame.addPointsSinglePlayer(curPlayer, missionDurationInSeconds, "Survival");
        }
    }



    // @ts-ignore
    return (

        <Container className={"survival_page_component"} sx={{p:2}}  >
            <Avatar_and_points name={curPlayer._name} points={curPlayer._points} avatarName={curPlayer._avatar} avatarRef={curPlayer._avatarRef}/>
            <Flippable_card back_content={
                <div>
                    <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify" }}>
                        <Typography variant="h5" color={"primary"}> <b> {mission_object._title}</b></Typography>
                        <br/>
                        <Typography variant="h6">
                            {mission_object._description}   </Typography>
                        </CardContent>
                </div>
            }
                            front_content={
                <div>
                    <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "center", alignItems: "center" ,textAlign: "center" }}>

                        <img src={survivel2} style={{ width: 260, height: 110, opacity: 0.7 }} />
                        <br/>
                        <Typography variant={"h4"}> <b>survival mission</b></Typography>
                        <Typography variant={"h5"}> {mission_object._title}</Typography>
                        {/*<div style={{ width: 260, height: 100,display: "flex", flexFlow:"row", justifyContent: "flex-end", alignItems: "flex-end" }}>*/}
                        {/*<img src={arrow} style={{ width: 20, height: 20, opacity: 0.7}} />*/}
                        {/*</div>*/}
                    </CardContent>
                </div>



            }/>


            {showClock && <Timer_Component/>}

            <Container sx={{ width: 330, flex: 1 }}  >
                {timeElapsed > 10 && <Typography variant={"h5"}><br/>To finish your task take a picture<br/><br/></Typography>}
                {/*<CameraComponent buttonText="Take a Photo" />*/}
                {timeElapsed > 10 && <CameraComponent buttonText="Take a Photo" onPictureUpload={handlePictureUpload} curGameNum={curGame._id}/>}

            </Container>


            {isPictureUploaded && <Button onClick={handleFinishClick} variant="contained" color="primary" size={"medium"} sx={{
                mb: 4,
            }} >Finish!</Button>}
        </Container>
    );

}

