import React, { Component } from 'react';
import "../../style/Mission.css";


import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memberInfoState, childInfoState, todayMissionListState , missionInfoState} from "../../store/atoms";
import { useAuthCallback } from "./../../functions/useAuthCallback";
import { useMissionCallback } from "./../../functions/useMissionCallback";





const TodayMissionComponent = () => {
    const navigate = useNavigate();

    const { childId } = useParams();
    // 오늘의 미션
    const [todayMissionList, setTodayMissionList] = useRecoilState(todayMissionListState);
    const { todayMissionListCallback } = useMissionCallback();


     // 현재 회원의 미션 목록 Axios 요청
    useEffect(() => {
        todayMissionListCallback(childId);
        console.log(todayMissionList)
    }, []);
    
    // onclik 파라미터 전달
    const handleClickMissionInfo1 = () => {
        navigate(`/mission/${todayMissionList[0].mission.missionId}`);
      };
    const handleClickMissionInfo2 = () => {
        navigate(`/mission/${todayMissionList[1].mission.missionId}`);
    };
    const handleClickMissionInfo3 = () => {
        navigate(`/mission/${todayMissionList[2].mission.missionId}`);
      }; 


    return (
        <div className="Missions">
            <div className="Title">
                MISSION
            </div>
            <div className='Mission1'>
                <h1>undone</h1>
                <div className='mission1' onclick = {handleClickMissionInfo1}>
                    {todayMissionList[0] && !todayMissionList[0].isPermitted && <h1>{todayMissionList[0].mission.name}</h1>}
                </div>
                <div className='mission2' onclick = {handleClickMissionInfo2}>
                    {todayMissionList[1] && !todayMissionList[1].isPermitted && <h1>{todayMissionList[1].mission.name}</h1>}
                </div>
                <div className='mission3' onclick = {handleClickMissionInfo3}>
                    {todayMissionList[2] && !todayMissionList[2].isPermitted && <h1>{todayMissionList[2].mission.name}</h1> }
                </div>
            </div> 
            <div className='Mission2'>
                <h1>done</h1>
                <h1>done</h1>
                <div className='mission1' onclick = {handleClickMissionInfo1}>
                    {todayMissionList[0] && todayMissionList[0].isPermitted && <h1>{todayMissionList[0].mission.name}</h1>}
                </div>
                <div className='mission2' onclick = {handleClickMissionInfo2}>
                    {todayMissionList[1] && todayMissionList[1].isPermitted && <h1>{todayMissionList[1].mission.name}</h1>}
                </div>
                <div className='mission3'onclick = {handleClickMissionInfo3}>
                    {todayMissionList[2] && todayMissionList[2].isPermitted && <h1>{todayMissionList[2].mission.name}</h1> }
                </div>
            </div> 

        </div>
    );
} 





export default TodayMissionComponent;