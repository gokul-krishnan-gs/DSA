const findClosest = function(x, y, z) { 
    let distanceXTOZ = Math.abs(z - x);
    let distanceYTOZ = Math.abs(z - y);

    if (distanceXTOZ < distanceYTOZ)
        return 1;
    else if (distanceYTOZ < distanceXTOZ)
        return 2;
    else
        return 0;
};
