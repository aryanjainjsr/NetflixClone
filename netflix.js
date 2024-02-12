function input1(selector){
    const buttele = document.querySelector(selector);

    if(buttele.classList.contains('toggle')){
        buttele.classList.remove('toggle');
        console.log('sws');
        document.querySelector('.js-inp-1').innerHTML = "";
    }
    else{
        buttele.classList.add('toggle');
        console.log('fwerws');
        // document.querySelector('.toggle').innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices";
        const toggleElement = document.querySelector('.toggle');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices";
        toggleElement.appendChild(newDiv);
    }    
}

function input2(selector){
    const buttele = document.querySelector(selector);

    if(buttele.classList.contains('toggle2')){
        buttele.classList.remove('toggle2');
        console.log('sws');
        document.querySelector('.js-inp-2').innerHTML = "";
    }
    else{
        buttele.classList.add('toggle2');
        console.log('fwerws');
        // document.querySelector('.toggle2').innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices";
        const toggleElement = document.querySelector('.toggle2');
        const newDiv2 = document.createElement('div');
        newDiv2.innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices";
        toggleElement.appendChild(newDiv2);
    }    
}

function input3(selector){
    const buttele = document.querySelector(selector);

    if(buttele.classList.contains('toggle3')){
        buttele.classList.remove('toggle3');
        console.log('sws');
        document.querySelector('.js-inp-3').innerHTML = "";
    }
    else{
        buttele.classList.add('toggle3');
        console.log('fwerws');
        // document.querySelector('.toggle3').innerHTML = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web from your personal computer or on any smart TVs, smartphones, tablets, streaming media players and game consoles.";
        const toggleElement = document.querySelector('.toggle3');
        const newDiv3 = document.createElement('div');
        newDiv3.innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices";
        toggleElement.appendChild(newDiv3);
    }    
}

function input4(selector){
    const buttele = document.querySelector(selector);

    if(buttele.classList.contains('toggle4')){
        buttele.classList.remove('toggle4');
        console.log('sws');
        document.querySelector('.js-inp-4').innerHTML = "";
    }
    else{
        buttele.classList.add('toggle4');
        console.log('fwerws');
        // document.querySelector('.toggle4').innerHTML = "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
        const toggleElement = document.querySelector('.toggle4');
        const newDiv4 = document.createElement('div');
        newDiv4.innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices";
        toggleElement.appendChild(newDiv4);
    }    
}

function input5(selector){
    const buttele = document.querySelector(selector);

    if(buttele.classList.contains('toggle5')){
        buttele.classList.remove('toggle5');
        console.log('sws');
        document.querySelector('.js-inp-5').innerHTML = "";
    }
    else{
        buttele.classList.add('toggle5');
        console.log('fwerws');
        // document.querySelector('.toggle5').innerHTML = "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
        const toggleElement = document.querySelector('.toggle5');
        const newDiv5 = document.createElement('div');
        newDiv5.innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices";
        toggleElement.appendChild(newDiv5);
    }    
}