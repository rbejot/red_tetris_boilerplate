export const CREATE_ROOM = 'server/create_room'
export const ADD_USERNAME = 'server/add_username'
export const GET_LIST_ROOM = 'server/get_listRoom'
export const JOIN_ROOM = 'server/join_room'

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

export const join_room = (room, player) => ({
  type: JOIN_ROOM,
  room: room,
  player: player
})