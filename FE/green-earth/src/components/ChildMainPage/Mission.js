import React, { Component } from 'react';
import "../../style/Mission.css";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
const level =10

class Mission extends Component {
    render() {
        if (level===1){
        return (
            <div className="Missions">
                <div className="Title">
                    MISSION
                </div>
                <div >
                    <Subject done= "true" desc="this is mission1"></Subject>
                    <Subject done= "false" desc="this is mission2"></Subject>
                    <Subject done= "false" desc="this is mission3"></Subject>
                </div> 

            </div>
        );} else if (level===10) {
            return (
                <div className="Missions">
                    <div className="Title10">
                        MISSION
                    </div>
                    <div >
                        <Subject done= "true" desc="this is mission1"></Subject>
                        <Subject done= "false" desc="this is mission2"></Subject>
                        <Subject done= "false" desc="this is mission3"></Subject>
                    </div> 
    
                </div>
            );

        }
    }
}

class Subject extends Component {
    render(){
        if (this.props.done =="false"){
        return(
            <header>
                <Card className="Mission" >
                    <CardHeader>
                        <Typography >
                            <h1>{this.props.desc}</h1>
                        </Typography>
                    </CardHeader>   
                </Card>
            </header>
        );} else {
            return (
                <header>
                <Card className="Mission2" >
                    <CardHeader>
                        <Typography >
                            <h1>{this.props.desc}</h1>
                        </Typography>
                    </CardHeader>   
                </Card>
            </header>
            )
        }
    }
}

export default Mission;