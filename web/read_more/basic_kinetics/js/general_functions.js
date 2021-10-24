closest = (array,goal)=> {
    return(
        array.reduce(function(prev, curr) {

            if ((curr-goal) < 0.01) {
                return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
            } else {
                return(null)
            }
        
        })
    )
}