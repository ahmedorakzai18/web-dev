function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();

//==========================================

// Open your webpage.

// Right click
//      ↓
// Inspect
//      ↓
// Sources

// marker will appear beside the line.

// That marker is your breakpoint.