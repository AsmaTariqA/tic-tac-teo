function Tile({ className, value, onClick, playerTurn }) {
  const hoverClass = value == null && playerTurn != null ? `${playerTurn.toLowerCase()}-hover` : '';

  console.log('Value:', value);
  console.log('Player Turn:', playerTurn);
  console.log('Hover Class:', hoverClass);

  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
      {value}
    </div>
  );
}



export default Tile 
