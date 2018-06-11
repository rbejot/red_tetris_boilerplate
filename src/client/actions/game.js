export const CREATE_ROOM = 'server/create_room'
export const ADD_USERNAME = 'server/add_username'
export const GET_LIST_ROOM = 'server/get_listRoom'
export const JOIN_ROOM = 'server/join_room'
export const ERR_USERNAME = 'err_username'
export const RIGHT = 'move_right'
export const LEFT = 'move_left'
export const DOWN = 'move_down'
export const UP = 'rotate'
export const JUMP = 'jump'
export const START = 'start_game'
export const NEW_TETRI = 'new_tetri'
export const GAME_OVER = 'game_over'

export const create_room = (room, player) => ({
  type: CREATE_ROOM,
  room: room,
  player: player
})

export const add_username = (username) => ({
  type: ADD_USERNAME,
  player: username
})

export const get_list_room = () => ({
  type: GET_LIST_ROOM
})

export const join_room = (room, player, master) => ({
  type: JOIN_ROOM,
  room: room,
  player: player,
  master: master
})

export const err_username = () => ({
  type: ERR_USERNAME
})

export const start = () => ({
  type: START
})

export const move = (key) => {
  switch (key) {
    case "right":
        return {type: RIGHT}
    case "left":
        return {type: LEFT}
    case "down":
        return {type: DOWN}
    case "up":
        return {type: UP}
    case "jump":
        return {type: JUMP}
    default:
      break;
  }
}

export const new_tetri = (tetri, position) => ({
  type: NEW_TETRI,
  tetri: tetri,
  position: position
})

export const gameover = () => ({
  type: GAME_OVER,
  gameover: true,
  start: false
})