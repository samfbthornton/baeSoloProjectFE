"use strict";

(function () {

    const baseURL = "http://localhost:8080";
    const idOfBeer = document.querySelector("#idOfBeer");
    const nameOfBeer = document.querySelector("#nameOfBeer");
    const brewery = document.querySelector("#brewery");
    const beerName = document.querySelector("#beerName");
    const abv = document.querySelector("#abv");
    const nice = document.querySelector("#nice");
    const historyOutput = document.querySelector("#history");
    //const getAllBeers = document.querySelector("#getAllBeers");
    //const getBeerByName = document.querySelector("#getBeerByName");
    const getAllOutput = document.querySelector("#getAllOutput");
    const getByNameOutput = document.querySelector("#getByNameOutput");
    const updateBrewery = document.querySelector("#updateBrewery");
    const updateBeerName = document.querySelector("#updateBeerName");
    const updateAbv = document.querySelector("#updateAbv");
    const updateNice = document.querySelector("#updateNice");



    //document.querySelector("section#getAllBeers > button").addEventListener("click", getAllCraftBeers);

    //CREATE
    const beerForm = document.querySelector("section#createBeer > form");
    beerForm.addEventListener("submit", (e) => {
        e.preventDefault(); //prevents form submitting in the default way

        console.log("THIS: ", beerForm);
        console.log("BREWERY: ", beerForm.brewery);


        const form = e.target;

        const data = {
            brewery: beerForm.brewery.value,
            name: beerForm.beerName.value,
            abv: beerForm.abv.value,
            nice: beerForm.nice.value
        }

        console.log("DATA: ", data);

        axios.post(`${baseURL}/createBeer`, data)
            .then(res => {
                const createHistory = document.createElement('p');
                console.log(res);

                getAllCraftBeers();
                alert("Success! New Craft Beer Created!");
                createHistory.textContent = `${beerForm.beerName.value} added to database`;
                historyOutput.appendChild(createHistory);
                form.reset();
                form.brewery.focus();

            }).catch(err => console.log(err));
    });

    const getAllCraftBeers = () => {
        axios.get(`${baseURL}/getAllBeers`)
            .then(res => {//handle response with callback. waits for responds before working
                const beers = res.data;
                const getAllHistory = document.createElement('p');

                getAllOutput.innerHTML = "";

                beers.forEach(beer => renderCraftBeer(beer, getAllOutput));

                console.log("ALL BEERS DATA: ", res.data);
                getAllHistory.textContent = `All Beers Shown`;
                historyOutput.appendChild(getAllHistory);
            }).catch(err => console.log(err));//handle error
    }

    const idSearch = () => {

        axios.get(`${baseURL}/getBeerByID/${idOfBeer.value}`)
            .then(res => {
                const beer = res.data;

                // if (!`${baseURL}/getBeerByID/${idOfBeer.value}`) {
                //     alert(`Beer does not exist. Please try again.`)
                // }else{
                
                updateBrewery.value = beer.brewery;
                updateBeerName.value = beer.name;
                updateAbv.value = beer.abv;
                updateNice.value = beer.nice;

                console.log("BEER DATA: ", beer);

                writeHistory(beer.id, beer.brewery, beer.name, beer.abv, beer.nice);
            // }
        }).catch(err => {
                console.log(err)});
        //alert("Please try again with a different ID!") need to edit so only pops up when an error
    }

    document.querySelector("div#getBeerById > button").addEventListener("click", idSearch);

    const nameSearch = () => {

        axios.get(`${baseURL}/getBeerByName/${nameOfBeer.value}`)
            .then(res => {
                const beers = res.data;

                getByNameOutput.innerHTML = "";

                beers.forEach(beer => renderCraftBeer(beer, getByNameOutput));

                brewery.value = beers[0].brewery;
                beerName.value = beers[0].name;
                abv.value = beers[0].abv;
                nice.value = beers[0].nice;

                console.log("BEER DATA: ", beers[0]);
                writeHistory(beers[0].id, beers[0].brewery, beers[0].name, beers[0].abv, beers[0].nice);
            }).catch(err => {
                console.log(err)});
        // alert("Please try again with a different name!") need to edit so only pops up when an error
    }

    document.querySelector("#getIdButton").addEventListener("click", nameSearch);


    const renderCraftBeer = (beer, getAllOutput) => {
        const beerColumn = document.createElement('div');
        //beerColumn.style = "background-color: lightblue";
        beerColumn.classList.add("col");

        const beerCard = document.createElement('div');
        beerCard.style = "background-color: lightblue";
        
        beerCard.classList.add("card");
        beerColumn.appendChild(beerCard);

        const newCraftBeer = document.createElement("div");
        newCraftBeer.style = "background-color: lightblue";
        newCraftBeer.classList.add("card-body");

        const brewery = document.createElement("h5");
        brewery.innerText = `${beer.brewery}`;
        brewery.classList.add("card-text");
        newCraftBeer.appendChild(brewery);

        const beerName = document.createElement("p");
        beerName.innerText = beer.name;
        beerName.classList.add("card-text");
        newCraftBeer.appendChild(beerName);

        const abv = document.createElement("p");
        abv.innerText = `ABV: %${beer.abv}`;
        abv.classList.add("card-text");
        newCraftBeer.appendChild(abv);

        const nice = document.createElement("p");
        //nice.innerText = `${beer.nice}`
        if (beer.nice === true) { nice.innerText = `It's Yummy!` }
        else if (beer.nice === false) { nice.innerText = `Not for me!` }
        else { nice.innerText = `Not Working`};
        nice.classList.add("card-text")
        newCraftBeer.appendChild(nice);

        const id = document.createElement("p");
        id.innerText = `ID: ${beer.id}`;
        nice.classList.add("card-text");
        newCraftBeer.appendChild(id);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "DELETE";
        deleteButton.style = "background-color: purple";
        deleteButton.classList.add("btn", "btn-primary");
        deleteButton.addEventListener("click", () => deleteBeer(beer.id));

        const updateButton = document.createElement("button");
        updateButton.innerText = "UPDATE";
        updateButton.style = "background-color: darkblue";
        updateButton.classList.add("btn", "btn-primary");
        updateButton.addEventListener("click", () => updateBeer(beer.id));

        newCraftBeer.appendChild(updateButton);
        newCraftBeer.appendChild(deleteButton);
        beerCard.appendChild(newCraftBeer)
        getAllOutput.appendChild(beerColumn);

    }

    const updateBeer = id => {
        console.log("It's working up to here");
        axios.get(`${baseURL}/getBeerByID/${id}`)
            .then(res => {
                const beer = res.data;
                console.log(res.data);

                updateBrewery.value = beer.brewery;
                updateBeerName.value = beer.name;
                updateAbv.value = beer.abv;
                updateNice.value = beer.nice;

                console.log(beer.name);
            })

        const updateForm = document.querySelector("#updateform");

        updateForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const form = e.target;

            const data = {
                brewery: updateForm.brewery.value,
                name: updateForm.beerName.value,
                abv: updateForm.abv.value,
                nice: updateForm.nice.value
            }

            console.log("DATA: ", data);


            axios.put(`${baseURL}/replaceBeer/${id}`, data)
                .then(res => {
                    const updateHistory = document.createElement('p');
                    console.log(res);
                    getAllCraftBeers();
                    updateHistory.textContent = `Beer with ID: ${id} was updated`;
                    historyOutput.appendChild(updateHistory);
                    form.reset();
                    form.brewery.focus();
                    alert(`Beer with ID: ${id} was updated.`)
                }).catch(err => console.log(err));
        });
    }


    const deleteBeer = id => {
        axios.delete(`${baseURL}/deleteBeer/${id}`)
            .then(res => {
                const deleteHistory = document.createElement('p');
                console.log(res);
                getAllCraftBeers();
                deleteHistory.textContent = `Beer with ID: ${id} deleted.`;
                historyOutput.appendChild(deleteHistory);
                alert(`Beer ${id} Deleted!`);
            }).catch(err => console.log(err));
    }

    const writeHistory = (id, brewery, beerName, abv, nice) => {
        const newHistory = document.createElement('p');
        newHistory.textContent = `ID: ${id}, Brewery: ${brewery}, Name: ${beerName}, ABV: ${abv}, IT'S NICE? ${nice}`;

        historyOutput.appendChild(newHistory);
    }

    getAllCraftBeers();

})()