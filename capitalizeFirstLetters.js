const capitalizeFirstLetters = (input) => {
    input = input.split(' ');
    let result = ''

    for (let i = 0; i < input.length; i++) {
        result += input[i].charAt(0).toUpperCase() + input[i].slice(1);

        if (i < input.length - 1) {
            result += ' ';
        };
    };
    return result;
};

module.exports = capitalizeFirstLetters;