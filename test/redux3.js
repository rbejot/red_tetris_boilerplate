import * as tetris from '../src/client/reducers/tetris'
import chai from "chai"
import expect from 'expect'

describe('Test tetris function', () => {
  it('should send the row of a position', () => {
    expect(tetris.getRow(123)).toEqual(12)
  })
  it('should send the row of a position', () => {
    expect(tetris.getRow(100)).toEqual(10)
  })
  it('should move a tetri with the direction value', () => {
    expect(tetris.moveTetri([4, 5, 14, 15], 1)).toEqual([5, 6, 15, 16])
  })
  it('should move a tetri with the direction value', () => {
    expect(tetris.moveTetri(0, 1)).toEqual(0)
  })
  it('should return a new grid with deleted lines', () => {
    expect(tetris.checkLines([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([])
  })
  it('should save a tetrimino', () => {
    expect(tetris.saveTetri([], [4, 5, 14, 15])).toEqual([4, 5, 14, 15])
  })
  it('should check before rotate tetrimino', () => {
    expect(tetris.newRotation("L", [], [4, 14, 24, 25], 3, 4, 5, 6)).toEqual([7, 18, 29, 31])
  })
  it('should check before rotate tetrimino', () => {
    expect(tetris.newRotation("I", [], [4, 14, 24, 25], 3, 4, 5, 6)).toEqual([6, 17, 28, 30])
  })
  it('should rotate T tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 1, "T")).toEqual([5, 15, 25, 14])
  })
  it('should rotate T tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 2, "T")).toEqual([15, 5, -5, 6])
  })
  it('should rotate T tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 3, "T")).toEqual([13, 5, -3, 26])
  })
  it('should rotate T tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 4, "T")).toEqual([-7, 5, 17, 24])
  })

  it('should rotate L tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 1, "L")).toEqual([-5, 5, 15, 35])
  })
  it('should rotate L tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 2, "L")).toEqual([15, 5, -5, 13])
  })
  it('should rotate L tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 3, "L")).toEqual([13, 5, -3, -5])
  })
  it('should rotate L tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 4, "L")).toEqual([-7, 5, 17, 17])
  })

  it('should rotate J tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 1, "J")).toEqual([-5, 5, 15, 17])
  })
  it('should rotate J tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 2, "J")).toEqual([15, 5, -5, 35])
  })
  it('should rotate J tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 3, "J")).toEqual([13, 5, -3, 13])
  })
  it('should rotate J tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 4, "J")).toEqual([-7, 5, 17, -5])
  })

  it('should rotate S tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 1, "S")).toEqual([-5, 5, 17, 35])
  })
  it('should rotate S tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 2, "S")).toEqual([15, 5, 15, 13])
  })
  it('should rotate S tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 3, "S")).toEqual([13, 5, -5, -5])
  })
  it('should rotate S tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 4, "S")).toEqual([-7, 5, -3, 17])
  })

  it('should rotate Z tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 1, "Z")).toEqual([-5, 5, -5, 13])
  })
  it('should rotate Z tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 2, "Z")).toEqual([15, 5, -3, -5])
  })
  it('should rotate Z tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 3, "Z")).toEqual([13, 5, 17, 17])
  })
  it('should rotate Z tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 4, "Z")).toEqual([-7, 5, 15, 35])
  })

  it('should rotate I tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 1, "I")).toEqual([-5, 5, 15, 33])
  })
  it('should rotate I tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 2, "I")).toEqual([24, 14, 4, 2])
  })
  it('should rotate I tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 3, "I")).toEqual([11, 3, -5, -5])
  })
  it('should rotate I tetrimino', () => {
    expect(tetris.rotateTetri([], [4, 5, 6, 15], 4, "I")).toEqual([-18, -6, 6, 26])
  })

  it('should rotate T tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 1, "T")).toEqual(true)
  })
  it('should rotate T tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 2, "T")).toEqual(true)
  })
  it('should rotate T tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 3, "T")).toEqual(true)
  })
  it('should rotate T tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 4, "T")).toEqual(true)
  })

  it('should rotate L tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 1, "L")).toEqual(true)
  })
  it('should rotate L tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 2, "L")).toEqual(true)
  })
  it('should rotate L tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 3, "L")).toEqual(true)
  })
  it('should rotate L tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 4, "L")).toEqual(true)
  })

  it('should rotate J tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 1, "J")).toEqual(true)
  })
  it('should rotate J tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 2, "J")).toEqual(true)
  })
  it('should rotate J tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 3, "J")).toEqual(true)
  })
  it('should rotate J tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 4, "J")).toEqual(true)
  })

  it('should rotate S tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 1, "S")).toEqual(true)
  })
  it('should rotate S tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 2, "S")).toEqual(true)
  })
  it('should rotate S tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 3, "S")).toEqual(true)
  })
  it('should rotate S tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 4, "S")).toEqual(true)
  })

  it('should rotate Z tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 1, "Z")).toEqual(true)
  })
  it('should rotate Z tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 2, "Z")).toEqual(true)
  })
  it('should rotate Z tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 3, "Z")).toEqual(true)
  })
  it('should rotate Z tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 4, "Z")).toEqual(true)
  })

  it('should rotate I tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 1, "I")).toEqual(true)
  })
  it('should rotate I tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 2, "I")).toEqual(true)
  })
  it('should rotate I tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 3, "I")).toEqual(true)
  })
  it('should rotate I tetrimino', () => {
    expect(tetris.checkRotate([], [4, 5, 6, 15], 4, "I")).toEqual(true)
  })

  it('should check if tetrimino can rotate at the border', () => {
    expect(tetris.checkRotCell([], [4, 14, 24, 25], 3, 4, 5, 6)).toEqual(true)
  })
})