"use strict";
const url = 'https://gist.githubusercontent.com/rusty-key/659db3f4566df459bd59c8a53dc9f71f/raw/4127f9550ef063121c564025f6d27dceeb279623/counties.json';
const getCountries = async () => {
    try {
        fetch(url)
            .then((res) => res.json())
            .then((json) => console.log(JSON.parse(json)));
    }
    catch (err) {
        console.error(err);
    }
};
getCountries();
