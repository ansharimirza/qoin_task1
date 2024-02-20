const {
    Response
} = require('../../frameworks/common');


module.exports = dependencies => {
    const {
        useCases: {
            test: {
                updateTestUseCase
            }
        }
    } = dependencies;

    const updateTest = async (req,res,next)  => {
        try {

            const {id,nama,status} = req.body;
            const response = await updateTestUseCase(dependencies).execute({id,nama,status});
            // const response = await updateTestUseCase(dependencies).execute({test:{id,nama,status}});

            res.status(204);
            res.json(new Response({
                statusCode:204,
                statusMessage:'success',
                statusDescription:'update test successfully',
                result: response,
            }));

            next();
            
        } catch (error) {
            next(error);
        }
    }

    return updateTest;
}