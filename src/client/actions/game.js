export const CREATE_ROOM = 'server/create_room'
export const ADD_USERNAME = 'add_username'

export const create_room = (room, player) => ({
  type: CREATE_ROOM,
  room: room
})

export const add_username = (username) => ({
  type: ADD_USERNAME,
  player: username
})

