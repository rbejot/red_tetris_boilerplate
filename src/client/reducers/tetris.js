export const getRow = (number) => {
  if (number % 10 === 0)
    return Math.ceil((number / 10))
  else 
    return Math.ceil((number / 10) - 1 );
}

export const moveTetri = (pos, value) => {
  let new_pos = []
  if (pos === 0)
    return 0
  pos.map((cell) => {
    new_pos.push(cell + value)
  })
  return new_pos
}

export const checkLines = (grid) => {
  var del_line = []
  grid.sort((a, b) => {
    return a - b
  })
  for (var i = 0; i < grid.length; i++) {
    if (grid[i] % 10 === 0 && (grid[i + 9]) === grid[i] + 9) {
      del_line.push(i)
    }
  }
  console.log("DEL_LINE: ", del_line)
  del_line.map((index, i) => {
    console.log("INDEX to DEL: ", index, ":", i)
    grid.splice(index - (10 * i), 10)
    for (var j = 0; j < index - (10 * i); j++) {
      grid[j] += 10
    }
  })
  console.log("LENGTH:",grid.length)
  return grid
}

export const saveColor = (grid, positions, color, tetri_grid, old_grid) => {
  positions.map(pos => {
    grid[pos] = color
  })
  old_grid.map((old) => {
    if (tetri_grid.indexOf(old) === -1)
      delete grid[old]
  })
  console.log(grid)
  return grid
}

export const saveTetri = (grid, positions) => {
  positions.map(pos => {
    if (grid.indexOf(pos)  === -1)
      grid.push(pos)
  })
  console.log("GRID: ", grid)
  return checkLines(grid)
}

export const newRotation = (tetri, grid, position, p0, p1, p2, p3) => {
  if (tetri === "I") {
    if (position[1] === getRow(position[1]) * 10 + 9 && checkRotCell(grid, position, p0 - 2, p1 - 2, p2 - 2, p3 - 2)) {
      return [position[0] + p0 - 2, position[1] + p1 - 2, position[2] + p2 - 2, position[3] + p3 - 2]
    }
    else if (getRow(position[0]) !== getRow(position[3]) && getRow(position[0] + p0) !== getRow(position[3] + p3) && checkRotCell(grid, position, p0--, p1--, p2--, p3--) && position[0] % 10 === 9) {
      return [position[0] + p0, position[1] + p1, position[2] + p2, position[3] + p3]
    }
    else if (position[1] === getRow(position[1]) * 10 && checkRotCell(grid, position, p0 + 3, p1 + 3, p2 + 3, p3 + 3)) {
      return [position[0] + p0 + 3, position[1] + p1 + 3, position[2] + p2 + 3, position[3] + p3 + 3]
    }
    else if (getRow(position[0]) !== getRow(position[3]) && getRow(position[0] + p0) !== getRow(position[3] + p3) && checkRotCell(grid, position, p0 + 2, p1 + 2, p2 + 2, p3 + 2) && position[0] % 10 === 1) {
      return [position[0] + p0 + 2, position[1] + p1 + 2, position[2] + p2 + 2, position[3] + p3 + 2] 
    }
  }
  if (position[0] + p0 > 200 || position[1] + p1 > 200|| position[2] + p2 > 200 || position[3] + p3 > 200)
    return position
  if (position[1] === getRow(position[1]) * 10 + 9 && checkRotCell(grid, position, p0--, p1--, p2--, p3--)) {
    return [position[0] + p0, position[1] + p1, position[2] + p2, position[3] + p3]
  }
  else if (position[1] === getRow(position[1]) * 10 && checkRotCell(grid, position, p0++, p1++, p2++, p3++)) {
    return [position[0] + p0, position[1] + p1, position[2] + p2, position[3] + p3]
  }
  return [position[0] + p0, position[1] + p1, position[2] + p2, position[3] + p3]
}

