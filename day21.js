let countdown = () => {
    setTimeout(() => {
    let count = [10,9,8,7,6,5,4,3,2,1]
    document.getElementById("one").innerHTML = count[0];
    setTimeout(() => {
        document.getElementById("one").innerHTML = count[1];
        setTimeout(() => {
            document.getElementById("one").innerHTML = count[2];
            setTimeout(() => {
                document.getElementById("one").innerHTML = count[3];
                setTimeout(() => {
                    document.getElementById("one").innerHTML = count[4];
                    setTimeout(() => {
                        document.getElementById("one").innerHTML = count[5];
                        setTimeout(() => {
                            document.getElementById("one").innerHTML = count[6];
                            setTimeout(() => {
                                document.getElementById("one").innerHTML = count[7];
                                setTimeout(() => {
                                    document.getElementById("one").innerHTML = count[8];
                                    setTimeout(() => {
                                        document.getElementById("one").innerHTML = count[9];
                                        setTimeout(() => {
                                            document.getElementById("one").innerHTML = "HAPPY INDEPENDENCE DAY";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
};
countdown(); 