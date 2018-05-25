export const CREATE_ROOM = 'server/create_room'

export const create_room = (room, player) => ({
  type: CREATE_ROOM,
  room: room,
  player: player
})

