import { createSlice } from "@reduxjs/toolkit";
import tilesGenerator from "../components/TilesGenerator";


const initialState ={
    matrixSize: 0,
    gameBoard: [],
    backPattern: 1,
    rounds: 0,
    roundPairs: 0,
    currentRound: 0,
    difficulty: 0,
    points: null,

    visibleAtTheSameTime: 0,
    visibleCardsIndex: [],
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setMatrixSizeGlobal: (state,action)=>{
            state.matrixSize=action.payload
        },
        setRoundsToPlayGlobal: (state,action)=>{
            state.rounds= action.payload
        },
        setDifficultyGlobal: (state,action)=>{
            state.difficulty=action.payload
        },
        setGameBoard: (state,action)=>{
            let tileArray = tilesGenerator(action.payload)
            state.gameBoard=tileArray;
            state.backPattern=Math.floor(Math.random()*(7-1)+1); 
        },
        setToggleTileSelected: (state,action)=>{
            state.gameBoard[action.payload['tileIndex']]['IsSelected']=action.payload.status;
        },
        setVisibleAtTheSameTime: (state,action)=>{
            state.visibleAtTheSameTime= action.payload;
        },
        setPointsGlobal: (state, action)=>{
            state.points=action.payload
        },
        setCurrentRoundGlobal: (state,action)=>{
            state.currentRound= action.payload;
        },
        setClearVisibleCardsIndex: (state,)=>{
            state.visibleCardsIndex= []
        },
        setVisibleCardsIndex: (state,action)=>{
            state.visibleCardsIndex = [...state.visibleCardsIndex].concat(action.payload)
        },
        setUnvisibleCardsIndex: (state,action)=>{
            state.visibleCardsIndex =[...state.visibleCardsIndex].filter(item=>item.index!==action.payload);
        },
        setIsActiveCard: (state, action)=>{
            state.gameBoard[action.payload.index]['IsActive']=action.payload.status;
        },
        setRoundPairsGlobal: (state,action)=>{
            state.roundPairs=action.payload;
        }
        

    }
})

export const {  setMatrixSizeGlobal,
                setRoundsToPlayGlobal,
                setDifficultyGlobal,
                setGameBoard,
                setToggleTileSelected,   
                setVisibleAtTheSameTime, 
                setPointsGlobal,
                setCurrentRoundGlobal,
                setVisibleCardsIndex,
                setUnvisibleCardsIndex,
                setIsActiveCard,
                setClearVisibleCardsIndex,
                setRoundPairsGlobal,
            } =dataSlice.actions;
