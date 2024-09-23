import { getBishopMoves, getKingMoves, getKnightMoves, getPawnCaptures, getPawnMoves, getQueenMoves, getRookMoves } from "./getMoves";

const arbiter = {
  getRegularMoves: function({position, piece, rank, file}) {
    if (piece.endsWith('K'))
      return getKingMoves({position, piece, rank, file});
    if (piece.endsWith('Q'))
      return getQueenMoves({position, piece, rank, file});
    if (piece.endsWith('B'))
      return getBishopMoves({position, piece, rank, file});
    if (piece.endsWith('N'))
      return getKnightMoves({position, rank, file});
    if (piece.endsWith('R'))
      return getRookMoves({position, piece, rank, file});
    if (piece.endsWith('P'))
      return getPawnMoves({position, piece, rank, file});
  },

  getValidMoves: function({position, prevPosition, piece, rank, file}) {
    let moves = this.getRegularMoves({position, piece, rank, file});
    if (piece.endsWith('P')) {
      moves = [
        ...moves,
        ...getPawnCaptures({position, prevPosition, piece, rank, file})
      ];
    }

    return moves;
  }
}

export default arbiter;