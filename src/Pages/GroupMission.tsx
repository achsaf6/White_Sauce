import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import CardContent from '@mui/material/CardContent';
import Avatar_and_points from "../Components/avatar_and_points";
import "./Survival_mission.css"
import {useState} from "react";
import {Container} from "@mui/material";
import friends from "./Souvenirs/tangled.jpg"
import "./GroupMission.css"
import Flippable_card from "../Components/Flippable_card";
import {PAGES} from "./GameManager";
import CameraComponent from "../Components/CameraComponent";
import shield from '../Pages/images/cards icons/card13.png'

// we need to add the stepper here later
// function  winner_list_update({name,points,bg}){
//     return(
//     <Winner_list name1={"Achsaf"} points1={340} bg1={"#D9FB68"} name2={"Itay"} points2={240} bg2={"#EFB2B2"} name3={name} points3={points} bg3={bg} />
//     )
//
// }
// @ts-ignore

export default function GroupMission({curPlayer,curGame}) {

    const mission_object = curGame._curMission

    const [itemData, setItemData] = useState([]);
    // function next(){
    //     jump(toPage)
    // }

    function addPhoto() {
        // @ts-ignore
        setItemData([friends])
    }
    return (
            <Container className={"group_mission_component"} sx={{p:2}}>
                <Avatar_and_points name={curPlayer._name} points={curPlayer._points} />
                <Flippable_card
                    back_content={
                    <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify"}}>
                        <Typography variant="h5" color={"primary"}>{mission_object._title}</Typography>
                    <br/>
                        <Typography variant="h6">
                            {mission_object._description}
                        </Typography>
                    </CardContent>
                }

                front_content={
                    <div>
                        <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "center", alignItems: "center" ,textAlign: "center" }}>
                            <img src={shield} style={{ width: 200, height: 200, opacity: 0.7 }}/>
                            <br/>
                            <Typography variant={"h4"}> <b>tribe mission</b></Typography>
                            <Typography variant={"h5"}> {mission_object._title}</Typography>
                        </CardContent>
                    </div>
                                }


                ></Flippable_card>


                <CameraComponent buttonText="Proof Of Concept" />

                <Button onClick={()=> curPlayer.setCurPage(PAGES.END)} variant="contained" color="primary" size={"medium"} sx={{
                    mb: 4,

                }} >Next</Button>
            </Container>
    );

}

