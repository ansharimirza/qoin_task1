const {Test} = require('../../entities');

module.exports = dependencies => {
    const {testsRepository} = dependencies;;

    if (!testsRepository) {
        throw new Error('The test repository should be exists in dependencies');
    }

    const execute = ({
        nama,
        status,
    }) => {
        const test = new Test({
            nama,
            status,
        });

        return testsRepository.add(test);
    }

    return {
        execute
    }
}

