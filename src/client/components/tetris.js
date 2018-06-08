import React from 'react'
import ReactInterval from 'react-interval'
import { start } from '../actions/game';

const Tetris = ({props, actions, state}) => {
  const boardStyle = {
    width: '300px',
    height: '600px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid black'
  }
  
  const rowStyle = {
    width: '300px',
    height: '30px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row'
  }
  
  const cellStyle = {
    width: '30px',
    height: '30px',
    margin: 'auto',
    border: '1px solid black'
  }

  const b_cellStyle = {
    width: '30px',
    height: '30px',
    margin: 'auto',
    border: '1px solid black',
    backgroundColor: 'black'
  }

  const cellOccupied = (cell) => {
    if (state.grid && state.grid.indexOf(cell) > -1)
      return true
    else if (state.position && state.position.indexOf(cell) > -1)
      return true
    else
      return false
  }

  const randomTetri = (actions) => {
    var tetri = ["O", "I", "J", "T", "L", "S", "Z"]
    var i = Math.floor(Math.random() * Math.floor(7))
    var position = []
    switch (tetri[i]) {
      case "O":
        position = [4, 5, 14, 15]
        break
      case "I":
        position = [3, 4, 5, 6]
        break
      case "J":
        position = [13, 14, 15, 3]
        break
      case "T":
        position = [3, 4, 5, 14]
        break
      case "L":
        position = [13, 14, 15, 5]
        break
      case "S":
        position = [13, 14, 4, 5]
        break
      case "Z":
        position = [3, 4, 14, 15]
        break
    }
    actions.new_tetri(tetri[i], position)
  }

  return (
    <div style={boardStyle}>
      {state.start ? <ReactInterval timeout={900} enabled={true} callback={function() {
        if (!state.tetri_pose)
          actions.move("down")
        else
          randomTetri(actions)
      }}/> : "" }
      <div style={rowStyle}>
        {cellOccupied(0) ? <div style={b_cellStyle}></div> : <div style={cellStyle}>0</div>}
        {cellOccupied(1) ? <div style={b_cellStyle}></div> : <div style={cellStyle}>1</div>}
        {cellOccupied(2) ? <div style={b_cellStyle}></div> : <div style={cellStyle}>2</div>}        
        {cellOccupied(3) ? <div style={b_cellStyle}></div> : <div style={cellStyle}>3</div>}
        {cellOccupied(4) ? <div style={b_cellStyle}></div> : <div style={cellStyle}>4</div>}
        {cellOccupied(5) ? <div style={b_cellStyle}></div> : <div style={cellStyle}>5</div>}
        {cellOccupied(6) ? <div style={b_cellStyle}></div> : <div style={cellStyle}>6</div>}
        {cellOccupied(7) ? <div style={b_cellStyle}></div> : <div style={cellStyle}>7</div>}
        {cellOccupied(8) ? <div style={b_cellStyle}></div> : <div style={cellStyle}>8</div>}
        {cellOccupied(9) ? <div style={b_cellStyle}></div> : <div style={cellStyle}>9</div>}        
      </div>
      <div style={rowStyle}>
        {cellOccupied(10) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(11) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(12) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {cellOccupied(13) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(14) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(15) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(16) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(17) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(18) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(19) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}  
      </div>
      <div style={rowStyle}>
        {cellOccupied(20) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(21) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(22) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {cellOccupied(23) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(24) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(25) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(26) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(27) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(28) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(29) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {cellOccupied(30) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(31) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(32) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {cellOccupied(33) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(34) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(35) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(36) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(37) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(38) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(39) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {cellOccupied(40) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(41) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(42) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {cellOccupied(43) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(44) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(45) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(46) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(47) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(48) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(49) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {cellOccupied(50) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(51) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(52) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {cellOccupied(53) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(54) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(55) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(56) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(57) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(58) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(59) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {cellOccupied(60) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(61) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(62) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {cellOccupied(63) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(64) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(65) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(66) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(67) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(68) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(69) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {cellOccupied(70) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(71) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(72) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {cellOccupied(73) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(74) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(75) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(76) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(77) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(78) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(79) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {cellOccupied(80) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(81) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(82) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {cellOccupied(83) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(84) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(85) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(86) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(87) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(88) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(89) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {cellOccupied(90) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(91) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(92) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {cellOccupied(93) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(94) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(95) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(96) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(97) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(98) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {cellOccupied(99) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        { cellOccupied(100) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(101) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(102) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        { cellOccupied(103) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(104) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(105) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(106) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(107) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(108) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(109) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        { cellOccupied(110) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(111) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(112) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        { cellOccupied(113) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(114) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(115) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(116) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(117) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(118) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(119) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        { cellOccupied(120) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(121) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(122) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(123) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(124) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(125) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(126) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(127) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(128) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(129) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        { cellOccupied(130) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(131) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(132) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        { cellOccupied(133) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(134) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(135) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(136) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(137) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(138) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(139) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        { cellOccupied(140) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(141) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(142) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        { cellOccupied(143) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(144) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(145) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(146) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(147) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(148) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(149) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        { cellOccupied(150) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(151) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(152) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        { cellOccupied(153) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(154) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(155) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(156) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(157) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(158) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(159) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        { cellOccupied(160) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(161) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(162) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        { cellOccupied(163) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(164) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(165) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(166) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(167) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(168) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(169) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        { cellOccupied(170) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(171) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(172) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        { cellOccupied(173) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(174) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(175) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(176) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(177) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(178) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(179) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        { cellOccupied(180) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(181) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(182) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        { cellOccupied(183) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(184) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(185) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(186) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(187) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(188) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(189) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        { cellOccupied(190) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(191) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(192) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        { cellOccupied(193) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(194) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(195) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(196) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(197) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(198) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        { cellOccupied(199) ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
    </div>
  )
}

export default Tetris