export const GAME_LAUNCHED = 'GAME_LAUNCHED'
export const CREATE_ROOM = 'server/create_room'

export const launch_game = () => ({
    type: GAME_LAUNCHED
})

export const create_room = (room, player) => ({
  type: CREATE_ROOM,
  room: room,
  player: player
})