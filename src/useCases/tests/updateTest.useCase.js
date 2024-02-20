const {Test} = require('../../entities');

module.exports = dependencies => {
    const {
        testsRepository
    } = dependencies;

    if (!testsRepository) {
        throw new Error('The test repository should be exists in dependencies');
    }

    const execute = ({
        id,
        nama,
        status
    }) => {
        const test = new Test({
            id,
            nama,
            status,
        });

        return testsRepository.update(test);
    }

    return {
        execute
    }
}