export const rotateTetri = (grid, position, rotate, tetri) => {
  let new_pose = []
  switch(tetri) {
    case "T":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, 1, 10, 19, -1)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position,11, 0, -11, -9)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 9, 0, -9, 11)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -11, 0, 11, 9)
      break;
    case "L":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, -9, 0, 9, 20)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position, 11, 0, -11, -2)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 9, 0, -9, -20)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -11, 0, 11, 2)
      break
    case "J":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, -9, 0, 9, 2)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position, 11, 0, -11, 20)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 9, 0, -9, -2)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -11, 0, 11, -20)
      break
    case "S":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, -9, 0, 11, 20)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position, 11, 0, 9, -2)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 9, 0, -11, -20)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -11, 0, -9, 2)
      break
    case "Z":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, -9, 0, -11, -2)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position, 11, 0, -9, -20)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 9, 0, 11, 2)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -11, 0, 9, 20)
      break
    case "I":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, -8, 1, 10, 19)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position, 21, 10, -1, -12)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 8, -1, -10, -19)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -21, -10, 1, 12)
      break
    default:
      break
  }
  return new_pose  
}

export const checkRotCell = (grid, position, p0, p1, p2, p3) => {
  if (grid.length === 0)
    return true
  if (position[0] + p0 > 200 || position[1] + p1 > 200|| position[2] + p2 > 200 || position[3] + p3 > 200)
    return false
  if (grid.includes(position[0] + p0) || grid.includes(position[1] + p1) || grid.includes(position[2] + p2) || grid.includes(position[3] + p3))
    return false
  return true
}

export const checkRotate = (grid, position, rotate, tetri) => {
  switch(tetri) {
    case "T":
      if (rotate === 1)
        return checkRotCell(grid, position, 1, 10, 19, -1)
      else if (rotate === 2)
        return checkRotCell(grid, position,11, 0, -11, -9)
      else if (rotate === 3)
        return checkRotCell(grid, position, 9, 0, -9, 11)
      else if (rotate === 4)
        return checkRotCell(grid, position, -11, 0, 11, 9)
      break;
    case "L":
      if (rotate === 1)
        return checkRotCell(grid, position, -9, 0, 9, 20)
      else if (rotate === 2)
        return checkRotCell(grid, position, 11, 0, -11, -2)
      else if (rotate === 3)
        return checkRotCell(grid, position, 9, 0, -9, -20)
      else if (rotate === 4)
        return checkRotCell(grid, position, -11, 0, 11, 2)
    case "J":
      if (rotate === 1)
        return checkRotCell(grid, position, -9, 0, 9, 2)
      else if (rotate === 2)
        return checkRotCell(grid, position, 11, 0, -11, 20)
      else if (rotate === 3)
        return checkRotCell(grid, position, 9, 0, -9, -2)
      else if (rotate === 4)
        return checkRotCell(grid, position, -11, 0, 11, -20)
    case "S":
      if (rotate === 1)
        return checkRotCell(grid, position, -9, 0, 11, 20)
      else if (rotate === 2)
        return checkRotCell(grid, position, 11, 0, 9, -2)
      else if (rotate === 3)
        return checkRotCell(grid, position, 9, 0, -11, -20)
      else if (rotate === 4)
        return checkRotCell(grid, position, -11, 0, -9, 2)
    case "Z":
      if (rotate === 1)
        return checkRotCell(grid, position, -9, 0, -11, -2)
      else if (rotate === 2)
        return checkRotCell(grid, position, 11, 0, -9, -20)
      else if (rotate === 3)
        return checkRotCell(grid, position, 9, 0, 11, 2)
      else if (rotate === 4)
        return checkRotCell(grid, position, -11, 0, 9, 20)
    case "I":
      if (rotate === 1)
        return checkRotCell(grid, position, -8, 1, 10, 19)
      else if (rotate === 2)
        return checkRotCell(grid, position, 21, 10, -1, -12)
      else if (rotate === 3)
        return checkRotCell(grid, position, 8, -1, -10, -19)
      else if (rotate === 4)
        return checkRotCell(grid, position, -21, -10, 1, 12)
    default:
      break
  }
}