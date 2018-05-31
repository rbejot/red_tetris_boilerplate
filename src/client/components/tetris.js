import React from 'react'

const Tetris = ({props, actions, state}) => {
  const boardStyle = {
    width: '500px',
    height: '1000px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid black'
  }
  
  const rowStyle = {
    width: '500px',
    height: '50px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row'
  }
  
  const cellStyle = {
    width: '50px',
    height: '50px',
    margin: 'auto',
    border: '1px solid black'
  }

  const b_cellStyle = {
    width: '50px',
    height: '50px',
    margin: 'auto',
    border: '1px solid black',
    backgroundColor: 'black'
  }

  return (
    <div style={boardStyle}>
      <div style={rowStyle}>
        {state.position === 0 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 1 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 2 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 3 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 4 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 5 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 6 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 7 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 8 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 9 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
      </div>
      <div style={rowStyle}>
        {state.position === 10 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 11 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 12 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 13 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 14 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 15 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 16 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 17 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 18 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 19 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}  
      </div>
      <div style={rowStyle}>
        {state.position === 20 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 21 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 22 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 23 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 24 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 25 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 26 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 27 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 28 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 29 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 30 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 31 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 32 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 33 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 34 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 35 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 36 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 37 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 38 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 39 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 40 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 41 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 42 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 43 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 44 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 45 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 46 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 47 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 48 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 49 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 50 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 51 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 52 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 53 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 54 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 55 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 56 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 57 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 58 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 59 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 60 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 61 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 62 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 63 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 64 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 65 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 66 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 67 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 68 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 69 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 70 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 71 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 72 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 73 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 74 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 75 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 76 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 77 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 78 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 79 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 80 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 81 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 82 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 83 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 84 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 85 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 86 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 87 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 88 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 89 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 90 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 91 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 92 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 93 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 94 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 95 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 96 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 97 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 98 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 99 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 100 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 101 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 102 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 103 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 104 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 105 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 106 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 107 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 108 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 109 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 110 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 111 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 112 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 113 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 114 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 115 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 116 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 117 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 118 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 119 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 120 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 121 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 122 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 123 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 124 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 125 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 126 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 127 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 128 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 129 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 130 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 131 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 132 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 133 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 134 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 135 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 136 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 137 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 138 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 139 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 140 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 141 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 142 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 143 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 144 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 145 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 146 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 147 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 148 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 149 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 150 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 151 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 152 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 153 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 154 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 155 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 156 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 157 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 158 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 159 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 160 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 161 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 162 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 163 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 164 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 165 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 166 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 167 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 168 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 169 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 170 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 171 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 172 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 173 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 174 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 175 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 176 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 177 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 178 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 179 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 180 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 181 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 182 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 183 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 184 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 185 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 186 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 187 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 188 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 189 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
      <div style={rowStyle}>
        {state.position === 190 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 191 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 192 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}        
        {state.position === 193 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 194 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 195 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 196 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 197 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 198 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
        {state.position === 199 ? <div style={b_cellStyle}></div> : <div style={cellStyle}></div>}
      </div>
    </div>
  )
}

export default Tetris